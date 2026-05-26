import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, DraftingCompass, Building2, PaintBucket } from 'lucide-react';
import { Link } from 'react-router-dom';
import constImg from '../assets/images/construction_site_1779807399506.png';
import villaImg from '../assets/images/modern_villa_1779807431298.png';
import financeImg from '../assets/images/financial_office_1779807486483.png';
import transportImg from '../assets/images/heavy_machinery_1779807502433.png';
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
              words="Servicios de Construcción y Desarrollo"
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 justify-center"
            />
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mt-6">
              Experiencia técnica y gestión impecable para proyectos de cualquier escala en Estados Unidos y Panamá.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Overview Boxes - Cómo trabajamos */}
      <section className="-mt-16 relative z-30 container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <h2 className="text-3xl font-heading font-bold text-primary-700 mb-4 relative z-10">Cómo trabajamos</h2>
           <p className="text-gray-600 font-light text-lg max-w-3xl relative z-10">
             Contamos con un equipo de diseñadores y constructores profesionales que pueden ayudarle a construir o renovar su casa con materiales y mano de obra de primera calidad, garantizados para toda la vida.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BlurFade delay={0.2} inView yOffset={20} className="h-full">
            <MagicCard className="bg-primary-700 text-white p-8 rounded-xl shadow-2xl border-none flex flex-col items-start h-full hover:-translate-y-2 transition-transform duration-300" gradientColor="rgba(197, 168, 128, 0.2)">
              <div className="text-gold font-heading font-bold text-5xl mb-4 opacity-50">01</div>
              <h3 className="font-heading font-bold text-xl mb-3">Diseño</h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">Trabajamos juntos en cada etapa, para asegurarnos de que entendemos completamente lo que quiere antes de empezar a trabajar en su proyecto.</p>
            </MagicCard>
          </BlurFade>
          
          <BlurFade delay={0.3} inView yOffset={20} className="h-full">
            <MagicCard className="bg-primary-700 text-white p-8 rounded-xl shadow-2xl border-none flex flex-col items-start h-full hover:-translate-y-2 transition-transform duration-300" gradientColor="rgba(197, 168, 128, 0.2)">
              <div className="text-gold font-heading font-bold text-5xl mb-4 opacity-50">02</div>
              <h3 className="font-heading font-bold text-xl mb-3">Planificación</h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">Estamos dedicados a la calidad del diseño en cada etapa de su proyecto, desde la planificación inicial hasta la finalización y el mantenimiento después del día de la mudanza.</p>
            </MagicCard>
          </BlurFade>

          <BlurFade delay={0.4} inView yOffset={20} className="h-full">
            <MagicCard className="bg-primary-700 text-white p-8 rounded-xl shadow-2xl border-none flex flex-col items-start h-full hover:-translate-y-2 transition-transform duration-300" gradientColor="rgba(197, 168, 128, 0.2)">
              <div className="text-gold font-heading font-bold text-5xl mb-4 opacity-50">03</div>
              <h3 className="font-heading font-bold text-xl mb-3">Construcción</h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">Nuestro equipo está formado por ingenieros y arquitectos experimentados que han trabajado en cientos de proyectos de ingeniería civil.</p>
            </MagicCard>
          </BlurFade>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-24">
          
          {/* Bloque 1: Constructora */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
                Somos Constructora
              </h2>
              <div className="w-12 h-1 bg-gold mb-8"></div>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                Estamos orgullosos del trabajo que hacemos, cada proyecto es realizado con cuidado, utilizando materiales de primera calidad. Nuestro equipo de profesionales te guiará para que tu proyecto se desarrolle sin problemas de principio a fin.
              </p>
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
                <img referrerPolicy="no-referrer" src={constImg} alt="Constructora" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary-700/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-gold rounded-2xl z-0 opacity-20 blur-xl"></div>
              <div className="absolute top-10 -left-10 w-32 h-32 bg-primary-700 rounded-full z-0 opacity-10 blur-2xl"></div>
            </motion.div>
          </div>

          {/* Bloque 2: Inmobiliaria */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="relative"
            >
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                 <img referrerPolicy="no-referrer" src={villaImg} alt="Inmobiliaria" className="w-full h-full object-cover" />
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
                Somos Inmobiliaria
              </h2>
              <div className="w-12 h-1 bg-gold mb-8"></div>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                Nuestra misión es ayudarte a tomar buenas decisiones proporcionándote información precisa sobre la propiedad que deseas comprar. Esto incluye asesoría sobre la mejor manera de financiarla o negociar con los bancos las opciones de financiación. También ayudamos a encontrar contratistas cualificados que puedan realizar las mejoras necesarias antes de la venta.
              </p>
              <Link 
                to="/contacto" 
                className="inline-flex items-center text-sm font-semibold text-primary-700 uppercase tracking-wider hover:text-gold transition-colors"
              >
                Contáctanos <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>

          {/* Bloque 3: Desarrollo Financiero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
                Somos Desarrollo financiero
              </h2>
              <div className="w-12 h-1 bg-gold mb-8"></div>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                Proporcionamos servicios de microfinanciación para ayudar a las personas a crear negocios que generen puestos de trabajo e ingresos. Nuestros préstamos les permiten invertir en educación, atención sanitaria, agricultura, vivienda y otras actividades productivas que mejoran el nivel de vida.
              </p>
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
                <img referrerPolicy="no-referrer" src={financeImg} alt="Desarrollo Financiero" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary-700/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-gold rounded-2xl z-0 opacity-20 blur-xl"></div>
            </motion.div>
          </div>

          {/* Bloque 4: Maquila de Equipos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="relative"
            >
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                 <img referrerPolicy="no-referrer" src={transportImg} alt="Maquila de equipos de transporte" className="w-full h-full object-cover" />
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
                Somos maquila de equipos<br/>de transporte de carga pesada
              </h2>
              <div className="w-12 h-1 bg-gold mb-8"></div>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                Potenciamos tu operación fabricando y ensamblando, bajo maquila, componentes y equipos para transporte de alto tonelaje con estándares de calidad, trazabilidad de materiales y estricta confidencialidad. Integramos ingeniería, soldadura certificable, pintura industrial y pruebas funcionales para entregar lotes consistentes, a tiempo y a la medida de tu especificación.
              </p>
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
             ¿Listo para empezar a construir tu visión?
           </h3>
           <Link 
              to="/contacto" 
              className="inline-flex items-center bg-gold text-primary-700 hover:bg-white hover:text-primary-700 transition-colors px-10 py-5 rounded font-heading font-bold uppercase tracking-wider shadow-lg hover:shadow-xl"
            >
              Solicita un Presupuesto Sin Compromiso
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>
      </section>
    </div>
  );
}
