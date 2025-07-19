import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, BookOpen, Target, Video } from 'lucide-react';

const StudyMaterial = () => {
  const materials = [
    {
      title: 'NCERT Complete Notes',
      description: 'Comprehensive notes covering all NCERT chapters for Physics, Chemistry, and Biology',
      icon: BookOpen,
      type: 'PDF',
      size: '45 MB'
    },
    {
      title: 'Daily Practice Problems',
      description: 'Topic-wise DPPs with detailed solutions and explanations',
      icon: Target,
      type: 'PDF',
      size: '25 MB'
    },
    {
      title: 'Previous Year Papers',
      description: 'Last 10 years NEET and JEE papers with solutions',
      icon: FileText,
      type: 'PDF',
      size: '30 MB'
    },
    {
      title: 'Video Lectures',
      description: 'Recorded lectures by expert faculty members',
      icon: Video,
      type: 'Video',
      size: '2.5 GB'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Study <span className="text-primary">Materials</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive study materials designed by expert faculty to help you crack NEET & JEE
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className="flex flex-col justify-between h-full hover:shadow-lg transition-shadow">
                <div>
                  <CardHeader className="text-center">
                    <material.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-xl">{material.title}</CardTitle>
                    <CardDescription>{material.description}</CardDescription>
                  </CardHeader>
                </div>

                <CardContent className="text-center mt-auto">
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>{material.type}</span>
                    <span>{material.size}</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Sample
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-gradient-hero px-8 py-4">
              Get Complete Study Package
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyMaterial;