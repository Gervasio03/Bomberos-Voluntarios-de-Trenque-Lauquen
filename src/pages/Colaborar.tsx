import React, { useState } from 'react';
import { Heart, ChevronRight, Copy, Check } from 'lucide-react';

export default function Colaborar() {
  const [copied, setCopied] = useState(false);

  const handleCopyCBU = () => {
    navigator.clipboard.writeText('0110525420052511212971');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <section id="colaborar" className="py-32 relative overflow-hidden min-h-screen">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-fire-red/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-20">
              <span className="text-fire-red font-bold uppercase tracking-widest text-sm">Tu ayuda es vital</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">Ayúdanos a seguir ayudando</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Somos una institución de voluntarios. Tu colaboración nos permite adquirir nuevo equipamiento, mantener nuestras unidades y garantizar que siempre estemos listos cuando nos necesites.
              </p>
              
              <div className="space-y-4 mb-8 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-extrabold">Razón Social</span>
                  <div className="font-extrabold text-slate-800 text-sm md:text-base">BOMBEROS VOLUNTARIOS DE TRENQUE LAUQUEN</div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-extrabold">CUIT</span>
                    <div className="font-bold text-slate-800 font-mono text-sm">30-63071470-9</div>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-extrabold">Alias</span>
                    <div className="font-bold text-fire-red font-mono text-sm lowercase">bomberos.tl</div>
                  </div>
                </div>
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-extrabold">Nro. de Cuenta</span>
                  <div className="font-bold text-slate-800 text-xs sm:text-sm">CUENTA CORRIENTE PESOS 35605251121297</div>
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-extrabold">CBU</span>
                  <div className="font-bold text-slate-800 font-mono text-sm sm:text-base break-all">0110525420052511212971</div>
                </div>
              </div>

              <button 
                onClick={handleCopyCBU}
                className="w-full sm:w-auto bg-fire-red hover:bg-fire-dark text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-xl shadow-fire-red/20 flex items-center justify-center gap-3 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-white animate-bounce" />
                    ¡CBU Copiado con Éxito!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 text-white" />
                    Copiar CBU para Transferir
                  </>
                )}
              </button>
            </div>
            
            <div className="bg-slate-50 p-12 md:p-20 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Otras formas de colaborar</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-fire-red text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                  <p className="text-slate-600 text-sm">Haciéndote socio protector con una cuota mensual mínima.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-fire-red text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                  <p className="text-slate-600 text-sm">Participando de nuestras rifas y eventos institucionales.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-fire-red text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                  <p className="text-slate-600 text-sm">Donando materiales de construcción o insumos para el cuartel.</p>
                </li>
              </ul>
              <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200 text-center">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Consultas Administrativas</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:02392422100" className="text-lg font-bold text-slate-800 hover:text-fire-red transition-colors">02392 - 422100</a>
                  <a href="tel:02392430333" className="text-lg font-bold text-slate-800 hover:text-fire-red transition-colors">02392 - 430333</a>
                  <a href="https://wa.me/542392516461" target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-500 hover:text-fire-red transition-colors">WhatsApp: +54 2392 516461</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
