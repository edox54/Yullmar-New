import { motion } from 'motion/react';
import React from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { Particles } from '../components/ui/particles';
import { WordFadeIn } from '../components/ui/word-fade-in';
import { AnimatedShinyText } from '../components/ui/animated-shiny-text';
import { Scale, FileSpreadsheet, Globe, CheckSquare } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-graphite py-20 border-b border-gray-800 relative xl:min-h-[30vh] flex items-center overflow-hidden">
        <Particles className="absolute inset-0 z-10" quantity={40} ease={80} color="#c5a880" staticity={40} />
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center relative z-20">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center justify-center px-4 py-1.5 transition-all ease-in bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6 rounded-full border border-gold/30 backdrop-blur-sm">
              <AnimatedShinyText className="inline-flex items-center justify-center text-gold">
                <span>Condiciones</span>
              </AnimatedShinyText>
            </div>
            <WordFadeIn 
              words="Términos de Servicio"
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 justify-center"
            />
            <p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base leading-relaxed">
              Consulte las directrices regulatorias, responsabilidades y marcos operativos bajo los cuales Yullmar LLC ofrece sus servicios de facilitación global.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <BlurFade delay={0.2} inView>
            <div className="prose prose-slate max-w-none space-y-10 text-gray-700 font-light leading-relaxed">
              
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border-l-4 border-primary-700 shadow-sm flex items-start gap-4 mb-8">
                <Scale className="w-8 h-8 text-primary-700 shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-heading font-medium text-primary-700 mb-2">Aviso de Regulación y Marco Legal</h4>
                  <p className="text-sm text-gray-600">
                    El acceso y uso de este sitio web, así como la interacción inicial para la estructuración y facilitación de nuestros servicios financieros corporativos, logísticos, energéticos y aeroportuarios, están sujetos a las siguientes condiciones de servicio y leyes internacionales aplicables.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-primary-700 mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-3 text-gold" /> 1. Propósito de la Plataforma e Intermediación
                </h3>
                <p>
                  Yullmar LLC actúa como dinamizador y facilitador global corporativo estructurando sinergias multinacionales. La información provista en este sitio web tiene carácter divulgativo, orientativo e introductorio para prospectos, juntas directivas y ministerios gubernamentales. No constituye en sí misma un contrato final de financiamiento, emisión ni obligación vinculante hasta la firma recíproca de correspondientes acuerdos formales bilaterales (Escrow, Term Sheets o Acuerdos de Facilitación).
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-primary-700 mb-4 flex items-center">
                  <FileSpreadsheet className="w-5 h-5 mr-3 text-gold" /> 2. Rol en Servicios Financieros Internacionales
                </h3>
                <p>
                  En relación con instrumentos financieros de alta gama, incluyendo cartas de crédito Standby (SBLC), garantías bancarias (BG) y cartas de crédito (LOC):
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 ml-2">
                  <li>Yullmar LLC interviene como estructurador exclusivo de colaterales y conducto de coordinación entre el solicitante y las entidades bancarias emisoras de primer nivel (Top 10 / Top 25 Tier 1 Banks).</li>
                  <li>Cualquier transacción o emisión requiere la debida diligencia previa (Due Diligence) de conformidad con los estándares internacionales antilavado de dinero (AML), conozca a su cliente (KYC) y regulaciones del GAFI.</li>
                  <li>No garantizamos la aprobación final de instrumentos si los requisitos regulatorios indispensables no son solventados satisfactoriamente por el solicitante.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-primary-700 mb-4 flex items-center">
                  <CheckSquare className="w-5 h-5 mr-3 text-gold" /> 3. Responsabilidad en Logística, Aviación VIP y Energía
                </h3>
                <p>
                  Las operaciones físicas de transporte multimodal, aviación privada FBO, o puesta en marcha de complejos energéticos e infraestructura pesada, se rigen estrictamente por tratados mundiales (Convenio de Varsovia/Montreal para aeronáutica, normas marítimas internacionales, etc.) y las licencias vigentes en las jurisdicciones de Estados Unidos, Panamá y mercados emergentes asociados.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-primary-700 mb-4 flex items-center">
                  <Scale className="w-5 h-5 mr-3 text-gold" /> 4. Propiedad Intelectual e Industrial
                </h3>
                <p>
                  Todas las marcas, logotipos, textos, renders, estructuras de datos, código fuente y diseños presentes en este portal pertenecen a Yullmar LLC y están protegidos por leyes de propiedad intelectual e industrial internacionales. Queda terminantemente prohibida su reproducción, alteración o distribución comercial no autorizada.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-primary-700 mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-3 text-gold" /> 5. Jurisdicción y Resolución de Conflictos
                </h3>
                <p>
                  Cualquier desavenencia motivada por el uso del sitio o servicios de contacto preliminares se resolverá prioritariamente bajo mediación institucional y, en su defecto, de conformidad con las leyes vigentes en el Estado de Florida, Estados Unidos, con sumisión expresa a los tribunales de la ciudad de Miami.
                </p>
              </div>

              <div className="pt-8 border-t border-gray-150 text-xs text-gray-400">
                <p>Última actualización: 29 de Mayo de 2026. Yullmar LLC.</p>
              </div>

            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
