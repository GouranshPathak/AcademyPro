import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Instagram,
  Youtube,
  Send
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Our counselor will contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Address',
      content: 'A-123, Educational Hub,\nSector 15, Noida, UP - 201301',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210\n+91 11 4567 8901',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@academypro.com\nadmissions@academypro.com',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Mon - Sat: 9:00 AM - 8:00 PM\nSun: 10:00 AM - 6:00 PM',
    },
  ];

  const socialLinks = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919876543210', color: 'text-green-600' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'text-pink-600' },
    { icon: Youtube, label: 'YouTube', href: '#', color: 'text-red-600' },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Get In <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Have questions about our courses? Want to book a free demo class? We're here to help you start your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-2 border-primary/20 bg-card">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl md:text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium mb-2">
                    Interested Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a course</option>
                    <option value="neet-foundation">NEET Foundation</option>
                    <option value="jee-main-advanced">JEE Main + Advanced</option>
                    <option value="neet-dropper">NEET Dropper</option>
                    <option value="jee-crash">JEE Crash Course</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals and any specific questions you have..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-hero">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-card border-2 border-primary/20 bg-card">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                       <div className="flex-1 min-w-0">
                         <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                         <p className="text-muted-foreground whitespace-pre-line break-words">{info.content}</p>
                       </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="shadow-card border-2 border-primary/20 bg-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className={`w-5 h-5 ${social.color}`} />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-card border-2 border-primary/20 bg-card">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Location: Noida, UP</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-20">
          <Card className="shadow-card border-2 border-primary/20 bg-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
              <p className="text-muted-foreground mb-6">
                Have questions about our courses, fees, or admission process? Check out our comprehensive FAQ section.
              </p>
              <Button variant="outline" size="lg">
                View All FAQs
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};