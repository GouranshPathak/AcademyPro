import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Calendar, BookOpen, Video } from 'lucide-react';
import { EnrollmentForm } from './enrollment-form'; 
import { Link } from 'react-router-dom';

export const CoursesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState('');

  // Handle anchor link auto-scroll (from footer links)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['neet', 'jee', 'dropper', 'all'].includes(hash)) {
      setActiveFilter(hash);
      const section = document.getElementById(hash);
      if (section) {
        setTimeout(() => {
          const yOffset = -100; // Adjust this based on your header height
          const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'jee', label: 'JEE Physics' },
    { id: 'neet', label: 'NEET Physics' },
    { id: 'dropper', label: 'Dropper Batch' },
  ];

  const courses = [
    {
      id: 1,
      title: 'JEE Physics Mastery',
      category: 'jee',
      duration: '12 months',
      batchSize: '25 students',
      startDate: 'April 2025',
      mode: 'Offline + Online',
      features: ['Complete JEE Physics', 'Personal Mentoring', 'Weekly Tests', 'Concept Building'],
      price: '₹1,20,000',
      discount: '20% Early Bird',
      featured: true,
      brochure: 'Jee.pdf',
    },
    {
      id: 2,
      title: 'NEET Physics Complete',
      category: 'neet',
      duration: '10 months',
      batchSize: '30 students',
      startDate: 'June 2025',
      mode: 'Offline + Online',
      features: ['NCERT + Advanced', 'Medical Physics Focus', 'Mock Tests', 'Doubt Clearing'],
      price: '₹1,00,000',
      discount: '15% Off',
      featured: true,
      brochure: 'Neet.pdf',
    },
    {
      id: 3,
      title: 'Physics Dropper Batch',
      category: 'dropper',
      duration: '8 months',
      batchSize: '20 students',
      startDate: 'May 2025',
      mode: 'Online + Offline',
      features: ['Intensive Revision', 'Previous Year Problems', 'Strategy Sessions', '1-on-1 Mentoring'],
      price: '₹80,000',
      discount: 'Early Bird 25%',
      featured: false,
      brochure: 'DropperBatch.pdf',
    },
    {
      id: 4,
      title: 'Complete Science Package',
      category: 'all',
      duration: '15 months',
      batchSize: '15 students',
      startDate: 'August 2025',
      mode: 'Team Teaching',
      features: ['Physics + Chemistry + Maths/Bio', 'Expert Team', 'All Subjects', 'Complete Preparation'],
      price: '₹2,00,000',
      discount: '10% Off',
      featured: false,
      brochure: 'ScienceComplete.pdf',
    },
  ];

  const filteredCourses =
    activeFilter === 'all'
      ? courses
      : courses.filter((course) => course.category === activeFilter);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <section id="courses" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6" variants={itemVariants}>
            Master <span className="bg-gradient-hero bg-clip-text text-transparent">Physics</span> with Expert Guidance
          </motion.h2>
          <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
            Specialized Physics courses and complete science packages designed by our expert team for JEE & NEET success.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {filters.map((filter) => (
            <div key={filter.id}>
              {/* 🔧 This invisible anchor is what gets scrolled into view */}
              <div id={filter.id} className="h-0" />
              <Button
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? 'bg-gradient-hero' : ''}
              >
                {filter.label}
              </Button>
            </div>
          ))}
        </motion.div>

        {/* Course Cards */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Card className={`relative overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 h-full flex flex-col ${course.featured ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{course.mode}</Badge>
                      {course.discount && (
                        <Badge className="bg-accent text-accent-foreground">{course.discount}</Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" /> <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" /> <span>{course.batchSize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" /> <span>{course.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-primary" /> <span>Live Classes</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" /> Key Features
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {course.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-foreground">{course.price}</div>
                          <div className="text-sm text-muted-foreground">Total Fee</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className="w-full bg-gradient-hero"
                              onClick={() => {
                                setSelectedCourseTitle(course.title);
                                setOpenDialog(true);
                              }}
                            >
                              Enroll Now
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <EnrollmentForm
                              courses={courses}
                              selectedCourseTitle={selectedCourseTitle}
                              onFormSubmit={() => setOpenDialog(false)}
                            />
                          </DialogContent>
                        </Dialog>

                        <a href={`/${course.brochure}`} download className="w-full block">
                          <Button variant="outline" className="w-full">
                            Download Brochure
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-4">Need Guidance? Let's Talk!</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              As your Physics mentor, I'll personally help you choose the right course based on your current level and target rank.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-hero">
                Schedule Call
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
