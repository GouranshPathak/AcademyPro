import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Calendar, BookOpen, Video, Award } from 'lucide-react';
export const CoursesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = [{
    id: 'all',
    label: 'All Courses'
  }, {
    id: 'jee',
    label: 'JEE Physics'
  }, {
    id: 'neet',
    label: 'NEET Physics'
  }, {
    id: 'dropper',
    label: 'Dropper Batch'
  }];
  const courses = [{
    id: 1,
    title: 'JEE Physics Mastery',
    category: 'jee',
    duration: '12 months',
    batchSize: '25 students',
    startDate: 'April 2024',
    mode: 'Offline + Online',
    features: ['Complete JEE Physics', 'Personal Mentoring', 'Weekly Tests', 'Concept Building'],
    price: '₹1,20,000',
    discount: '20% Early Bird',
    featured: true
  }, {
    id: 2,
    title: 'NEET Physics Complete',
    category: 'neet',
    duration: '10 months',
    batchSize: '30 students',
    startDate: 'June 2024',
    mode: 'Offline + Online',
    features: ['NCERT + Advanced', 'Medical Physics Focus', 'Mock Tests', 'Doubt Clearing'],
    price: '₹1,00,000',
    discount: '15% Off',
    featured: true
  }, {
    id: 3,
    title: 'Physics Dropper Batch',
    category: 'dropper',
    duration: '8 months',
    batchSize: '20 students',
    startDate: 'May 2024',
    mode: 'Online + Offline',
    features: ['Intensive Revision', 'Previous Year Problems', 'Strategy Sessions', '1-on-1 Mentoring'],
    price: '₹80,000',
    discount: 'Early Bird 25%',
    featured: false
  }, {
    id: 4,
    title: 'Complete Science Package',
    category: 'all',
    duration: '15 months',
    batchSize: '15 students',
    startDate: 'August 2024',
    mode: 'Team Teaching',
    features: ['Physics + Chemistry + Maths/Bio', 'Expert Team', 'All Subjects', 'Complete Preparation'],
    price: '₹2,00,000',
    discount: '10% Off',
    featured: false
  }];
  const filteredCourses = activeFilter === 'all' ? courses : courses.filter(course => course.category === activeFilter);
  return <section id="courses" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Master <span className="bg-gradient-hero bg-clip-text text-transparent">Physics</span> with Expert Guidance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized Physics courses and complete science packages designed by our expert team for JEE & NEET success.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => <Button key={filter.id} variant={activeFilter === filter.id ? "default" : "outline"} onClick={() => setActiveFilter(filter.id)} className={activeFilter === filter.id ? "bg-gradient-hero" : ""}>
              {filter.label}
            </Button>)}
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => <Card key={course.id} className={`relative overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 ${course.featured ? 'ring-2 ring-primary' : ''}`}>
              {course.featured && <div className="absolute top-4 right-4">
                  
                </div>}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{course.mode}</Badge>
                  {course.discount && <Badge className="bg-accent text-accent-foreground">{course.discount}</Badge>}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Course Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{course.batchSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{course.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-primary" />
                    <span>Live Classes</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Key Features
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {course.features.map((feature, index) => <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>)}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-foreground">{course.price}</div>
                      <div className="text-sm text-muted-foreground">Total Fee</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-hero">
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-4">Need Guidance? Let's Talk!</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              As your Physics mentor, I'll personally help you choose the right course based on your current level and target rank.
            </p>
            <Button size="lg" className="bg-gradient-hero">
              Schedule Call with Physics Master
            </Button>
          </div>
        </div>
      </div>
    </section>;
};