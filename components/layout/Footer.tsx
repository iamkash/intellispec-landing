"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  Shield,
  Clock,
  Users,
  HardHat,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { footerLinks } from "@/components/layout/footerLinks";
import { navigation } from "@/components/layout/navigation";

// footerLinks imported from shared module

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/pk-companies",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://twitter.com/pkcompanies", icon: Twitter },
  {
    name: "Facebook",
    href: "https://facebook.com/pkcompanies",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/pkcompanies",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="glass-section border-t border-slate-700/30">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-6 group">
                <div className="relative">
                  <Image
                    src="/images/logos/light-logo.png"
                    alt="intelliSPEC - Where Data Meets Ingenuity"
                    width={160}
                    height={36}
                    className="transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              <p className="text-slate-600 mb-6 leading-relaxed">
                The most modern, trusted, and field-ready industrial platform
                for inspections, safety, and turnarounds.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-slate-500">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm">99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-500">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-500">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">14 Industries Served</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-200/60 backdrop-blur-xl border border-slate-300/50 rounded-xl flex items-center justify-center text-slate-600 hover:text-slate-900:text-white hover:bg-slate-300/60:bg-slate-600/60 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name} className="flex items-center gap-2">
                    {link.icon && (
                      <link.icon
                        className="w-4 h-4 text-slate-500"
                        aria-hidden="true"
                      />
                    )}
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900:text-white transition-colors duration-200 text-sm"
                    >
                      {link.nameParts ? (
                        <>
                          {link.nameParts.prefix}
                          <span className="font-bold">
                            {link.nameParts.suffix}
                          </span>
                        </>
                      ) : (
                        link.name
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-4">Industries</h3>
              <ul className="space-y-2">
                {footerLinks.industries.map((link) => (
                  <li key={link.name} className="flex items-center gap-2">
                    {link.icon && (
                      <link.icon
                        className="w-4 h-4 text-slate-500"
                        aria-hidden="true"
                      />
                    )}
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name} className="flex items-center gap-2">
                    {link.icon && (
                      <link.icon
                        className="w-4 h-4 text-slate-500"
                        aria-hidden="true"
                      />
                    )}
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-slate-900 font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name} className="flex items-center gap-2">
                    {link.icon && (
                      <link.icon
                        className="w-4 h-4 text-slate-500"
                        aria-hidden="true"
                      />
                    )}
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-slate-300/30">
          <div className="glass-morphism rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <HardHat className="w-6 h-6 text-secondary mr-2" />
              <h3 className="text-xl font-semibold text-slate-900">
                Stay Updated
              </h3>
            </div>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Get the latest insights on industrial technology, safety
              innovations, and <span className="text-primary">intelli</span>
              <span className="text-secondary font-bold">SPEC</span> updates.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 ios-input h-12"
              />
              <Button className="bg-secondary text-secondary-foreground border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-12 sm:h-auto sm:px-6 sm:py-3">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-300/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-500">
              <span>
                &copy; 2024 <span className="text-primary">intelli</span>
                <span className="text-secondary font-bold">SPEC</span>. All
                rights reserved.
              </span>
              <Link
                href="/privacy"
                className="hover:text-slate-900:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-slate-900:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-slate-900:text-white transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>

            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>System Status: Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
