import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { Particles } from '../components/ui/particles';
import { WordFadeIn } from '../components/ui/word-fade-in';
import { AnimatedShinyText } from '../components/ui/animated-shiny-text';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Mensaje enviado. Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-graphite py-24 border-b border-gray-800 relative xl:min-h-[40vh] flex items-center overflow-hidden">
        <Particles className="absolute inset-0 z-10" quantity={60} ease={80} color="#c5a880" staticity={50} />
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center relative z-20">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center justify-center px-4 py-1.5 transition-all ease-in bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6 rounded-full border border-gold/30 backdrop-blur-sm">
              <AnimatedShinyText className="inline-flex items-center justify-center text-gold">
                <span>Contáctanos</span>
              </AnimatedShinyText>
            </div>
            <WordFadeIn 
              words="Hablemos de tu próximo proyecto."
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 justify-center"
            />
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Nuestro equipo de expertos en Miami y Panamá está listo para asesorarte. Contáctanos para discutir viabilidad, costos y tiempos de tu obra.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            {/* Info Side */}
            <div className="lg:col-span-2 space-y-12">
              <BlurFade delay={0.2} inView>
                <div className="inline-flex items-center justify-center px-4 py-1.5 transition-all ease-in bg-primary-700/5 text-primary-700 text-xs font-bold tracking-widest uppercase mb-4 rounded-full border border-primary-700/10">
                  <AnimatedShinyText className="inline-flex items-center justify-center text-primary-700">
                    Información
                  </AnimatedShinyText>
                </div>
                <h3 className="text-3xl font-heading font-bold text-primary-700 mb-8">
                  Nuestras Oficinas
                </h3>
              </BlurFade>

              <div className="space-y-8">
                {[
                  {
                    icon: <MapPin className="w-5 h-5 text-gold" />,
                    title: "Oficina Principal (Miami)",
                    content: "11440 N. Kendall Drive, Suite 401\nMiami, FL 33176",
                    link: "https://maps.google.com/?q=11440+N.+Kendall+Drive,+Miami,+FL+33176",
                    linkText: "Ver en Google Maps"
                  },
                  {
                    icon: <Phone className="w-5 h-5 text-gold" />,
                    title: "Teléfono",
                    content: "+1 305-746-1273"
                  },
                  {
                    icon: <Mail className="w-5 h-5 text-gold" />,
                    title: "Correo Electrónico",
                    content: "info@yullmar.com"
                  }
                ].map((item, i) => (
                  <BlurFade delay={0.3 + (i * 0.1)} inView key={i} className="flex items-start group">
                    <div className="w-12 h-12 bg-primary-700/5 rounded-full flex items-center justify-center shrink-0 mr-6 group-hover:scale-110 group-hover:bg-primary-700/10 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-primary-700 mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                      <p className="text-gray-600 font-light leading-relaxed whitespace-pre-line">
                        {item.content}
                      </p>
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary-700 hover:text-gold transition-colors inline-flex mt-2">
                          {item.linkText}
                        </a>
                      )}
                    </div>
                  </BlurFade>
                ))}
              </div>

              <BlurFade delay={0.6} inView className="pt-8 border-t border-gray-100">
                <a href="https://wa.me/13057461273" target="_blank" rel="noopener noreferrer" className="w-full inline-flex justify-center items-center bg-[#25D366] text-white py-4 px-6 rounded font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-[#25D366]/50">
                  Chatear por WhatsApp
                </a>
              </BlurFade>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3">
              <BlurFade delay={0.4} inView>
                <div className="bg-white rounded-lg shadow-2xl border border-gray-100 p-8 md:p-12 hover:shadow-[0_20px_50px_rgba(197,168,128,0.15)] transition-shadow duration-500">
                  <h3 className="text-2xl font-heading font-bold text-primary-700 mb-8">Envíanos un mensaje</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-semibold text-gray-700 mb-1 block">Nombre Completo *</label>
                         <input 
                           type="text" 
                           required
                           value={formData.name}
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                           className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                           placeholder="Ej. Juan Pérez"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-semibold text-gray-700 mb-1 block">Correo Electrónico *</label>
                         <input 
                           type="email" 
                           required
                           value={formData.email}
                           onChange={(e) => setFormData({...formData, email: e.target.value})}
                           className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                           placeholder="juan@correo.com"
                         />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-semibold text-gray-700 mb-1 block">Teléfono / WhatsApp *</label>
                         <input 
                           type="tel" 
                           required
                           value={formData.phone}
                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
                           className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                           placeholder="+1 (555) 000-0000"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-semibold text-gray-700 mb-1 block">Tipo de Proyecto *</label>
                         <select 
                           required
                           value={formData.projectType}
                           onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                           className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors appearance-none"
                         >
                           <option value="" disabled>Seleccione una opción</option>
                           <option value="desarrollo">Desarrollo Inmobiliario</option>
                           <option value="construccion">Construcción Residencial/Comercial</option>
                           <option value="renovacion">Renovación / Remodelación</option>
                           <option value="otro">Otro</option>
                         </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 mb-1 block">Mensaje / Detalles de la obra</label>
                      <textarea 
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                        placeholder="Cuéntanos un poco sobre tu proyecto, ubicación y presupuesto estimado..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-primary-700 text-gold shadow-lg shadow-primary-700/30 hover:shadow-primary-700/50 hover:-translate-y-0.5 font-heading font-bold uppercase tracking-wider text-sm py-4 rounded transition-all duration-300"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </BlurFade>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        <iframe 
          title="Oficina Yullmar"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.666113840616!2d-80.38048632367622!3d25.6823330118671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c12217c2f8d3%3A0x6b44766860ca3fc4!2s11440%20N%20Kendall%20Dr%20%23401%2C%20Miami%2C%20FL%2033176%2C%20USA!5e0!3m2!1sen!2s!4v1716335123456!5m2!1sen!2s" 
          className="w-full h-full border-0 absolute inset-0 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          aria-hidden="false" 
          tabIndex={0}
        ></iframe>
      </section>
    </div>
  );
}
