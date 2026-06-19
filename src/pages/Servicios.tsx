import React from 'react';
import { motion } from 'motion/react';
import { Flame, Car, LifeBuoy, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Servicios() {
  return (
    <section id="servicios" className="py-32 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div className="max-w-2xl">
            <span className="text-fire-red font-bold uppercase tracking-widest text-sm">¿Qué hacemos?</span>
            <h2 className="text-4xl font-bold mt-2">Servicios a la Comunidad</h2>
            <p className="text-slate-400 mt-4">
              Nuestra labor va mucho más allá de apagar incendios. Estamos preparados para una amplia gama de emergencias y servicios preventivos.
            </p>
          </div>
          <Link to="/contacto" className="flex items-center gap-2 text-white font-bold hover:text-fire-red transition-colors">
            Consultar por servicios <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Flame />, title: "Incendios", desc: "Combate de incendios estructurales, forestales, rurales y vehiculares." },
            { icon: <Car />, title: "Accidentes", desc: "Rescate y asistencia en accidentes de tránsito en rutas y zona urbana." },
            { icon: <LifeBuoy />, title: "Rescate", desc: "Búsqueda y rescate de personas en diversas situaciones críticas." },
            { icon: <ShieldCheck />, title: "Prevención", desc: "Capacitaciones, inspecciones y asesoramiento en seguridad contra incendios." }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 bg-fire-red/20 text-fire-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
