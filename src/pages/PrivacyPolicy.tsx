import { motion } from 'motion/react';
import React from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { Particles } from '../components/ui/particles';
import { WordFadeIn } from '../components/ui/word-fade-in';
import { AnimatedShinyText } from '../components/ui/animated-shiny-text';
import { ShieldCheck, Eye, Lock, FileText } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-graphite py-20 border-b border-gray-800 relative xl:min-h-[30vh] flex items-center overflow-hidden">
        <Particles className="absolute inset-0 z-10" quantity={40} ease={80} color="#c5a880" staticity={40} />
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center relative z-20">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center justify-center px-4 py-1.5 transition-all ease-in bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6 rounded-full border border-gold/30 backdrop-blur-sm">
              <AnimatedShinyText className="inline-flex items-center justify-center text-gold">
                <span>Legal</span>
              </AnimatedShinyText>
            </div>
            <WordFadeIn 
              words="Política de Privacidad"
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 justify-center"
            />
            <p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base leading-relaxed">
              En Yullmar LLC, la confidencialidad, la seguridad y el tratamiento responsable de su información corporativa son estándares fundamentales.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <BlurFade delay={0.2} inView>
            <div className="prose prose-slate max-w-none space-y-10 text-gray-700 font-light leading-relaxed">
              
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border-l-4 border-gold shadow-sm flex items-start gap-4 mb-8">
                <ShieldCheck className="w-8 h-8 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-heading font-medium text-primary-700 mb-2">Compromiso de Privacidad</h4>
                  <p className="text-sm text-gray-600">
                    Esta política detalla cómo Yullmar LLC recopila, protege, procesa y resguarda la información de nuestros clientes corporativos, socios, inversionistas y visitantes, de conformidad con las mejores prácticas de la industria y la legislación internacional protectora de datos.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-primary-700 mb-4 flex items-center">
                  <Eye className="w-5 h-5 mr-3 text-gold" /> 1. Información que Recopilamos
                </h3>
                <p>
                  Debido a la naturaleza de alta escala de nuestras soluciones en servicios financieros, logística internacional, aviación VIP y energía, la información recopilada se maneja de forma restringida. Recopilamos:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 ml-2">
                  <li><strong>Datos de contacto corporativo:</strong> Nombre completo, correo electrónico corporativo, número de teléfono o red empresarial, cargo en la organización y nombre de la empresa.</li>
                  <li><strong>Información de proyectos:</strong> Detalles específicos compartidos voluntariamente mediante formularios o consultas iniciales sobre viabilidad de obras, requerimientos logísticos, aeronáuticos y especificaciones de proyectos energéticos.</li>
                  <li><strong>Datos de conectividad:</strong> Información analítica estándar sobre el uso de la web recopilada de manera anónima para optimizar la navegación de nuestra plataforma corporativa.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-primary-700 mb-4 flex items-center">
                  <Lock className="w-5 h-5 mr-3 text-gold" /> 2. Uso y Finalidades del Tratamiento
                </h3>
                <p>
                  Toda la información recabada tiene como único fin la correcta estructuración y viabilidad de los servicios solicitados por el cliente, incluyendo:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 ml-2">
                  <li>Proporcionar asesoramiento profesional preciso y evaluar la estructuración de colaterales o instrumentos financieros (SBLC, BG, LOC).</li>
                  <li>Planificar, coordinar y optimizar operaciones logísticas, de infraestructura o soporte aeronáutico VIP.</li>
                  <li>Responder de forma oportuna a las solicitudes de contacto y agendar de manera exclusiva reuniones con asesores estratégicos.</li>
                  <li>Garantizar el estricto cumplimiento legal, fiscal e internacional aplicable a transacciones corporativas bilaterales.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-primary-700 mb-4 flex items-center">
                  <ShieldCheck className="w-5 h-5 mr-3 text-gold" /> 3. Confidencialidad Absoluta y Protección de Datos
                </h3>
                <p>
                  Yullmar LLC aplica medidas de seguridad técnicas, administrativas y organizativas de nivel corporativo para evitar el acceso no autorizado, la divulgación, alteración o pérdida accidental de la información. 
                </p>
                <p className="mt-4 text-gray-600 italic">
                  * No vendemos, alquilamos ni cedemos información de identificación personal o corporativa a terceros bajo ninguna circunstancia sin consentimiento previo y expreso, excepto cuando sea requerido por autoridades reguladoras en estricto cumplimiento normativo (KYC / AML).
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-primary-700 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-3 text-gold" /> 4. Derechos de Acceso, Rectificación y Cancelación
                </h3>
                <p>
                  Los usuarios e interlocutores corporativos conservan sus derechos de acceso, rectificación, limitación y supresión de sus datos. En cualquier momento, puede solicitar la actualización o remoción de su información corporativa enviando una comunicación formal a nuestro oficial de cumplimiento vía correo electrónico a:
                </p>
                <div className="mt-4 p-4 bg-gray-50 border border-gray-100 rounded-lg inline-block font-mono text-xs md:text-sm text-primary-700 font-semibold">
                  info@yullmar.com
                </div>
              </div>

              <div className="pt-8 border-t border-gray-150 text-xs text-gray-400">
                <p>Última actualización: 29 de Mayo de 2026. Yullmar LLC se reserva el derecho de modificar esta política para adaptarla a modificaciones legislativas o de operaciones institucionales.</p>
              </div>

            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
