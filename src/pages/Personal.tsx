import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users } from 'lucide-react';
import { IMAGENES } from '../constants';

const oficialesJefes = [
  { nombre: 'Héctor J. Villaro', cargo: 'Jefe de Cuerpo', imagen: IMAGENES.jefeCuerpo },
  { nombre: 'Germán Gómez', cargo: '2º Jefe de Cuerpo', imagen: IMAGENES.segundoJefe },
];

const suboficialesSubalternos = [
  { nombre: 'Clarisa Lazarte', cargo: 'Suboficial' },
  { nombre: 'Roberto Pereda', cargo: 'Suboficial' },
  { nombre: 'Nicolás Gatica', cargo: 'Suboficial' },
  { nombre: 'Facundo Fortunoff', cargo: 'Suboficial' },
  { nombre: 'Fernando Faccio', cargo: 'Suboficial' },
];

const bomberos = [
  // Columna Izquierda
  'Facundo Mazoue', 'Alexis Ríos', 'Raúl Ribereau', 'Emmanuel Giangiacomo', 'Fernando Biandratti', 'Hernán Barbaste',
  // Columna Derecha
  'Florencia Navarro', 'Manuela Moras', 'Leonardo Mut', 'Valentina Del Río', 'Camila Méndez', 'Nicolás Morales',
  'Tomás Bruzzon', 'Camila Bentrovato', 'Mario Ribelotta', 'Jaqueline Bassani', 'Marcos Arango', 'Francisco Cicacci',
  'Florencia Díaz', 'Juan Manuel Lamon', 'Fermín F. Aquino'
];

const renderCard = (persona: any, index: number) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group border border-slate-100"
  >
    <div className="h-64 overflow-hidden relative">
      <img 
        src={persona.imagen} 
        alt={persona.nombre} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-5">
      <p className="text-fire-red font-bold text-[9px] uppercase tracking-widest mb-1">{persona.cargo}</p>
      <h3 className="text-lg font-bold text-slate-900 leading-tight">{persona.nombre}</h3>
    </div>
  </motion.div>
);

const ListItem: React.FC<{ cargo?: string; nombre: string }> = ({ cargo, nombre }) => (
  <div className="flex items-start gap-2 py-1.5 group break-inside-avoid-column">
    <CheckCircle2 className="w-4 h-4 text-fire-red shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
    <div className="text-sm leading-tight">
      {cargo && <span className="font-bold text-slate-700">{cargo}: </span>}
      <span className="text-slate-500">{nombre}</span>
    </div>
  </div>
);

export default function Personal() {
  return (
    <section className="py-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-fire-red px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Users className="w-4 h-4" />
            <span>Cuerpo Activo</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Personal del Servicio</h1>
        </div>

        {/* Foto Grupal del Cuerpo Activo */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-white aspect-[21/9] aspect-video group">
            <img 
              src={IMAGENES.fotoGrupalPersonal} 
              alt="Cuerpo Activo de Bomberos Voluntarios" 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent"></div>
            <div className="absolute bottom-4 left-6 sm:bottom-8 sm:left-10 text-white text-left z-10">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f03e3e]">Abnegación, Sacrificio y Desinterés</span>
              <h3 className="text-lg sm:text-3xl font-black tracking-tight leading-tight uppercase mt-1">Cuerpo Activo Completo</h3>
            </div>
          </div>
        </motion.div>

        {/* Principales con Fotos */}
        <div className="mb-24 space-y-16">
          <section>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-8 border-l-4 border-fire-red pl-4">Oficiales Jefes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {oficialesJefes.map((p, i) => renderCard(p, i))}
            </div>
          </section>
        </div>

        {/* Listado Completo (Suboficiales Subalternos y Bomberos) */}
        <div className="pt-16 border-t border-slate-100">
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-8">
            {/* Suboficiales Subalternos */}
            <div className="break-inside-avoid mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b-2 border-fire-red pb-1 inline-block">Suboficiales Subalternos</h3>
              <div className="space-y-0.5">
                {suboficialesSubalternos.map((p, i) => <ListItem key={i} cargo={p.cargo} nombre={p.nombre} />)}
              </div>
            </div>

            {/* Bomberos */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b-2 border-fire-red pb-1 inline-block">Bomberos</h3>
              <div className="space-y-0.5">
                {bomberos.map((nombre, i) => <ListItem key={i} nombre={nombre} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Cuerpo de Reserva Activa */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-16 border-t border-slate-100"
        >
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-8 border-l-4 border-fire-red pl-4">Cuerpo de Reserva Activa</h2>
          <div className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-white aspect-[21/9] sm:aspect-[21/9] aspect-video group">
            <img 
              src={IMAGENES.reservaActiva} 
              alt="Cuerpo de Reserva Activa - Bomberos Voluntarios" 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent"></div>
            <div className="absolute bottom-4 left-6 sm:bottom-8 sm:left-10 text-white text-left z-10">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f03e3e]">Honor y Trayectoria</span>
              <h3 className="text-lg sm:text-3xl font-black tracking-tight leading-tight uppercase mt-1">Cuerpo de Reserva Activa</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
