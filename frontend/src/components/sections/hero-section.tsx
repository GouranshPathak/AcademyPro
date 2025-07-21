import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, MapPin, CheckCircle } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { EnrollmentForm } from './enrollment-form'; // adjust if path is different

export const HeroSection = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState('JEE Physics Mastery');

  const highlights = [
    { icon: Users, label: '1000+', subtitle: 'Students Taught' },
    { icon: Award, label: '6+', subtitle: 'Years Teaching' },
    { icon: CheckCircle, label: '700+', subtitle: 'JEE Success' },
    { icon: CheckCircle, label: '800+', subtitle: 'NEET Success' },
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
    // Add more courses if needed
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master <span className="text-warning">Physics</span> for 
                <span className="block">JEE & NEET Success</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-lg">
                Hi, I'm your Physics mentor with 6+ years of experience. I've helped 1500+ students crack JEE & NEET with my proven teaching methodology.
              </p>
            </div>

            {/* CTA Button with Dialog */}
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-4 shadow-hero"
                  onClick={() => {
                    setSelectedCourseTitle('JEE Physics Mastery');
                    setOpenDialog(true);
                  }}
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5 ml-2" />
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

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {highlights.map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-warning" />
                  <div className="text-2xl font-bold">{item.label}</div>
                  <div className="text-sm text-blue-100">{item.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-hero">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">NEET 2024 Results</div>
                      <div className="text-sm text-muted-foreground">Top AIR achievers</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      { name: 'Rahul S.', rank: 'AIR 23', score: '720/720' },
                      { name: 'Priya M.', rank: 'AIR 45', score: '715/720' },
                      { name: 'Arjun K.', rank: 'AIR 67', score: '710/720' },
                    ].map((student, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-gradient-subtle rounded-lg">
                        <div>
                          <div className="font-medium text-foreground">{student.name}</div>
                          <div className="text-sm text-accent font-semibold">{student.rank}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Score</div>
                          <div className="font-bold text-foreground">{student.score}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
