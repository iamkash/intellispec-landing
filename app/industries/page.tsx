
import React from 'react';
import IndustriesServed from '@/components/sections/IndustriesServed';

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our modular platform transforms operations across diverse industrial sectors
          </p>
        </div>
        <IndustriesServed />
      </div>
    </main>
  );
} 