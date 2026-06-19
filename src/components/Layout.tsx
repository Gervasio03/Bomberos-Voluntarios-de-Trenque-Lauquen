import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Facebook, Instagram, Twitter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGENES } from '../constants';

const navLinks = [
  { 
    name: 'Inicio', 
    href: '/',
    subItems: [
      { name: 'Quiénes Somos', href: '/nosotros' },
    ]
  },
  { 
    name: 'Cuerpo Activo', 
    href: '/cuerpo',
    subItems: [
      { name: 'Personal', href: '/cuerpo/personal' },
      { name: 'Directivos', href: '/cuerpo/directivos' },
      { name: 'Unidades', href: '/cuerpo/unidades' },
    ]
  },
  { name: 'Servicios', href: '/servicios' },
  { 
    name: 'Noticias', 
    href: '/noticias',
    subItems: [
      { name: 'Actualidad', href: '/noticias' },
      { name: 'Radio', href: '/noticias/radio' },
    ]
  },
  { name: 'Contacto', href: '/contacto' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-fire-red selection:text-white min-h-screen flex flex-col">
      {/* Emergency Button - Fixed Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="tel:100" 
          className="flex items-center justify-center w-16 h-16 bg-fire-red text-white rounded-full shadow-2xl animate-pulse-red"
          aria-label="Llamar a Emergencias"
        >
          <Phone className="w-8 h-8" />
        </a>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-12">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img 
              src={IMAGENES.logo} 
              alt="Logo Bomberos" 
              className="w-12 h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className={`flex flex-col leading-tight ${scrolled || !isHome ? 'text-slate-900' : 'text-white'}`}>
              <span className="font-bold text-lg uppercase tracking-wider">Bomberos</span>
              <span className="text-xs font-medium opacity-80 [text-shadow:_0_0_4px_rgba(255,255,255,0.8)]">Trenque Lauquen</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  to={link.href} 
                  className={`text-sm font-semibold transition-colors hover:text-fire-red flex items-center gap-1 py-4 ${scrolled || !isHome ? 'text-slate-700' : 'text-white'}`}
                >
                  {link.name}
                  {link.subItems && <ChevronDown className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform" />}
                </Link>
                
                {link.subItems && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-2xl rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border border-slate-100">
                    {link.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-fire-red transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="/colaborar" 
              className="bg-fire-red hover:bg-fire-dark text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 ml-2 shadow-lg shadow-fire-red/20"
            >
              Donar
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ${scrolled || !isHome ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-4 px-6 flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-lg font-semibold text-slate-800 flex justify-between items-center border-b border-slate-100 pb-2"
                  >
                    {link.name}
                  </Link>
                  {link.subItems && (
                    <div className="pl-4 flex flex-col gap-2 py-2">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="text-slate-500 font-medium text-sm py-1"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                to="/colaborar" 
                className="bg-fire-red text-white text-center py-3 rounded-xl font-bold mt-2"
              >
                Donar Ahora
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <img 
                  src={IMAGENES.logo} 
                  alt="Logo Bomberos" 
                  className="w-10 h-10 object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-lg uppercase tracking-wider">Bomberos</span>
                  <span className="text-xs font-medium opacity-60 [text-shadow:_0_0_4px_rgba(255,255,255,0.4)]">Trenque Lauquen</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Asociación de Bomberos Voluntarios de Trenque Lauquen. Personería Jurídica DPPJ N De Legajo 4080. Fundada el 15 de Octubre de 1946.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-8 text-lg">Navegación</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><Link to="/" className="hover:text-fire-red transition-colors">Inicio</Link></li>
                <li><Link to="/nosotros" className="hover:text-fire-red transition-colors">Quiénes Somos</Link></li>
                <li><Link to="/cuerpo" className="hover:text-fire-red transition-colors">Cuerpo Activo</Link></li>
                <li><Link to="/servicios" className="hover:text-fire-red transition-colors">Servicios</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 text-lg">Institucional</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><Link to="/colaborar" className="hover:text-fire-red transition-colors">Cómo Colaborar</Link></li>
                <li><Link to="/noticias" className="hover:text-fire-red transition-colors">Noticias</Link></li>
                <li><Link to="/contacto" className="hover:text-fire-red transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 text-lg">Emergencias</h4>
              <div className="bg-fire-red/10 border border-fire-red/20 p-6 rounded-2xl">
                <p className="text-xs uppercase tracking-widest font-bold text-fire-red mb-2">Línea Gratuita</p>
                <a href="tel:100" className="text-3xl font-black text-white block mb-4">100</a>
                <p className="text-xs text-slate-400">Disponible las 24hs para emergencias en todo el partido.</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-medium">
            <div className="text-center md:text-left">
              <p>© {new Date().getFullYear()} Bomberos Voluntarios Trenque Lauquen. Todos los derechos reservados</p>
              <p className="mt-1 text-[10px] text-slate-600">Sitio web por <span className="font-bold text-slate-500 hover:text-fire-red transition-colors transition-all">GG studio</span> (Estudio de Diseño)</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
