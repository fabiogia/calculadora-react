import React from 'react';
import './App.css';
import { Outlet, Route, Routes, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import Page404 from './pages/page404';
import Divisao from './pages/divisao';
import Multiplicacao from './pages/multiplicacao';
import Soma from './pages/soma';
import Subtracao from './pages/subtracao';
import Calculadora from './pages/calculadora';

export default function App() {
  // linha obrigatoria para o menu mudar de cor ao clicar nos botoes
  const location = useLocation();  
  
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Soma />} />
          <Route path="subtracao" element={<Subtracao />} />
          <Route path="divisao" element={<Divisao />} />
          <Route path="multiplicacao" element={<Multiplicacao />} />
          <Route path="calculadora" element={<Calculadora />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className='layout'>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/" className={menuAtivo('/')}>Soma</Link>
          </li>
          <li>
            <Link to="/subtracao" className={menuAtivo('/subtracao')}>Subtração</Link>
          </li>
          <li>
            <Link to="/divisao" className={menuAtivo('/divisao')}>Divisão</Link>
          </li>
          <li>
            <Link to="/multiplicacao" className={menuAtivo('/multiplicacao')}>Multiplicação</Link>
          </li>
          <li>
            <Link to="/calculadora" className={menuAtivo('/calculadora')}><img src='./calculadora.png' width='20' /></Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function menuAtivo(path: string) {
  return window.location.pathname === path ? 'ativo' : '';
}
