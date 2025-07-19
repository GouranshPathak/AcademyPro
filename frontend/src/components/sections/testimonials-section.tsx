import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Quote, Play, Trophy } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Arjun Mehta',
      rank: 'NEET AIR 23',
      course: 'NEET 2-Year Program',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      quote: 'The faculty here is exceptional. Their teaching methodology and constant support helped me achieve my dream rank.',
      score: '720/720',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      rank: 'JEE Advanced AIR 156',
      course: 'JEE Main + Advanced',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b302?w=150&h=150&fit=crop',
      quote: 'The problem-solving approach and regular mock tests prepared me well for the actual exam. Highly recommended!',
      score: '324/360',
      rating: 5,
    },
    {
      id: 3,
      name: 'Rohit Kumar',
      rank: 'NEET AIR 89',
      course: 'NEET Dropper Batch',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      quote: 'After a gap year, I was worried about my preparation. The mentors here guided me perfectly to achieve my goal.',
      score: '715/720',
      rating: 5,
    },
  ];

  const parentTestimonials = [
    {
      name: 'Mrs. Geeta Patel',
      studentName: 'Kavya Patel',
      rank: 'NEET AIR 45',
      quote: 'The regular parent meetings and progress updates kept us informed. The faculty truly cares about each student.',
    },
    {
      name: 'Mr. Rajesh Singh',
      studentName: 'Vikram Singh',
      rank: 'JEE Main 99.8%ile',
      quote: 'Excellent teaching quality and infrastructure. Our son improved dramatically in just 6 months.',
    },
  ];

  const videoTestimonials = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
      title: 'NEET Toppers Share Their Journey',
      duration: '3:45',
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop',
      title: 'JEE Success Stories',
      duration: '4:20',
    },
  ];

  return (
    <section id="results" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="bg-gradient-hero bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our successful students who cracked NEET and JEE with flying colors.
          </p>
        </div>

        {/* Student Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <Badge className="bg-accent text-accent-foreground mb-1">
                      <Trophy className="w-3 h-3 mr-1" />
                      {testimonial.rank}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                  </div>
                </div>

                <div className="relative mb-4">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic pl-6">{testimonial.quote}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Score</div>
                    <div className="font-bold text-accent">{testimonial.score}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Watch Our <span className="bg-gradient-hero bg-clip-text text-transparent">Toppers</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-card">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">{video.title}</h4>
                    <p className="text-sm opacity-90">{video.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parent Testimonials */}
        <div className="bg-card rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center mb-8">What Parents Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {parentTestimonials.map((parent, index) => (
              <div key={index} className="relative">
                <Quote className="w-12 h-12 text-primary/20 absolute -top-2 -left-2" />
                <blockquote className="text-lg italic mb-4 pl-8">
                  "{parent.quote}"
                </blockquote>
                <div className="pl-8">
                  <cite className="font-semibold text-foreground">- {parent.name}</cite>
                  <p className="text-sm text-muted-foreground">
                    Parent of {parent.studentName} ({parent.rank})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Success Stories</h3>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Start your journey towards medical or engineering excellence with our proven methodology.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Your Success Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};