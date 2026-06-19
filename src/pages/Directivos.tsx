import React from 'react';
import { motion } from 'motion/react';
import { IMAGENES } from '../constants';
import { ShieldCheck } from 'lucide-react';

const mesaEjecutiva = [
  { nombre: 'Juan Alberto Palomeque', cargo: 'Presidente' },
  { nombre: 'Rafael Francisco Marino', cargo: 'Vicepresidente' },
  { nombre: 'Mónica Juárez', cargo: 'Secretaria General' },
  { nombre: 'Ricardo A. Speranza', cargo: 'Secretario de Actas' },
  { nombre: 'Fernando Dellavedova', cargo: 'Secretario de Finanzas' },
  { nombre: 'Mariano Bruccieri', cargo: 'Secretario de Recaudación' },
];

const consejeros = [
  { nombre: 'Carlos Ernesto Palomeque', cargo: 'Consejero Titular' },
  { nombre: 'José Luis Mazoue', cargo: 'Consejero Titular' },
  { nombre: 'Omar Di Giacoma', cargo: 'Consejero Titular' },
  { nombre: 'Mario Jorge Arto', cargo: 'Consejero Suplente' },
  { nombre: 'Marcelo Tártara', cargo: 'Consejero Suplente' },
  { nombre: 'Ignacio J. Cadierno', cargo: 'Consejero Suplente' },
  { nombre: 'Lucio Gabriel Perriello', cargo: 'Consejero Suplente' },
];

const revisoresCuentas = [
  { nombre: 'María Virginia Arto', cargo: 'Revisor de cuentas titular' },
  { nombre: 'Melisa Schoenfeld', cargo: 'Revisor de cuentas titular' },
  { nombre: 'Paola Celeste Giménez', cargo: 'Revisor de cuentas titular' },
  { nombre: 'Osvaldo Luis Genoni', cargo: 'Revisor de cuentas suplente' },
  { nombre: 'César Daniel Hervera', cargo: 'Revisor de cuentas suplente' },
];

export default function Directivos() {
  return (
    <section className="py-32 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-fire-red font-bold uppercase tracking-widest text-sm">Institucional</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 text-slate-900 tracking-tight">Comisión Directiva</h1>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed italic">
            "Un puñado de inquietos soñadores cuyo objetivo principal es engrandecer cada día más la Institución."
          </p>
        </div>

        {/* Foto General de Directivos / Institucional */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-white aspect-[21/9] sm:aspect-[21/9] aspect-video">
            <img 
              src={IMAGENES.directiva} 
              alt="Comisión Directiva - Bomberos Voluntarios" 
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent"></div>
            <div className="absolute bottom-4 left-6 sm:bottom-8 sm:left-10 text-white text-left z-10">
              <div className="flex items-center gap-2 mb-1 sm:mb-2 text-fire-red">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">Consejo de Administración</span>
              </div>
              <h2 className="text-lg sm:text-3xl font-black tracking-tight leading-tight uppercase">Comisión Directiva Institucional</h2>
            </div>
          </div>
        </motion.div>

        {/* Mesa Ejecutiva - Cards elegantes sin foto */}
        <div className="mb-24">
          <h2 className="text-2xl font-black text-slate-900 mb-10 border-l-4 border-fire-red pl-4 uppercase tracking-tighter">Mesa Ejecutiva</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mesaEjecutiva.map((directivo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-fire-red/30 hover:shadow-md transition-all text-center flex flex-col justify-center min-h-[140px]"
              >
                <p className="text-fire-red font-bold text-xs mb-2 uppercase tracking-widest">{directivo.cargo}</p>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{directivo.nombre}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Consejeros y Revisores - Listado Estructurado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 border-t border-slate-200">
          {/* Consejeros */}
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-8 border-l-4 border-fire-red pl-4 uppercase tracking-tighter">Consejeros</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {consejeros.map((consejero, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-fire-red/30 transition-colors"
                >
                  <p className="text-fire-red font-bold text-[10px] uppercase tracking-widest mb-1">{consejero.cargo}</p>
                  <p className="text-slate-900 font-bold">{consejero.nombre}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Revisores de Cuentas */}
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-8 border-l-4 border-fire-red pl-4 uppercase tracking-tighter">Revisores de Cuentas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {revisoresCuentas.map((revisor, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-fire-red/30 transition-colors"
                >
                  <p className="text-fire-red font-bold text-[10px] uppercase tracking-widest mb-1">{revisor.cargo}</p>
                  <p className="text-slate-900 font-bold">{revisor.nombre}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
