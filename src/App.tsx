import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Cuerpo from './pages/Cuerpo';
import Personal from './pages/Personal';
import Directivos from './pages/Directivos';
import Unidades from './pages/Unidades';
import Radio from './pages/Radio';
import Servicios from './pages/Servicios';
import Colaborar from './pages/Colaborar';
import Noticias from './pages/Noticias';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cuerpo" element={<Cuerpo />} />
          <Route path="/cuerpo/personal" element={<Personal />} />
          <Route path="/cuerpo/directivos" element={<Directivos />} />
          <Route path="/cuerpo/unidades" element={<Unidades />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/colaborar" element={<Colaborar />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/radio" element={<Radio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
}
