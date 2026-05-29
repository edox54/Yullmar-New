import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, DraftingCompass, Building2, Landmark, Plane, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import constImg from '../assets/images/construction_site_1779807399506.png';
import villaImg from '../assets/images/modern_villa_1779807431298.png';
import financeImg from '../assets/images/financial_office_1779807486483.png';
import transportImg from '../assets/images/heavy_machinery_1779807502433.png';
import fboImg from '../assets/images/fbo_vip_aviation_1780023426968.png';
import { MagicCard } from '../components/ui/magic-card';
import { WordFadeIn } from '../components/ui/word-fade-in';
import { BlurFade } from '../components/ui/blur-fade';
import { Particles } from '../components/ui/particles';
import { AnimatedShinyText } from '../components/ui/animated-shiny-text';

export function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-primary-700 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img referrerPolicy="no-referrer"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            src={constImg} 
            alt="Fondo Servicios" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-700 via-primary-700/80 to-transparent"></div>
          <Particles className="absolute inset-0 z-10" quantity={80} ease={80} color="#c5a880" staticity={40} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20 max-w-7xl text-center">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center justify-center px-4 py-1.5 transition-all ease-in bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6 rounded-full border border-gold/30 backdrop-blur-sm shadow-[0_0_15px_rgba(197,168,128,0.3)] hover:bg-gold/20 hover:scale-105 duration-300">
              <AnimatedShinyText className="inline-flex items-center justify-center text-gold">
                <span>Nuestra Experiencia</span>
              </AnimatedShinyText>
            </div>
            <WordFadeIn 
              words="Áreas de Soluciones Corporativas"
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 justify-center"
            />
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mt-6">
              Experto asesoramiento y coordinación de recursos financieros, logísticos y de infraestructura energética con alcance internacional.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Overview Boxes - Cómo trabajamos */}
      <section className="-mt-16 relative z-30 container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <h2 className="text-3xl font-heading font-bold text-primary-700 mb-4 relative z-10">Metodología Global</h2>
           <p className="text-gray-600 font-light text-lg max-w-3xl relative z-10">
             Coordinamos estrechamente con juntas directivas, ministerios y fondos internacionales para estructurar proyectos viables y rentables, amparados por estrictas garantías.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BlurFade delay={0.2} inView yOffset={20} className="h-full">
            <MagicCard className="bg-primary-700 text-white p-8 rounded-xl shadow-2xl border-none flex flex-col items-start h-full hover:-translate-y-2 transition-transform duration-300" gradientColor="rgba(197, 168, 128, 0.2)">
              <div className="text-gold font-heading font-bold text-5xl mb-4 opacity-50">01</div>
              <h3 className="font-heading font-bold text-xl mb-3">Estructuración</h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">Evaluamos exhaustivamente la viabilidad comercial y el encaje estratégico del proyecto corporativo o estatal.</p>
            </MagicCard>
          </BlurFade>
          
          <BlurFade delay={0.3} inView yOffset={20} className="h-full">
            <MagicCard className="bg-primary-700 text-white p-8 rounded-xl shadow-2xl border-none flex flex-col items-start h-full hover:-translate-y-2 transition-transform duration-300" gradientColor="rgba(197, 168, 128, 0.2)">
              <div className="text-gold font-heading font-bold text-5xl mb-4 opacity-50">02</div>
              <h3 className="font-heading font-bold text-xl mb-3">Instrumentación</h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">Facilitamos y verificamos la emisión de colaterales bancarios y salvaguardas líquidas de confianza internacional (SBLC, BG, LOC).</p>
            </MagicCard>
          </BlurFade>

          <BlurFade delay={0.4} inView yOffset={20} className="h-full">
            <MagicCard className="bg-primary-700 text-white p-8 rounded-xl shadow-2xl border-none flex flex-col items-start h-full hover:-translate-y-2 transition-transform duration-300" gradientColor="rgba(197, 168, 128, 0.2)">
              <div className="text-gold font-heading font-bold text-5xl mb-4 opacity-50">03</div>
              <h3 className="font-heading font-bold text-xl mb-3">Coordinación</h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">Garantizamos una ejecución logística integrada, soporte aeronáutico VIP y asesoramiento integral continuo.</p>
            </MagicCard>
          </BlurFade>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-24">
          
          {/* Bloque 1: Servicios Financieros Internacionales */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center animate-fade-in">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
                Servicios Financieros Internacionales
              </h2>
              <div className="w-12 h-1 bg-gold mb-8"></div>
              <p className="text-gray-600 font-light leading-relaxed mb-6 text-base md:text-lg">
                Facilitación y estructuración de soluciones financieras avanzadas para operaciones comerciales, de inversión y corporativas globales de gran escala. Brindamos el respaldo técnico necesario para asegurar colaterales corporativos legítimos con bancos corresponsales internacionales de primer nivel.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700 font-light">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> SBLC - Standby Letter of Credit</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> BG - Bank Guarantee</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> LOC - Letter of Credit</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Estructuración de financiamiento internacional</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Apoyo en operaciones de comercio global</li>
              </ul>
              <Link 
                to="/contacto" 
                className="inline-flex items-center text-sm font-semibold text-primary-700 uppercase tracking-wider hover:text-gold transition-colors"
              >
                Contáctanos <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="order-1 lg:order-2 relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                <img referrerPolicy="no-referrer" src={financeImg} alt="Servicios Financieros Internacionales" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary-700/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-gold rounded-2xl z-0 opacity-20 blur-xl"></div>
              <div className="absolute top-10 -left-10 w-32 h-32 bg-primary-700 rounded-full z-0 opacity-10 blur-2xl"></div>
            </motion.div>
          </div>

          {/* Bloque 2: Logística Internacional */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="relative"
            >
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                 <img referrerPolicy="no-referrer" src={transportImg} alt="Logística Internacional" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-primary-700/10 mix-blend-multiply"></div>
               </div>
               <div className="absolute -top-6 -left-6 w-3/4 h-3/4 bg-primary-700 rounded-2xl z-0 opacity-10 blur-xl"></div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
                Logística Internacional
              </h2>
              <div className="w-12 h-1 bg-gold mb-8"></div>
              <p className="text-gray-600 font-light leading-relaxed mb-6 text-base md:text-lg">
                Coordinación y optimización de soluciones logísticas multimodales complejas para cargamentos industriales de sobredimensión, operaciones comerciales complejas y proyectos de infraestructura.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700 font-light">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Logística aérea integral</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Transporte terrestre pesado y especial</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Operaciones fluviales de alto calado</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Logística marítima de contenedores y granel</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Gestión aduanera y control de carga internacional</li>
              </ul>
              <Link 
                to="/contacto" 
                className="inline-flex items-center text-sm font-semibold text-primary-700 uppercase tracking-wider hover:text-gold transition-colors"
              >
                Contáctanos <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>

          {/* Bloque 3: Energía e Infraestructura */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
                Energía e Infraestructura
              </h2>
              <div className="w-12 h-1 bg-gold mb-8"></div>
              <p className="text-gray-600 font-light leading-relaxed mb-6 text-base md:text-lg">
                Desarrollo, coordinación técnica y facilitación estratégica de megaproyectos industriales, plantas eléctricas y complejos hidrocarburíferos con un sólido enfoque de sostenibilidad.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700 font-light">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Construcción y consultoría de plantas hidroeléctricas</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Plantas de generación y cogeneración eléctrica</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Diseño y ensamble de refinerías modulares</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Coordinación de proyectos de energía de gas y petróleo</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Alianzas estratégicas internacionales para infraestructura</li>
              </ul>
              <Link 
                to="/contacto" 
                className="inline-flex items-center text-sm font-semibold text-primary-700 uppercase tracking-wider hover:text-gold transition-colors"
              >
                Contáctanos <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="order-1 lg:order-2 relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                <img referrerPolicy="no-referrer" src={constImg} alt="Energía e Infraestructura" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary-700/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-gold rounded-2xl z-0 opacity-20 blur-xl"></div>
            </motion.div>
          </div>

          {/* Bloque 4: FBO Aéreo VIP Internacional */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="relative"
            >
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                 <img referrerPolicy="no-referrer" src={fboImg} alt="FBO Aéreo VIP Internacional" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-primary-700/10 mix-blend-multiply"></div>
               </div>
               <div className="absolute -top-6 -left-6 w-3/4 h-3/4 bg-primary-700 rounded-2xl z-0 opacity-10 blur-xl"></div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
                FBO Aéreo VIP Internacional
              </h2>
              <div className="w-12 h-1 bg-gold mb-8"></div>
              <p className="text-gray-600 font-light leading-relaxed mb-6 text-base md:text-lg">
                Servicios privados premium de aviación corporativa, soporte técnico aeroportuario terrestre y atención VIP ejecutiva exclusiva con máxima seguridad y discreción.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700 font-light">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Manejo de vuelos ejecutivos y corporativos</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Servicios FBO de rango internacional completo</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Atención especializada VIP para dignatarios y empresarios</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Coordinación integral de aeronaves privadas en tierra</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-gold shrink-0 mr-3" /> Soporte logístico operativo y despacho aeroportuario</li>
              </ul>
              <Link 
                to="/contacto" 
                className="inline-flex items-center text-sm font-semibold text-primary-700 uppercase tracking-wider hover:text-gold transition-colors"
              >
                Contáctanos <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#c5a880 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
           <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
             ¿Listo para estructurar tu proyecto con alcance global?
           </h3>
           <Link 
              to="/contacto" 
              className="inline-flex items-center bg-gold text-primary-700 hover:bg-white hover:text-primary-700 transition-colors px-10 py-5 rounded font-heading font-bold uppercase tracking-wider shadow-lg hover:shadow-xl"
            >
              Hable con un Asesor Estratégico
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>
      </section>
    </div>
  );
}
