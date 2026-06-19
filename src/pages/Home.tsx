import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { IMAGENES } from '../constants';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGENES.hero} 
            alt="Cuartel de Bomberos Trenque Lauquen" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[0.9] mt-12">
              Bomberos Voluntarios <br />
              <span>Trenque Lauquen</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light">
              Al servicio de nuestra comunidad las 24 horas, los 365 días del año. 
              Valentía y compromiso en cada intervención.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="bg-white/95 backdrop-blur-sm px-8 py-3 rounded-full shadow-xl">
                <span className="text-fire-red font-bold uppercase tracking-[0.2em] text-sm">
                  Abnegación • Sacrificio • Desinterés
                </span>
              </div>
              <a 
                href="tel:100" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-fire-red hover:bg-fire-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-fire-red/20"
              >
                <Phone className="w-5 h-5" />
                Emergencias: 100
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-fire-red text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-1">80</div>
            <div className="text-xs uppercase tracking-widest opacity-80">Años de Historia</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">40</div>
            <div className="text-xs uppercase tracking-widest opacity-80">Bomberos Activos</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">15</div>
            <div className="text-xs uppercase tracking-widest opacity-80">Unidades Móviles</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">1000+</div>
            <div className="text-xs uppercase tracking-widest opacity-80">Servicios Anuales</div>
          </div>
        </div>
      </section>
    </>
  );
}
