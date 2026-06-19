import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { User, UserCog, Truck } from 'lucide-react';

const categories = [
  {
    title: 'Personal',
    description: 'Conocé a los hombres y mujeres que integran nuestro cuerpo activo.',
    icon: User,
    href: '/cuerpo/personal',
    iconBg: 'bg-fire-red',
    iconColor: 'text-white'
  },
  {
    title: 'Directivos',
    description: 'La comisión directiva encargada de la gestión institucional.',
    icon: UserCog,
    href: '/cuerpo/directivos',
    iconBg: 'bg-slate-900',
    iconColor: 'text-white'
  },
  {
    title: 'Unidades',
    description: 'Nuestra flota de vehículos equipada para todo tipo de emergencias.',
    icon: Truck,
    href: '/cuerpo/unidades',
    iconBg: 'bg-slate-800',
    iconColor: 'text-white'
  }
];

export default function Cuerpo() {
  return (
    <section id="cuerpo" className="py-32 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-fire-red font-bold uppercase tracking-widest text-sm">Institucional</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-slate-900 uppercase tracking-tighter">Cuerpo Activo y Gestión</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Explorá las diferentes áreas que componen nuestra institución, desde el personal operativo hasta nuestra flota de unidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} to={category.href}>
              <motion.div 
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                className="bg-white rounded-3xl p-8 h-[380px] flex flex-col justify-between border border-slate-100 shadow-sm transition-all duration-300 relative overflow-hidden group cursor-pointer"
              >
                {/* Visual clean background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  {/* Icon Block */}
                  <div className="mb-8 w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center shadow-sm transform transition-all group-hover:scale-110 group-hover:bg-fire-red group-hover:text-white duration-300">
                    <category.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Text Details */}
                  <h3 className="text-slate-900 text-2xl font-black uppercase tracking-tight group-hover:text-fire-red transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="flex items-center gap-2 text-fire-red font-bold text-sm uppercase tracking-widest mt-6 relative z-10">
                  <span>Ingresar</span>
                  <div className="w-8 h-[2px] bg-fire-red transform origin-left transition-transform group-hover:scale-x-150 duration-300"></div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
