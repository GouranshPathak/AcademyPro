"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid 10-digit phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  course: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).optional(),
});

export const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", email: "", course: "", message: "" },
  });
  const { isSubmitting } = form.formState;

  // --- UPDATED: Form submission handler with real API call ---
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/Contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Server responded with an error.');
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Our counselor will contact you within 24 hours.",
      });
      form.reset();

    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        title: "Submission Failed",
        description: "Could not send your message. Please check your connection and try again.",
        variant: "destructive",
      });
    }
  }

  const contactInfo = [
    { icon: MapPin, title: 'Our Address', content: `Vijay Nagar, \nIndore, MP - 452010` },
    { icon: Phone, title: 'Call Us', content: '+91 98765 43210\n+91 11 4567 8901' },
    { icon: Mail, title: 'Email Us', content: 'info@academypro.com\nadmissions@academypro.com' },
    { icon: Clock, title: 'Office Hours', content: 'Mon - Sat: 9:00 AM - 8:00 PM\nSun: 10:00 AM - 6:00 PM' },
  ];
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-12 md:py-20 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Get In <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Have questions about our courses? Want to book a free demo class? We're here to help you start your journey.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div variants={itemVariants}>
            <Card className="shadow-card border-2 border-primary/20 bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField control={form.control} name="name" render={({ field }) => ( <FormItem><FormLabel>Full Name *</FormLabel><FormControl><Input placeholder="Enter your full name" {...field} /></FormControl><FormMessage /></FormItem> )} />
                      <FormField control={form.control} name="phone" render={({ field }) => ( <FormItem><FormLabel>Phone Number *</FormLabel><FormControl><Input type="tel" placeholder="Enter your phone number" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    </div>
                    <FormField control={form.control} name="email" render={({ field }) => ( <FormItem><FormLabel>Email Address *</FormLabel><FormControl><Input type="email" placeholder="Enter your email address" {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="course" render={({ field }) => ( <FormItem><FormLabel>Interested Course</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select a course" /></SelectTrigger></FormControl><SelectContent><SelectItem value="jee-main-advanced">JEE Main + Advanced</SelectItem><SelectItem value="neet-foundation">NEET Foundation</SelectItem><SelectItem value="neet-dropper">NEET Dropper</SelectItem><SelectItem value="jee-crash">JEE Crash Course</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
                    <FormField control={form.control} name="message" render={({ field }) => ( <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea rows={4} placeholder="Tell us about your goals..." {...field} /></FormControl><FormMessage /></FormItem> )} />
                    <Button type="submit" size="lg" className="w-full bg-gradient-hero" disabled={isSubmitting}>
                      {isSubmitting ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div className="space-y-6 md:space-y-8" variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="shadow-card border-2 border-primary/20 bg-card h-full">
                    <CardContent className="p-4 md:p-6"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0"><info.icon className="w-6 h-6 text-white" /></div><div className="flex-1 min-w-0"><h3 className="font-bold text-lg mb-2">{info.title}</h3><p className="text-muted-foreground whitespace-pre-line break-words">{info.content}</p></div></div></CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants}>
              <Card className="shadow-card border-2 border-primary/20 bg-card overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.498399589332!2d77.3175095754999!3d28.584824775691074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458d6273413%3A0x733791e84675e3a!2sSector%2015%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1721471714088!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-lg"
                ></iframe>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};