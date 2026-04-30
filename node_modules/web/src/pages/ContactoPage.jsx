import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactoPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contacto - ZeimStudios</title>
        <meta name="description" content="Ponte en contacto con ZeimStudios. Estamos aquí para responder tus preguntas y escuchar tus ideas." />
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
              Contáctanos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ¿Tienes una pregunta, una idea o simplemente quieres saludar? Nos encantaría escucharte.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border h-full">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-card-foreground">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 bg-input text-foreground placeholder:text-muted-foreground"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-card-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 bg-input text-foreground placeholder:text-muted-foreground"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-card-foreground">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="mt-2 bg-input text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="Cuéntanos sobre tu proyecto o pregunta..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-foreground text-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 active:scale-[0.98]"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Información de contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Email</p>
                      <a href="mailto:contacto@zeimstudios.com" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                        contacto@zeimstudios.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Teléfono</p>
                      <p className="text-muted-foreground">+504 9876-5432</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Ubicación</p>
                      <p className="text-muted-foreground">Tegucigalpa, Honduras</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-transparent rounded-2xl p-8 border border-accent/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">Horario de atención</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábado: 10:00 AM - 2:00 PM</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactoPage;