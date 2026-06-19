import React from 'react';
import { motion } from 'motion/react';
import { Info, ShieldCheck, Users } from 'lucide-react';
import { IMAGENES } from '../constants';

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-fire-red font-bold uppercase tracking-widest text-sm mb-4">
              <Info className="w-4 h-4" />
              Nuestra Institución
            </div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Más de siete décadas de entrega y valor</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              La Asociación de Bomberos Voluntarios de Trenque Lauquen fue fundada con el firme propósito de proteger la vida y los bienes de nuestros vecinos. A lo largo de los años, nos hemos convertido en un pilar fundamental de la seguridad ciudadana.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Nuestra historia está escrita con el esfuerzo desinteresado de hombres y mujeres que, anteponiendo el bienestar común al propio, han forjado una institución modelo en la región, equipada con tecnología de punta y capacitación constante.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-fire-red" />
                  Misión
                </h3>
                <p className="text-sm text-slate-500">Proteger a la comunidad ante incendios, accidentes y catástrofes con profesionalismo.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-fire-red" />
                  Valores
                </h3>
                <p className="text-sm text-slate-500">Abnegación, sacrificio, desinterés, disciplina y espíritu de cuerpo.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={IMAGENES.gallery4} 
                alt="Historia de Bomberos" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-fire-red text-white p-8 rounded-3xl shadow-xl hidden sm:block">
              <div className="text-3xl font-bold">1946</div>
              <div className="text-sm opacity-80">Año de Fundación</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
