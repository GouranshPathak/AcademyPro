"use client"; // Required for animations

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, BookOpen, Target, Video } from 'lucide-react';
import { CoursesSection } from '@/components/sections/courses-section';
const StudyMaterial = () => {
  const materials = [
    {
      title: 'NCERT Complete Notes',
      description: 'Comprehensive notes covering all NCERT chapters for Physics, Chemistry, and Biology',
      icon: BookOpen,
      type: 'PDF',
      size: '2 MB',
      file: '/CompleteNotes.pdf' // ✅ file path
    },
    {
      title: 'Daily Practice Problems',
      description: 'Topic-wise DPPs with detailed solutions and explanations',
      icon: Target,
      type: 'PDF',
      size: '3 MB',
      file: '/PracticeProblem.pdf'
    },
    {
      title: 'Previous Year Papers',
      description: 'Last 10 years NEET and JEE papers with solutions',
      icon: FileText,
      type: 'PDF',
      size: '5 MB',
      file: '/PreviousYear.pdf'
    },
    {
      title: 'Video Lectures',
      description: 'Recorded lectures by expert faculty members',
      icon: Video,
      type: 'Video',
      size: '2.5 MB',
      file: '/VideoLectures.pdf'
    }
  ];
  
  // ANIMATION: Reusable variants for container and item animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: "easeInOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen pt-16">
      <motion.section 
        className="py-20 bg-gradient-subtle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Study <span className="text-primary">Materials</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive study materials designed by expert faculty to help you crack NEET & JEE
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants} // ANIMATION: Stagger children inside this grid
          >
            {materials.map((material, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300 bg-card">
                  <div>
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                        <material.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{material.title}</CardTitle>
                      <CardDescription>{material.description}</CardDescription>
                    </CardHeader>
                  </div>

                  <CardContent className="text-center mt-auto pt-4">
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <span>{material.type}</span>
                      <span>{material.size}</span>
                    </div>
                    <a href={material.file} download>
                      <Button className="w-full" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download Sample
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center mt-16" variants={itemVariants}>
            <Link to="/courses">
              <Button size="lg" className="bg-gradient-hero text-lg px-8 py-6">
                Get Complete Study Package
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default StudyMaterial;