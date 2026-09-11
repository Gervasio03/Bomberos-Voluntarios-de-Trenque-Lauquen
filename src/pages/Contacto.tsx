import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

export default function Contacto() {
  const [nombre, setNombre] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [asunto, setAsunto] = React.useState('');
  const [mensaje, setMensaje] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bodyText = `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=bomberostrenque@hotmail.com&su=${encodeURIComponent(asunto || 'Contacto desde la Web')}&body=${encodeURIComponent(bodyText)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contacto" className="py-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-fire-red font-bold uppercase tracking-widest text-sm">Contacto</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">Estamos para escucharte</h2>
            <p className="text-slate-600 mb-10">
              Si tenés alguna duda, querés hacernos una consulta técnica o simplemente querés saber más sobre nuestra labor, no dudes en escribirnos.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-100 text-fire-red rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Ubicación</h4>
                  <p className="text-slate-500">Leandro N. Alem Num 466, Trenque Lauquen, Buenos Aires</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-100 text-fire-red rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Teléfonos</h4>
                  <p className="text-slate-500">Emergencias: 100</p>
                  <p className="text-slate-500">Fijos: 02392 422100 / 02392 430333</p>
                  <p className="text-slate-500">Cel y WhatsApp: +542392516461</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-100 text-fire-red rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-500">bomberostrenque@hotmail.com</p>
                  <p className="text-slate-500">trenquelauquenbomberos@gmail.com</p>
                  <p className="text-slate-500">asoc.trenquelauquen@bomberosargentina.org.ar</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12 flex gap-4">
              <a 
                href="https://www.facebook.com/bomberoshoy/?locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-fire-red transition-colors"
                id="facebook-social-link"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/bomberostl033/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-fire-red transition-colors"
                id="instagram-social-link"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-fire-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fire-red/20 focus:border-fire-red transition-all" 
                    placeholder="Tu nombre" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fire-red/20 focus:border-fire-red transition-all" 
                    placeholder="tu@email.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Asunto</label>
                <input 
                  type="text" 
                  value={asunto}
                  onChange={(e) => setAsunto(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fire-red/20 focus:border-fire-red transition-all" 
                  placeholder="¿En qué podemos ayudarte?" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mensaje</label>
                <textarea 
                  rows={4} 
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-fire-red/20 focus:border-fire-red transition-all" 
                  placeholder="Escribí tu mensaje aquí..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                Enviar Mensaje
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
