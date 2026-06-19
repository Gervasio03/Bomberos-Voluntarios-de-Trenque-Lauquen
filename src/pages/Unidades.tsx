import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGENES } from '../constants';
import { Truck, Info } from 'lucide-react';

const categorias = [
  'MOSTRAR TODO',
  'Cisterna',
  'Estructura',
  'Forestal',
  'Historia',
  'Logistica',
  'Rescate'
];

const unidades = [
  // --- CAMIONES ---
  { 
    id: 'unidad-scania',
    grupo: 'camiones',
    tipo: 'Autobomba Scania', 
    categoria: 'Estructura',
    descripcion: 'Camion Scania - capacidad para 6 bomberos con bomba de alta y baja presion preparado para incendios estructural', 
    imagen: IMAGENES.camionScania 
  },
  { 
    id: 'unidad-1',
    grupo: 'camiones',
    tipo: 'Móvil Estructural para altura', 
    categoria: 'Estructura',
    descripcion: 'Contiene una escalera de 38 metros', 
    imagen: IMAGENES.unidad1 
  },
  { 
    id: 'unidad-2',
    grupo: 'camiones',
    tipo: 'Ford Ranger Logistica', 
    categoria: 'Logistica',
    descripcion: 'Traslado personal - Cuerpo activo y Comisión directiva', 
    imagen: IMAGENES.movil2 
  },
  { 
    id: 'unidad-forestal-scania',
    grupo: 'camiones',
    tipo: 'Camiones Renault 4x4', 
    categoria: 'Forestal',
    descripcion: 'Servicio forestal con bombas de alta y baja presion', 
    imagen: IMAGENES.camionForestalNuevo 
  },
  { 
    id: 'unidad-5',
    grupo: 'camiones',
    tipo: 'Camión de Rescate', 
    categoria: 'Rescate',
    descripcion: 'Especializada en accidentes viales complejos y rescate técnico pesado con carga para utilería.', 
    imagen: IMAGENES.unidad2 
  },
  { 
    id: 'unidad-rescate-1',
    grupo: 'camiones',
    tipo: 'Camión Mercedes Benz Atego', 
    categoria: 'Rescate',
    descripcion: 'Con tanque de 2800 Litros y bomba de alta y baja presión.', 
    imagen: IMAGENES.camionRescate1 
  },
  { 
    id: 'unidad-rescate-2',
    grupo: 'camiones',
    tipo: 'Camioneta Mixta de utilería y logística', 
    categoria: 'Rescate',
    descripcion: 'Móvil de apoyo rápido y soporte equipado con herramientas hidráulicas y kits de trauma.', 
    imagen: IMAGENES.camionRescate2 
  },
  { 
    id: 'unidad-12',
    grupo: 'camiones',
    tipo: 'Camión Cisterna', 
    categoria: 'Cisterna',
    descripcion: 'Camión Iveco - Cisterna 15.000 L de capacidad con bomba cardánica', 
    imagen: IMAGENES.camionNuevo 
  },
  // --- MÓVILES ---
  { 
    id: 'unidad-4',
    grupo: 'moviles',
    tipo: 'Citroën Aircross', 
    categoria: 'Logistica',
    descripcion: 'Móvil para 7 ocupantes - traslado personal - Cuerpo activo y Comisión directiva', 
    imagen: IMAGENES.movil4 
  },
  { 
    id: 'unidad-3',
    grupo: 'moviles',
    tipo: 'Mercedes Benz Autobomba', 
    categoria: 'Estructura',
    descripcion: 'Vehículo rápido equipado con herramientas hidráulicas para rescate vehicular y primeros auxilios.', 
    imagen: IMAGENES.movil3 
  },
  { 
    id: 'unidad-18',
    grupo: 'moviles',
    tipo: 'Scania Unidad de Estructura', 
    categoria: 'Estructura',
    descripcion: 'Transporte táctico de personal y equipamiento de apoyo.', 
    imagen: IMAGENES.unidad4 
  },
  // --- HISTORIA ---
  { 
    id: 'unidad-historica-1',
    grupo: 'camiones',
    tipo: 'Móvil Número 1 - Ford 1938', 
    categoria: 'Historia',
    descripcion: 'Móvil Numero 1 Ford modelo 1938 Autobomba', 
    imagen: IMAGENES.camionHistorico 
  },
];

const TRANSICION_FLUIDA = { type: 'tween', ease: 'easeInOut', duration: 0.25 };

export default function Unidades() {
  const [filtroActivo, setFiltroActivo] = useState('MOSTRAR TODO');

  const unidadesFiltradas = filtroActivo === 'MOSTRAR TODO' 
    ? unidades 
    : unidades.filter(u => u.categoria === filtroActivo);

  const renderCard = (unidad: typeof unidades[0]) => (
    <motion.div
      layout
      key={unidad.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={TRANSICION_FLUIDA}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100 flex flex-col"
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={unidad.imagen} 
          alt={unidad.tipo} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-fire-red font-bold text-[10px] uppercase tracking-widest mb-1">{unidad.categoria}</p>
            <h3 className="text-2xl font-black text-slate-900 leading-tight">{unidad.tipo}</h3>
          </div>
          <button className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-fire-red hover:bg-fire-red/5 transition-all">
            <Info className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-8">{unidad.descripcion}</p>
        
        <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estado: Operativo</span>
          </div>
          <button className="text-[10px] font-bold text-fire-red uppercase tracking-widest hover:underline">Ver detalles</button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-fire-red px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Truck className="w-4 h-4" />
            <span>Equipamiento</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Nuestras Unidades</h1>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Flota de vehículos moderna y equipada con la última tecnología para brindar una respuesta eficiente ante cualquier emergencia.
          </p>
        </div>

        {/* Filtros Estilo Imagen */}
        <div className="mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center gap-3 min-w-max px-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltroActivo(cat)}
                className={`px-6 py-3 text-[10px] font-bold tracking-widest transition-all border-2 uppercase whitespace-nowrap
                  ${filtroActivo === cat 
                    ? 'border-fire-red text-fire-red bg-white shadow-sm' 
                    : 'border-slate-100 text-slate-400 hover:border-slate-200 hover:text-slate-600 bg-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtroActivo === 'MOSTRAR TODO' ? (
          <div className="space-y-20">
            {/* Sección Camiones */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tighter border-l-4 border-fire-red pl-4">
                  Camiones y Pesados
                </h2>
                <div className="flex-grow h-px bg-slate-100"></div>
              </div>
              <motion.div 
                layout
                transition={TRANSICION_FLUIDA}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {unidadesFiltradas.filter(u => u.grupo === 'camiones').map(renderCard)}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Sección Móviles */}
            <div className="pt-12">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tighter border-l-4 border-slate-400 pl-4">
                  Unidades Móviles y de Apoyo
                </h2>
                <div className="flex-grow h-px bg-slate-100"></div>
              </div>
              <motion.div 
                layout
                transition={TRANSICION_FLUIDA}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {unidadesFiltradas.filter(u => u.grupo === 'moviles').map(renderCard)}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        ) : (
          <motion.div 
            layout
            transition={TRANSICION_FLUIDA}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {unidadesFiltradas.map(renderCard)}
            </AnimatePresence>
          </motion.div>
        )}

        {unidadesFiltradas.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-medium italic">No se encontraron unidades en esta categoría.</p>
          </div>
        )}

        {/* Video Institucional / Unidades */}
        <div className="mt-32 pt-20 border-t border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Resumen de Operaciones</h2>
            <div className="w-20 h-1.5 bg-fire-red mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://drive.google.com/file/d/1CxxGJ-FB-q3KgyGir7iuzfJh03nPpJ_P/preview"
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
