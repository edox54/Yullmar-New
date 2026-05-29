import { Link } from 'react-router-dom';
import heroImg from '../assets/images/hero_buildings_1779807380027.png';
import constImg from '../assets/images/construction_site_1779807399506.png';
import renovImg from '../assets/images/interior_renovation_1779807416328.png';
import villaImg from '../assets/images/modern_villa_1779807431298.png';
import kitchenImg from '../assets/images/luxury_kitchen_1779807450946.png';
import plansImg from '../assets/images/engineering_plans_1779807467286.png';
import financeImg from '../assets/images/financial_office_1779807486483.png';
import transportImg from '../assets/images/heavy_machinery_1779807502433.png';
import fboImg from '../assets/images/fbo_vip_aviation_1780023426968.png';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, DraftingCompass, Building2, Landmark, Plane, Compass } from 'lucide-react';
import { NumberTicker } from '../components/ui/number-ticker';
import { MagicCard } from '../components/ui/magic-card';
import { Marquee } from '../components/ui/marquee';
import { WordFadeIn } from '../components/ui/word-fade-in';
import { BlurFade } from '../components/ui/blur-fade';
import { Particles } from '../components/ui/particles';
import { AnimatedShinyText } from '../components/ui/animated-shiny-text';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img referrerPolicy="no-referrer"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            src={heroImg} 
            alt="Soluciones Corporativas Globales" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-transparent"></div>
          <Particles className="absolute inset-0 z-10" quantity={100} ease={80} color="#c5a880" staticity={40} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20 max-w-7xl">
          <BlurFade delay={0.1} inView>
            <div className="max-w-3xl">
              <div className="inline-flex items-center justify-center px-4 py-1.5 transition-all ease-in bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6 rounded-full border border-gold/30 backdrop-blur-sm shadow-[0_0_15px_rgba(197,168,128,0.3)] hover:bg-gold/20 hover:scale-105 duration-300">
                <AnimatedShinyText className="inline-flex items-center justify-center text-gold">
                  <span>✨ Estructuración de proyectos de alto impacto</span>
                </AnimatedShinyText>
              </div>
              <WordFadeIn 
                words="YULLMAR LLC"
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-gold tracking-wider mb-4"
              />
              <p className="text-xl md:text-2xl text-white mb-6 font-semibold max-w-2xl leading-relaxed">
                Facilitadores internacionales de soluciones financieras, logísticas, energéticas y aeronáuticas.
              </p>
              <p className="text-md md:text-lg text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
                Conectamos capital, infraestructura, logística y operación para proyectos corporativos y gubernamentales de gran escala en mercados globales.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/contacto" 
                  className="bg-gold text-primary-700 hover:bg-white hover:text-primary-700 px-8 py-4 text-center font-heading font-semibold uppercase tracking-wider text-sm transition-all duration-300 rounded flex items-center justify-center group hover:shadow-[0_0_20px_rgba(197,168,128,0.5)]"
                >
                  Hablemos del Proyecto
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/servicios" 
                  className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-4 text-center font-heading font-semibold uppercase tracking-wider text-sm transition-all duration-300 rounded backdrop-blur-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  Ver Servicios
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Perfil Corporativo Section */}
      <section id="empresa" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <BlurFade delay={0.2} inView>
              <div className="inline-flex items-center justify-center px-4 py-1.5 transition-all ease-in bg-primary-700/5 text-primary-700 text-xs font-bold tracking-widest uppercase mb-6 rounded-full border border-primary-700/10">
                <AnimatedShinyText className="inline-flex items-center justify-center text-primary-700">
                  Perfil Corporativo
                </AnimatedShinyText>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6 leading-tight">
                Facilitación global y experiencia estratégica.
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed font-light text-base md:text-lg">
                <p>
                  Yullmar LLC es una empresa internacional orientada a la estructuración, facilitación y coordinación de servicios financieros, logísticos, energéticos y aeronáuticos. Nuestro enfoque está dirigido a clientes corporativos, inversionistas, grupos empresariales y proyectos estratégicos que requieren soluciones integrales con alcance global.
                </p>
                <p>
                  Actuamos como facilitadores clave de oportunidades, instrumentos financieros de alta gama y alianzas internacionales, integrando una robusta capacidad de gestión y operación especializada para proyectos de gran escala.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-100">
                <div className="group cursor-default">
                  <div className="text-4xl font-heading font-bold text-primary-700 mb-2 flex items-center group-hover:text-gold transition-colors duration-300">+<NumberTicker value={10} className="text-primary-700 group-hover:text-gold transition-colors duration-300 ml-1" /></div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold group-hover:text-primary-700 transition-colors duration-300">Años de <br/>Trayectoria</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-4xl font-heading font-bold text-primary-700 mb-2 flex items-center group-hover:text-gold transition-colors duration-300">+<NumberTicker value={20} className="text-primary-700 group-hover:text-gold transition-colors duration-300 ml-1" /></div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold group-hover:text-primary-700 transition-colors duration-300">Aliados <br/>Globales</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-4xl font-heading font-bold text-primary-700 mb-2 flex items-center group-hover:text-gold transition-colors duration-300">0<NumberTicker value={4} className="text-primary-700 group-hover:text-gold transition-colors duration-300" /></div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold group-hover:text-primary-700 transition-colors duration-300">Divisiones <br/>Estratégicas</div>
                </div>
              </div>
            </BlurFade>
            
            <BlurFade delay={0.4} inView className="relative">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(197,168,128,0.3)] transition-shadow duration-500 group">
                <motion.img referrerPolicy="no-referrer"
                  src={plansImg} 
                  alt="Estructuración Estratégica" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-primary-700/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold/20 rounded-full blur-3xl z-[-1] animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary-700/10 rounded-full blur-3xl z-[-1] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </BlurFade>
          </div>

          {/* Mision & Vision Sub-section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-12 border-t border-gray-100">
            <BlurFade delay={0.2} inView className="bg-gray-50 rounded-2xl p-8 lg:p-10 border-t-4 border-gold shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-heading font-bold text-gold uppercase tracking-widest block mb-4">Direccionamiento</span>
                <h4 id="mision" className="text-2xl font-heading font-bold text-primary-700 mb-4 flex items-center">
                  <Compass className="w-6 h-6 mr-2 text-gold animate-spin-slow" /> Misión
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  Brindar soluciones integrales y confiables en servicios financieros internacionales, logística global, energía, infraestructura y aviación VIP, facilitando instrumentos financieros como SBLC, BG y LOC, así como la estructuración de proyectos estratégicos que impulsen el crecimiento de nuestros clientes y aliados en mercados internacionales.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.4} inView className="bg-gray-50 rounded-2xl p-8 lg:p-10 border-t-4 border-primary-700 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-heading font-bold text-primary-700 uppercase tracking-widest block mb-4">Proyección</span>
                <h4 id="vision" className="text-2xl font-heading font-bold text-primary-700 mb-4 flex items-center">
                  <Compass className="w-6 h-6 mr-2 text-primary-700" /> Visión
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  Ser reconocidos como un grupo empresarial internacional líder en la facilitación de instrumentos financieros, desarrollo logístico, proyectos energéticos y servicios aeronáuticos VIP, destacándonos por nuestra seriedad, capacidad de gestión, innovación y compromiso con el desarrollo sostenible de grandes proyectos en América, Europa, Asia y mercados emergentes.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-gold font-heading font-bold tracking-widest uppercase text-sm mb-3">Servicios Corporativos</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 leading-tight">
              Áreas de Soluciones de Alto Impacto
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Servicios Financieros Internacionales",
                desc: "Estructuración y facilitación de instrumentos financieros corporativos clase mundial (SBLC, BG, LOC).",
                img: financeImg,
                icon: <Landmark className="w-5 h-5 text-gold" />
              },
              {
                title: "Logística Internacional",
                desc: "Coordinación multimodal aérea, marítima, fluvial y terrestre de carga industrial y comercial pesada.",
                img: transportImg,
                icon: <Compass className="w-5 h-5 text-gold" />
              },
              {
                title: "Energía e Infraestructura",
                desc: "Desarrollo y facilitación de centrales eléctricas, refinerías modulares, hidroeléctricas y terminales energéticas.",
                img: constImg,
                icon: <Building2 className="w-5 h-5 text-gold" />
              },
              {
                title: "FBO Aéreo VIP Internacional",
                desc: "Atención especializada para aviación ejecutiva privada, soporte en tierra FBO y servicios integrales VIP.",
                img: fboImg,
                icon: <Plane className="w-5 h-5 text-gold" />
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <MagicCard className="flex flex-col group bg-primary-700 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-none h-full overflow-hidden" gradientColor="rgba(197, 168, 128, 0.15)">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary-700/40 group-hover:bg-primary-700/20 transition-colors duration-500 z-10"></div>
                    <img referrerPolicy="no-referrer" src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-primary-700/80 backdrop-blur border border-gold/30 rounded-full flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-gold transition-colors">{service.title}</h4>
                      <p className="text-gray-300 font-light text-xs leading-relaxed mb-6">{service.desc}</p>
                    </div>
                    <Link to="/servicios" className="inline-flex items-center text-xs font-semibold text-gold uppercase tracking-wider group-hover:text-white transition-colors mt-auto">
                      Saber más <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/servicios" 
              className="inline-block bg-primary-700 text-white hover:bg-primary-600 px-8 py-4 rounded font-heading font-semibold uppercase tracking-wider text-sm transition-colors"
            >
              Conoce todos los detalles
            </Link>
          </div>
        </div>
      </section>

      {/* Portafolio Section */}
      <section id="portafolio" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <BlurFade delay={0.1} inView yOffset={20}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center justify-center px-4 py-1.5 transition-all ease-in bg-primary-700/5 text-primary-700 text-xs font-bold tracking-widest uppercase mb-6 rounded-full border border-primary-700/10">
                  <AnimatedShinyText className="inline-flex items-center justify-center text-primary-700">
                    Portafolio
                  </AnimatedShinyText>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 leading-tight mb-4">
                  Obras que hablan por sí solas.
                </h3>
                <p className="text-gray-600 font-light">Explora una selección de nuestros desarrollos más recientes. Calidad visual y estructural en cada detalle.</p>
              </div>
              <div className="mt-6 md:mt-0">
                 <button className="text-primary-700 font-semibold font-heading uppercase tracking-wider text-sm flex items-center hover:text-gold transition-colors group">
                   Ver todo el portafolio <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BlurFade delay={0.2} inView yOffset={30} className="group relative aspect-[4/3] md:aspect-auto md:h-[500px] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <img referrerPolicy="no-referrer" src={constImg} alt="Proyecto de Energía e Infraestructura" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-gold text-xs font-bold uppercase tracking-wider block mb-2">Energía e Infraestructura</span>
                <h4 className="text-2xl font-heading font-bold text-white mb-2">Estructuración de Complejos Generadores</h4>
                <p className="text-gray-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Coordinación de hidroeléctricas, parques solares y refinerías modulares.</p>
              </div>
            </BlurFade>
            <div className="grid grid-rows-2 gap-6 md:h-[500px]">
               <BlurFade delay={0.3} inView yOffset={30} className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img referrerPolicy="no-referrer" src={transportImg} alt="Logística Multimodal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-gold text-xs font-bold uppercase tracking-wider block mb-1">Logística Internacional</span>
                  <h4 className="text-xl font-heading font-bold text-white">Carga Industrial Pesada</h4>
                </div>
              </BlurFade>
              <BlurFade delay={0.4} inView yOffset={30} className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img referrerPolicy="no-referrer" src={fboImg} alt="FBO Aéreo VIP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-gold text-xs font-bold uppercase tracking-wider block mb-1">Aviación Ejecutiva</span>
                  <h4 className="text-xl font-heading font-bold text-white">Servicios de FBO VIP Internacional</h4>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso Section */}
      <section className="relative py-24 bg-graphite text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img referrerPolicy="no-referrer"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            src={heroImg} 
            alt="Facilitación Internacional" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/95 to-graphite/80"></div>
          <Particles className="absolute inset-0 z-10" quantity={60} ease={80} color="#ffffff" staticity={40} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <BlurFade delay={0.1} inView>
              <div className="inline-flex items-center justify-center px-4 py-1.5 transition-all ease-in bg-white/5 text-gold text-xs font-bold tracking-widest uppercase mb-6 rounded-full border border-gold/30">
                <AnimatedShinyText className="inline-flex items-center justify-center text-gold">
                  Compromiso
                </AnimatedShinyText>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-8">
                Compromiso Internacional de Alto Nivel
              </h3>
              <p className="text-gray-300 font-light text-lg mb-8 leading-relaxed">
                Yullmar LLC trabaja con visión global, confidencialidad, responsabilidad y capacidad de gestión para conectar capital, infraestructura, logística y operación en proyectos empresariales de alto nivel.
              </p>
              <Link to="/contacto" className="inline-flex items-center justify-center gap-2 bg-gold text-primary-700 px-8 py-4 rounded font-heading font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-primary-700 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Inicia tu visión <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </BlurFade>

            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Confidencialidad Absoluta",
                  desc: "Garantizamos un manejo riguroso y privado en la gestión corporativa, estructuración de instrumentos y proyectos a gran escala."
                },
                {
                  num: "02",
                  title: "Responsabilidad Global",
                  desc: "Aseguramos el cumplimiento de estándares internacionales de comercio, normativas financieras y sostenibilidad en todas nuestras operaciones."
                },
                {
                  num: "03",
                  title: "Capacidad de Gestión",
                  desc: "Facilitamos la movilización ágil de recursos técnicos, aeronaves, instrumentos SBLC/BG/LOC y sinergias multinacionales."
                }
              ].map((item, i) => (
                <BlurFade delay={0.2 + (i * 0.1)} inView key={i} className="flex gap-6 group cursor-default">
                  <div className="text-gold font-heading font-bold text-3xl md:text-4xl opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">{item.num}</div>
                  <div>
                    <h4 className="text-xl font-heading font-bold mb-2 text-white group-hover:text-gold transition-colors">{item.title}</h4>
                    <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
