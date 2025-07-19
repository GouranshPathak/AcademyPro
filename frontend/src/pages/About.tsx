import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, BookOpen, Star, Clock, Target, Heart } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: GraduationCap, title: "M.Sc Physics", description: "From IIT Delhi" },
    { icon: Award, title: "6+ Years", description: "Teaching Experience" },
    { icon: Users, title: "1000+", description: "Students Taught" },
    { icon: Star, title: "90%", description: "Success Rate" },
  ];

  const teachingPhilosophy = [
    {
      icon: Target,
      title: "Goal-Oriented Learning",
      description: "Every lesson is designed with clear objectives to help you achieve your academic goals."
    },
    {
      icon: Heart,
      title: "Passion for Physics",
      description: "Making complex physics concepts simple and enjoyable for every student."
    },
    {
      icon: BookOpen,
      title: "Personalized Approach",
      description: "Tailored teaching methods based on individual learning styles and pace."
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Convenient scheduling that fits your busy student life and study routine."
    }
  ];

  const milestones = [
    { year: "2008", event: "Started teaching career with first batch of 10 students" },
    { year: "2018", event: "Founded AcademyPro with innovative teaching methods" },
    { year: "2020", event: "Adapted to digital learning during pandemic" },
    { year: "2023", event: "Achieved 90%+ success rate milestone" },
    { year: "2025", event: "Celebrated 6 years of transforming student lives" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Meet Your Physics Mentor
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming the way students learn physics with passion, innovation, and proven results
            </p>
          </div>

          {/* Main About Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-hero rounded-full p-1">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                    <div className="w-72 h-72 bg-gradient-subtle rounded-full flex items-center justify-center">
                      <span className="text-6xl font-bold text-primary">Dr. SK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Dr. Sanjeev Kumar</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Physics Expert</Badge>
                  <Badge variant="secondary">IIT Delhi Alumni</Badge>
                  <Badge variant="secondary">15+ Years Experience</Badge>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Hey there, future scientists! 👋 I'm Dr. Sanjeev Kumar, and I've been on an incredible 
                  journey of making physics fun and accessible for students just like you. With over 15 years 
                  of experience and 2000+ successful students, I believe every student can master physics 
                  with the right guidance and approach.
                </p>
                <p className="text-lg text-muted-foreground">
                  My mission is simple: to turn your physics fears into physics passion! Whether you're 
                  struggling with Newton's laws or dreaming of quantum mechanics, I'm here to guide you 
                  every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300 bg-card border-2 border-primary/10">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-4 group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Students Love Learning With Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              It's not just about teaching physics - it's about building confidence, curiosity, and success!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teachingPhilosophy.map((item, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-card border-2 border-primary/10">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-hero group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Teaching Journey</h2>
            <p className="text-xl text-muted-foreground">
              From a small classroom to touching thousands of lives - here's how it all began
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-hero group-hover:scale-125 transition-transform"></div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-hero opacity-30 mt-2"></div>
                  )}
                </div>
                <Card className="flex-1 group-hover:shadow-elegant transition-all duration-300 bg-card border-2 border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <Badge variant="outline" className="self-start">{milestone.year}</Badge>
                      <p className="text-lg">{milestone.event}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Physics Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful students who've transformed their understanding of physics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Free Demo Class
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;