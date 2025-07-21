"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Quote, Play, Trophy } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

export const TestimonialsSection = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

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
      image: 'https://wallpapers.com/images/hd/professional-profile-pictures-1427-x-1920-txfewtw6mcg0y6hk.jpg',
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
    { name: 'Mrs. Geeta Patel', studentName: 'Kavya Patel', rank: 'NEET AIR 45', quote: 'The regular parent meetings and progress updates kept us informed. The faculty truly cares about each student.'},
    { name: 'Mr. Rajesh Singh', studentName: 'Vikram Singh', rank: 'JEE Main 99.8%ile', quote: 'Excellent teaching quality and infrastructure. Our son improved dramatically in just 6 months.'},
  ];

  const videoTestimonials = [
    {
      id: 1,
      videoId: 'aKFN9pM-brI', // JEE Advanced Topper Interview
      thumbnail: 'https://i.ytimg.com/vi/aKFN9pM-brI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDfi-BqDacJlMzdRAbHWmnzpuxPAQ',
      title: 'JEE Advanced Topper Shares His Secrets',
      duration: '15:32',
    },
    {
      id: 2,
      videoId: 'S-5ECm0q3h4', // NEET Topper Interview
      thumbnail: 'https://i.ytimg.com/vi/S-5ECm0q3h4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDz_6sU3o7WkY6FcaAwdSXr77kV0A',
      title: 'NEET Topper\'s Strategy for 720/720',
      duration: '9:58',
    },
  ];
  
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
    <>
      <motion.section 
        id="results" 
        className="py-20 bg-gradient-subtle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success <span className="bg-gradient-hero bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our successful students who cracked NEET and JEE with flying colors.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <Card className="shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover"/>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <Badge className="bg-accent text-accent-foreground mb-1"><Trophy className="w-3 h-3 mr-1"/>{testimonial.rank}</Badge>
                        <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                      </div>
                    </div>
                    <div className="relative mb-4 flex-grow">
                      <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2"/>
                      <p className="text-muted-foreground italic pl-6">{testimonial.quote}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>))}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Score</div>
                        <div className="font-bold text-primary">{testimonial.score}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mb-16" variants={containerVariants}>
            <motion.h3 className="text-3xl font-bold text-center mb-8" variants={itemVariants}>
              Watch Our <span className="bg-gradient-hero bg-clip-text text-transparent">Toppers</span>
            </motion.h3>
            <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
              {videoTestimonials.map((video) => (
                <motion.div 
                  key={video.id} 
                  className="relative group cursor-pointer" 
                  variants={itemVariants}
                  onClick={() => setPlayingVideoId(video.videoId)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-card">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-primary ml-1"/>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white p-2">
                      <h4 className="font-bold text-lg [text-shadow:_1px_1px_4px_rgb(0_0_0_/_50%)]">{video.title}</h4>
                      <p className="text-sm opacity-90">{video.duration}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="bg-card rounded-3xl p-8 lg:p-12" variants={containerVariants}>
            <motion.h3 className="text-3xl font-bold text-center mb-8" variants={itemVariants}>What Parents Say</motion.h3>
            <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
              {parentTestimonials.map((parent, index) => (
                <motion.div key={index} className="relative" variants={itemVariants}>
                  <Quote className="w-12 h-12 text-primary/20 absolute -top-2 -left-2"/>
                  <blockquote className="text-lg italic mb-4 pl-8">"{parent.quote}"</blockquote>
                  <div className="pl-8">
                    <cite className="font-semibold text-foreground not-italic">- {parent.name}</cite>
                    <p className="text-sm text-muted-foreground">Parent of {parent.studentName} ({parent.rank})</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="text-center mt-16" variants={itemVariants}>
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Join Our Success Stories</h3>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">Start your journey towards medical or engineering excellence with our proven methodology.</p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6">
                  Start Your Success Journey
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Dialog open={!!playingVideoId} onOpenChange={(isOpen) => !isOpen && setPlayingVideoId(null)}>
        <DialogContent className="p-0 border-0 max-w-3xl aspect-video bg-transparent">
          {playingVideoId && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};