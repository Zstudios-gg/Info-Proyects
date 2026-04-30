import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectCard = ({ title, description, status, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground">
            {status}
          </Badge>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        <Button 
          variant="outline" 
          className="w-full bg-primary-foreground text-background hover:bg-accent hover:text-accent-foreground border-0 group/btn transition-all duration-300"
        >
          <span>Más información</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;