import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage.jsx';
import ProyectosPage from './pages/ProyectosPage.jsx';
import AcercaPage from './pages/AcercaPage.jsx';
import ContactoPage from './pages/ContactoPage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/proyectos" element={<ProyectosPage />} />
                <Route path="/acerca" element={<AcercaPage />} />
                <Route path="/contacto" element={<ContactoPage />} />
            </Routes>
            <Toaster />
        </Router>
    );
}

export default App;