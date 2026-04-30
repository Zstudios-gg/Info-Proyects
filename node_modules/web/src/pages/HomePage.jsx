import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Gamepad2, Users } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>ZeimStudios - Proyectos web interactivos</title>
        <meta name="description" content="Proyectos web interactivos para jugar, aprender y entretenerse. Descubre experiencias digitales únicas creadas por ZeimStudios." />
      </Helmet>

      <Header />

      <main className="flex-1">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1687371804876-0f70072af9aa)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Experiencias digitales únicas</span>
              </div>

              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                style={{ letterSpacing: '-0.02em' }}
              >
                Proyectos web interactivos<br />
                <span className="text-accent">para jugar, aprender y entretenerse</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Creamos experiencias digitales innovadoras que combinan tecnología, creatividad y diversión para conectar personas y generar momentos memorables.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/proyectos">
                  <Button 
                    size="lg" 
                    className="bg-primary-foreground text-background hover:bg-accent hover:text-accent-foreground border-0 px-8 py-6 text-lg font-semibold group transition-all duration-300 active:scale-[0.98]"
                  >
                    Explorar proyectos
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link to="/acerca">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-accent/30 text-foreground hover:bg-accent/10 hover:border-accent px-8 py-6 text-lg font-semibold transition-all duration-300 active:scale-[0.98]"
                  >
                    Conocer más
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-accent/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Qué hacemos?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Desarrollamos experiencias web que transforman la manera en que las personas interactúan con la tecnología.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Gamepad2,
                  title: 'Juegos interactivos',
                  description: 'Experiencias de juego envolventes que combinan narrativa, mecánicas innovadoras y diseño atractivo.'
                },
                {
                  icon: Sparkles,
                  title: 'Aprendizaje dinámico',
                  description: 'Plataformas educativas que hacen del aprendizaje una experiencia divertida y memorable.'
                },
                {
                  icon: Users,
                  title: 'Conexión social',
                  description: 'Herramientas que facilitan la interacción y colaboración entre personas de forma creativa.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;