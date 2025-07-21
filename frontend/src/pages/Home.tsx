import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '@/components/sections/hero-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Personalized Study Plans',
      description: 'AI-driven learning paths tailored for you',
      icon: Target,
      highlight: 'AI Powered',
      linkTo: '/chatbot',
    },
    {
      title: 'Mock Test Series',
      description: 'Practice with previous year questions',
      icon: Award,
      highlight: '10,000+ Questions',
      linkTo: '/mock-test',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <HeroSection />

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why 1,000+ Students Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of technology and teaching that transforms dreams into reality
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden group hover:shadow-hero transition-all duration-300 max-w-sm w-full">
                  {feature.highlight && (
                    <div className="absolute top-4 right-4 bg-warning text-warning-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {feature.highlight}
                    </div>
                  )}
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group"
                      onClick={() => navigate(feature.linkTo)}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-4">
                  Start Your Journey Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
