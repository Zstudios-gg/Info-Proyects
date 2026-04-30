import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold">ZeimStudios</span>
            <p className="mt-4 text-sm text-muted-foreground">
              Proyectos web interactivos para jugar, aprender y entretenerse.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Enlaces</span>
            <div className="mt-4 space-y-2">
              <Link to="/" className="block text-sm hover:text-accent transition-colors duration-200">
                Home
              </Link>
              <Link to="/proyectos" className="block text-sm hover:text-accent transition-colors duration-200">
                Proyectos
              </Link>
              <Link to="/acerca" className="block text-sm hover:text-accent transition-colors duration-200">
                Acerca de
              </Link>
              <Link to="/contacto" className="block text-sm hover:text-accent transition-colors duration-200">
                Contacto
              </Link>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contacto</span>
            <div className="mt-4 space-y-2">
              <p className="text-sm flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contacto@zeimstudios.com
              </p>
              <div className="flex items-center gap-4 mt-4">
                <a href="#" className="text-foreground hover:text-accent transition-colors duration-200" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground hover:text-accent transition-colors duration-200" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground hover:text-accent transition-colors duration-200" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ZeimStudios. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                Política de Privacidad
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;