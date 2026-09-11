import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronRight, Radio as RadioIcon, X, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGENES } from '../constants';

interface NoticiaItem {
  id: number;
  img: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  hasVideo?: boolean;
  videoUrl?: string;
}

const NOTICIAS_LIST: NoticiaItem[] = [
  {
    id: 5,
    img: "/noticias/septiembre-amarillo.jpg",
    date: "10 de septiembre de 2026",
    title: "10 de septiembre | Mes de Concientización sobre la Prevención del Suicidio",
    excerpt: "En el marco del Mes de Concientización sobre la Prevención del Suicidio, desde Bomberos Voluntarios de Trenque Lauquen acompañamos esta importante iniciativa.",
    content: "En el marco del Mes de Concientización sobre la Prevención del Suicidio, desde Bomberos Voluntarios de Trenque Lauquen acompañamos esta importante iniciativa, que busca generar conciencia sobre la importancia de la prevención, la escucha y el acompañamiento.\n\nCada 10 de septiembre se conmemora el Día Mundial para la Prevención del Suicidio, una fecha que nos invita a reflexionar sobre la importancia de hablar, escuchar y brindar apoyo a quienes puedan estar atravesando un momento difícil.\n\nCompartimos este video como parte de nuestro compromiso con la comunidad y con la difusión de mensajes que contribuyan a la concientización y la prevención.",
    hasVideo: true,
    videoUrl: "https://drive.google.com/file/d/1_hTur14byKZtqhnbI1l0FB_YbxFEO_or/preview"
  },
  { 
    id: 4,
    img: "https://lh3.googleusercontent.com/d/11_2k4K3-IsCmsDxi34y41ZVJbBnP4BOj", 
    date: "Junio de 2026", 
    title: "ENTREGA DEL PREMIO MAYOR DE LA RIFA 2026", 
    excerpt: "Bomberos Voluntarios de Trenque Lauquen hizo entrega del premio correspondiente al sorteo realizado el pasado 29 de mayo de 2026.",
    content: "Bomberos Voluntarios de Trenque Lauquen hizo entrega del premio correspondiente al sorteo realizado el pasado 29 de mayo de 2026.\n\nEl ganador fue Ramiro Rincón, poseedor del número 4821, quien resultó beneficiado con el premio mayor de $40.000.000.\n\nDesde la institución felicitamos al ganador y agradecemos a toda la comunidad por acompañar y colaborar a través de la adquisición de la rifa, una herramienta fundamental para continuar fortaleciendo nuestro servicio." 
  },
  { 
    id: 1,
    img: "https://lh3.googleusercontent.com/d/1RitieXHv5UbDQ_Jun2CoG-2YUv3hZJsb", 
    date: "Junio de 2026", 
    title: "NUEVA UNIDAD DE RESCATE EN CAMINO", 
    excerpt: "Bomberos Voluntarios de Trenque Lauquen continúa fortaleciendo su capacidad operativa con la incorporación de una nueva unidad de rescate.",
    content: "Bomberos Voluntarios de Trenque Lauquen continúa fortaleciendo su capacidad operativa con la incorporación de una nueva unidad de rescate. El vehículo se encuentra arribando a la República Argentina en los próximos días y será destinado a mejorar la respuesta ante emergencias y situaciones de rescate.\n\nEsta incorporación representa un importante avance para la institución y forma parte del compromiso permanente con la seguridad y el servicio a la comunidad." 
  },
  { 
    id: 2,
    img: "https://lh3.googleusercontent.com/d/1MQDFju01dKLn8CK4yhqf3DPv6kmU-rZh", 
    date: "Junio de 2026", 
    title: "YA SE ENCUENTRA DISPONIBLE EL ABONO 2026–2027", 
    excerpt: "Se encuentra a la venta el Abono 2026–2027 de Bomberos Voluntarios de Trenque Lauquen, una iniciativa que permite a la comunidad colaborar con la institución.",
    content: "Se encuentra a la venta el Abono 2026–2027 de Bomberos Voluntarios de Trenque Lauquen, una iniciativa que permite a la comunidad colaborar con el sostenimiento y crecimiento de la institución.\n\nEl abono puede adquirirse en dos modalidades:\n• 6 cuotas de $10.000\n• 6 cuotas de $15.000\n\nQuienes participen formarán parte del gran sorteo final que se realizará en mayo de 2027. Para más información o consultas, comunicarse a través del correo electrónico institucional." 
  },
  { 
    id: 3,
    img: "https://lh3.googleusercontent.com/d/18dFH2QEE3LhvS2ROxuq6T3e3hjf5Rqjy", 
    date: "Junio de 2026", 
    title: "RECONOCIMIENTO POR LOS 80 AÑOS DE SERVICIO", 
    excerpt: "En el marco del 80° aniversario de Bomberos Voluntarios de Trenque Lauquen, la institución recibió una placa conmemorativa por parte de la Municipalidad.",
    content: "En el marco del 80° aniversario de Bomberos Voluntarios de Trenque Lauquen, la institución recibió una placa conmemorativa por parte de la Municipalidad, en reconocimiento a ocho décadas de servicio, compromiso y dedicación hacia la comunidad.\n\nEste homenaje destaca la labor de generaciones de bomberos que, a lo largo de los años, han trabajado de manera incansable al servicio de los vecinos, consolidando una historia marcada por la vocación y la solidaridad." 
  }
];

export default function Noticias() {
  const [activeNews, setActiveNews] = React.useState<NoticiaItem | null>(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (activeNews) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeNews]);

  return (
    <section id="noticias" className="py-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Radio Section Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row items-stretch"
        >
          <div className="w-full md:w-1/3 min-h-[240px] md:min-h-0 overflow-hidden flex-shrink-0">
            <img 
              src={IMAGENES.gallery2} 
              alt="Radio Trenque Lauquen" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8 md:p-12 flex-1">
            <div className="flex items-center gap-2 text-fire-red font-bold uppercase tracking-widest text-xs mb-4">
              <RadioIcon className="w-4 h-4" />
              <span>Espacio Radial</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Radio Trenque Lauquen</h2>
            <p className="text-slate-500 mb-8 max-w-xl">
              Seguí nuestras transmisiones en vivo por RADIO LU 11 - AM 1280 LA RADIO REGIONAL PARA 5 PCIAS ARGENTINA.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/noticias/radio" 
                className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all"
              >
                Ver más detalles
              </Link>
              <a 
                href="https://radiolu11.com.ar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-fire-red font-bold text-sm hover:text-fire-red/80 transition-colors"
              >
                <RadioIcon className="w-5 h-5" />
                Ir a escuchar radio
              </a>
            </div>
          </div>
        </motion.div>

        {/* Section Heading */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-fire-red font-bold uppercase tracking-widest text-sm">Actualidad</span>
            <h2 className="text-4xl font-bold mt-2">Últimas Noticias</h2>
          </div>
        </div>

        {/* Grid of news cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {NOTICIAS_LIST.map((news) => (
            <motion.article 
              key={news.id}
              whileHover={{ y: -8 }}
              onClick={() => setActiveNews(news)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-56 overflow-hidden relative bg-amber-50">
                <img 
                  src={news.img} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute top-4 left-4 bg-slate-900/60 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5">
                  {news.hasVideo && <Play className="w-3 h-3 text-amber-400 fill-current" />}
                  {news.hasVideo ? 'Video' : 'Noticias'}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  {news.date}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-fire-red transition-colors leading-tight text-left">
                  {news.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3 text-left flex-1">
                  {news.excerpt}
                </p>
                <div className="text-fire-red font-bold text-sm flex items-center gap-2 self-start group-hover:gap-3 transition-all duration-300">
                  Leer más <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modern Detailed Expansion Modal */}
      <AnimatePresence>
        {activeNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveNews(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row h-[85vh] md:h-[600px] z-10"
            >
              {/* Close Button - positioned absolutely on top-right of the whole modal */}
              <button
                onClick={() => setActiveNews(null)}
                className="absolute top-4 right-4 z-20 bg-slate-900/10 hover:bg-fire-red hover:text-white hover:scale-105 text-slate-800 rounded-full p-2.5 backdrop-blur-md transition-all border border-slate-200/20 shadow-sm"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Media (Video or Image) */}
              <div className="relative w-full md:w-1/2 h-64 sm:h-72 md:h-full overflow-hidden flex-shrink-0 bg-black flex items-center justify-center">
                {activeNews.hasVideo && activeNews.videoUrl ? (
                  <div className="w-full h-full relative flex flex-col bg-black">
                    <iframe
                      src={activeNews.videoUrl}
                      title={activeNews.title}
                      className="w-full h-full border-0 absolute inset-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowFullScreen
                    />
                    <div className="absolute top-3 left-3 z-10 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1.5 shadow pointer-events-none">
                      <Play className="w-3 h-3 fill-current text-amber-400" /> Video Incrustado
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={activeNews.img}
                      alt={activeNews.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/10" />
                  </>
                )}
              </div>

              {/* Right Column: Content */}
              <div className="p-6 sm:p-10 flex flex-col flex-1 overflow-hidden text-left relative bg-white">
                {/* News Metadata (Date) */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 text-fire-red text-xs font-bold uppercase tracking-wider bg-red-50/70 border border-fire-red/10 px-3 py-1 rounded-lg">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeNews.date}
                  </span>
                </div>

                {/* News Title */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug uppercase mb-6">
                  {activeNews.title}
                </h3>

                {/* Scrollable text body */}
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed flex-1 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-slate-200">
                  {activeNews.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="first-of-type:text-slate-800 first-of-type:font-medium">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Footer close button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end flex-shrink-0">
                  <button
                    onClick={() => setActiveNews(null)}
                    className="bg-slate-900 hover:bg-fire-red text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-sm duration-300"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
