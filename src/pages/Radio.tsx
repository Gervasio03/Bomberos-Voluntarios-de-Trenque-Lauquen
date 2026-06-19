import React from 'react';
import { motion } from 'motion/react';
import { Radio as RadioIcon, ExternalLink, Mic2, Volume2 } from 'lucide-react';
import { IMAGENES } from '../constants';

export default function Radio() {
  return (
    <section className="py-32 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-fire-red font-bold uppercase tracking-widest text-sm">Comunicación</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900">Radio Trenque Lauquen</h1>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Mantenete informado y conectado con nuestra comunidad a través de las transmisiones en vivo y programas especiales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
          >
            <img 
              src={IMAGENES.gallery2} 
              alt="Estudio de Radio" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-fire-red rounded-full flex items-center justify-center animate-pulse">
                  <Mic2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">En el Aire</h3>
                  <p className="text-white/70 text-sm italic">Sintonizá la actualidad de nuestra ciudad</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-50 text-fire-red rounded-2xl flex items-center justify-center">
                  <RadioIcon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Sintonizá la Radio</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8">
                Seguí en vivo todas las actividades, sorteos y novedades de Bomberos Voluntarios de Trenque Lauquen a través de RADIO LU 11 AM 1280, La Radio Regional para cinco provincias argentinas. Acompañanos en cada transmisión y mantenete informado sobre las acciones y eventos de nuestra institución.
              </p>
              
              <a 
                href="https://radiolu11.com.ar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-fire-red hover:bg-fire-dark text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-fire-red/20"
              >
                Ir a escuchar la Radio
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <Volume2 className="text-fire-red w-6 h-6" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Calidad</p>
                  <p className="font-bold text-slate-900">HD Audio</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <RadioIcon className="text-fire-red w-6 h-6" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Frecuencia</p>
                  <p className="font-bold text-slate-900">Online</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
