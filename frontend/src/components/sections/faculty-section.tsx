import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, BookOpen, Users, Award } from 'lucide-react';

export const FacultySection = () => {
  const faculty = [
    {
      id: 1,
      name: 'Physics Master',
      subject: 'Physics',
      experience: '6+ Years',
      qualification: 'Lead Mentor & Co-founder',
      specialization: 'JEE & NEET Physics',
      rating: 4.9,
      studentsCleared: '1500+',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      achievements: ['700+ JEE Crackers', '800+ NEET Qualifiers', 'Team Leader'],
    },
    {
      id: 2,
      name: 'Dr. Anjali Sharma',
      subject: 'Chemistry',
      experience: '8+ Years',
      qualification: 'AIIMS Graduate, Chemistry Expert',
      specialization: 'Organic & Physical Chemistry',
      rating: 4.8,
      studentsCleared: '1200+',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      achievements: ['NEET Chemistry Expert', 'Organic Specialist', '500+ NEET Selections'],
    },
    {
      id: 3,
      name: 'Prof. Suresh Patel',
      subject: 'Mathematics',
      experience: '10+ Years',
      qualification: 'IIT Bombay Graduate',
      specialization: 'JEE Advanced Mathematics',
      rating: 4.9,
      studentsCleared: '1000+',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      achievements: ['JEE Maths Expert', 'Problem Solving Master', '400+ JEE Selections'],
    },
    {
      id: 4,
      name: 'Dr. Meera Reddy',
      subject: 'Biology',
      experience: '7+ Years',
      qualification: 'MBBS, NEET Specialist',
      specialization: 'Human Physiology & Botany',
      rating: 4.8,
      studentsCleared: '1100+',
      image: 'https://images.unsplash.com/photo-1594824919653-2241e68c35a8?w=400&h=400&fit=crop',
      achievements: ['Medical Background', 'NEET Biology Expert', '600+ NEET Selections'],
    },
  ];

  const mentorshipFeatures = [
    {
      icon: Users,
      title: '1-on-1 Mentorship',
      description: 'Personal guidance sessions with dedicated mentors',
    },
    {
      icon: BookOpen,
      title: 'Progress Tracking',
      description: 'Regular assessment and performance monitoring',
    },
    {
      icon: Award,
      title: 'Study Plans',
      description: 'Customized study schedules based on your strengths',
    },
  ];

  return (
    <section id="faculty" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="bg-gradient-hero bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated team of subject specialists led by your Physics mentor, working together to ensure your JEE & NEET success.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {faculty.map((teacher) => (
            <Card key={teacher.id} className="overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-warning text-warning-foreground">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {teacher.rating}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{teacher.name}</h3>
                    <p className="text-primary font-semibold">{teacher.subject} Expert</p>
                    <p className="text-sm text-muted-foreground">{teacher.qualification}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium">{teacher.experience}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Students Cleared:</span>
                      <span className="font-medium text-accent">{teacher.studentsCleared}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Specialization:</p>
                    <p className="text-sm text-muted-foreground">{teacher.specialization}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Key Achievements:</p>
                    <div className="space-y-1">
                      {teacher.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mentorship Section */}
        <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Personalized Mentorship Program</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond classroom teaching, we provide dedicated mentorship to ensure every student reaches their potential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentorshipFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <blockquote className="text-xl italic text-muted-foreground mb-4 max-w-3xl mx-auto">
              "Our team doesn't just teach concepts, we inspire students to think beyond textbooks and develop problem-solving skills that lead to success."
            </blockquote>
            <cite className="text-primary font-semibold">- Physics Master, Lead Mentor</cite>
          </div>
        </div>
      </div>
    </section>
  );
};