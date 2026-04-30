import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AcercaPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Acerca de - ZeimStudios</title>
        <meta name="description" content="Conoce la misión, visión y valores de ZeimStudios. Creamos experiencias web interactivas que conectan personas." />
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
              Acerca de ZeimStudios
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Somos un estudio dedicado a crear experiencias web que transforman la manera en que las personas juegan, aprenden y se conectan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Nuestra misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Crear experiencias digitales innovadoras que combinen tecnología, creatividad y diversión. Nos esforzamos por desarrollar proyectos que no solo entretengan, sino que también eduquen y conecten a las personas de maneras significativas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Nuestra visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Convertirnos en referentes en la creación de experiencias web interactivas que marquen la diferencia. Aspiramos a ser reconocidos por nuestra capacidad de innovar y por el impacto positivo que generamos en la comunidad digital.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nuestros valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Pasión',
                  description: 'Amamos lo que hacemos y eso se refleja en cada proyecto que creamos.'
                },
                {
                  icon: Zap,
                  title: 'Innovación',
                  description: 'Buscamos constantemente nuevas formas de sorprender y deleitar a nuestros usuarios.'
                },
                {
                  icon: Target,
                  title: 'Calidad',
                  description: 'Nos comprometemos con la excelencia en cada detalle de nuestro trabajo.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent/10 to-transparent rounded-2xl p-12 border border-accent/20 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Listo para crear algo increíble juntos?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estamos siempre abiertos a nuevas ideas y colaboraciones. Si tienes un proyecto en mente, nos encantaría escucharlo.
            </p>
            <a 
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-background hover:bg-accent hover:text-accent-foreground rounded-lg font-semibold transition-all duration-300 active:scale-[0.98]"
            >
              Contáctanos
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AcercaPage;