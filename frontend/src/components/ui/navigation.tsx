import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './button';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    label: 'Home',
    href: '/'
  }, {
    label: 'About',
    href: '/about'
  }, {
    label: 'Courses',
    href: '/courses'
  }, {
    label: 'Faculty',
    href: '/faculty'
  }, {
    label: 'Results',
    href: '/results'
  }, {
    label: 'Study Material',
    href: '/study-material'
  }, {
    label: 'Contact',
    href: '/contact'
  }];
  const isActive = (href: string) => location.pathname === href;
  return <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                AcademyPro
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => <Link key={item.label} to={item.href} className={cn("px-3 py-2 rounded-md text-sm font-medium transition-colors", isActive(item.href) ? "bg-primary text-primary-foreground" : "hover:bg-muted")}>
                  {item.label}
                </Link>)}
            </div>
          </div>

          {/* CTA Buttons */}
          <a href="tel:+919876543210">
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
          </a>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("md:hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden")}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-subtle border-t border-border">
            {navItems.map(item => <Link key={item.label} to={item.href} className={cn("block px-3 py-2 rounded-md text-base font-medium transition-colors", isActive(item.href) ? "bg-primary text-primary-foreground" : "hover:bg-muted")} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>)}
            <div className="flex flex-col space-y-2 pt-4">
              <a href="tel:+919876543210">
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};