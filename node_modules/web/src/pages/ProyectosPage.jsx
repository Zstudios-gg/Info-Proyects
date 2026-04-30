import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';

const ProyectosPage = () => {
  const projects = [
    {
      title: 'Xatruch RPG',
      description: 'Un juego de rol épico ambientado en un mundo de fantasía único, con mecánicas de combate estratégico y una narrativa profunda que se adapta a las decisiones del jugador.',
      status: 'En desarrollo (largo plazo)'
    },
    {
      title: 'Proyecto 2',
      description: 'Experiencia multijugador en tiempo real que conecta a jugadores de todo el mundo en desafíos colaborativos y competitivos con sincronización instantánea.',
      status: 'Planificación'
    },
    {
      title: 'Proyecto 3',
      description: 'Narrativa interactiva donde cada elección importa. Una historia ramificada con múltiples finales y personajes memorables que responden a tus acciones.',
      status: 'Concepto'
    },
    {
      title: 'Proyecto 4',
      description: 'Quiz y trivia grupal activado por códigos QR. Perfecto para eventos, educación y entretenimiento social con puntuaciones en vivo y rankings dinámicos.',
      status: 'Prototipo'
    },
    {
      title: 'Proyecto 5',
      description: 'Experiencia social viral diseñada para generar momentos compartibles. Combina elementos de juego, creatividad y conexión humana de formas inesperadas.',
      status: 'Investigación'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Proyectos - ZeimStudios</title>
        <meta name="description" content="Descubre nuestros proyectos web interactivos: juegos, experiencias multijugador, narrativas interactivas y más." />
      </Helmet>

      <Header />

      <main className="flex-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Nuestros proyectos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explora las experiencias interactivas que estamos creando. Cada proyecto representa nuestra pasión por combinar tecnología, creatividad y diversión.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                status={project.status}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-card rounded-2xl p-8 border border-border">
              <p className="text-muted-foreground mb-4">
                ¿Tienes una idea para un proyecto colaborativo?
              </p>
              <a 
                href="/contacto"
                className="text-accent hover:text-accent/80 font-semibold transition-colors duration-200"
              >
                Contáctanos →
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProyectosPage;