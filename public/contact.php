<?php
/**
 * Yullmar LLC - PHP Form Processor for cPanel
 * Place this file in your public_html folder (copied automatically by the builder into /dist)
 */

// Allow cross-origin requests in case of local testing if needed
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, TRUE);

    // If not JSON, fallback to standard $_POST
    if (!$input) {
        $input = $_POST;
    }

    // Sanitize input
    $name = isset($input['name']) ? strip_tags(trim($input['name'])) : '';
    $email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
    $phone = isset($input['phone']) ? strip_tags(trim($input['phone'])) : '';
    $projectType = isset($input['projectType']) ? strip_tags(trim($input['projectType'])) : '';
    $message = isset($input['message']) ? strip_tags(trim($input['message'])) : '';

    // Validation
    if (empty($name) || empty($email) || empty($phone) || empty($projectType)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Por favor complete todos los campos obligatorios."]);
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "La dirección de correo electrónico no es válida."]);
        exit();
    }

    // --- CONFIGURATION ---
    // Change this to the email address where you want to receive the messages:
    $to = "info@yullmar.com"; 
    
    // Email subject
    $subject = "Nuevo Mensaje de Contacto: " . $name . " - Yullmar LLC";

    // Email content (HTML Format for beautiful inbox representation)
    $email_content = "
    <html>
    <head>
        <title>Nuevo Mensaje de Contacto</title>
        <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f4f4f4; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 8px; border-top: 5px solid #c5a880; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
            h2 { color: #1e3a5f; margin-top: 0; font-size: 24px; border-bottom: 1px solid #eeeeee; padding-bottom: 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1e3a5f; font-size: 14px; text-transform: uppercase; margin-bottom: 5px; display: block; }
            .value { background: #f9f9f9; padding: 12px; border-radius: 4px; border-left: 3px solid #c5a880; font-size: 15px; }
            .footer { margin-top: 30px; font-size: 12px; color: #888888; text-align: center; border-top: 1px solid #eeeeee; padding-top: 15px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>Nuevo Mensaje de Contacto - Yullmar LLC</h2>
            
            <div class='field'>
                <span class='label'>Nombre Completo:</span>
                <div class='value'>" . htmlspecialchars($name) . "</div>
            </div>
            
            <div class='field'>
                <span class='label'>Correo Electrónico:</span>
                <div class='value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div>
            </div>
            
            <div class='field'>
                <span class='label'>Teléfono:</span>
                <div class='value'>" . htmlspecialchars($phone) . "</div>
            </div>
            
            <div class='field'>
                <span class='label'>Tipo de Proyecto / Servicio:</span>
                <div class='value'>" . htmlspecialchars(ucfirst($projectType)) . "</div>
            </div>
            
            <div class='field'>
                <span class='label'>Mensaje / Detalles:</span>
                <div class='value' style='white-space: pre-wrap;'>" . nl2br(htmlspecialchars($message)) . "</div>
            </div>
            
            <div class='footer'>
                <p>Este mensaje fue enviado automáticamente desde el formulario de contacto de Yullmar LLC.</p>
                <p>&copy; " . date("Y") . " Yullmar LLC. Todos los derechos reservados.</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Headers
    // ALWAYS set From header to a domain-matching email on cPanel to prevent SPF/DMARC failures!
    // We set Reply-To to the user's input email so you can reply directly from your mailbox.
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: Yullmar LLC Web <info@yullmar.com>" . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "¡Mensaje enviado con éxito!"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Ocurrió un error al intentar enviar el mensaje. Inténtelo más tarde."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
}
?>
