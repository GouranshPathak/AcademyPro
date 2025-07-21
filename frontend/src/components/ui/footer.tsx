import React from 'react';
import { Button } from './button';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Youtube,
  MessageCircle,
  Users,
  Award
} from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'Results', href: '/results' },
    { label: 'Study Material', href: '/study-material' },
    { label: 'Contact', href: '/contact' },
  ];

    const courses = [
      { label: 'NEET Foundation', href: '/courses/#neet' },
      { label: 'JEE Main + Advanced', href: '/courses/#jee' },
      { label: 'Dropper', href: '/courses/#dropper' },
    ];
  const resources = [
    { label: 'Free Study Material', href: '/study-material' },
    { label: 'Mock Tests', href: '/mock-test' },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">AcademyPro</h2>
              <p className="text-blue-100 mb-4">
                NEET & JEE coaching institute with 6+ years of excellence in medical and engineering entrance preparation.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-xs text-blue-100">Students</div>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold">90%</div>
                <div className="text-xs text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Study Resources</h4>
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      className="text-sm text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">A-123, Educational Hub</p>
                  <p className="text-blue-100">Sector 15, Noida, UP - 201301</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">+91 98765 43210</p>
                  <p className="text-blue-100">+91 11 4567 8901</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <p className="text-blue-100">info@academypro.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm">
              © 2024 AcademyPro. All rights reserved. | Privacy Policy | Terms & Conditions
            </p>
            <div className="flex items-center gap-6 text-sm text-blue-100">
              <span>Trusted by 1,000+ Students</span>
              <span>•</span>
              <span>6+ Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
