"use client"

import React, { useEffect } from 'react';
import { Navbar, Footer, Hero, User, Features, CTA, FAQSection, UseCasesSection } from "@/components/landing";

const LandingPage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <CTA />
        <User />
        <UseCasesSection />
        <FAQSection />
      </div >
      <Footer />
    </>
  );
};

export default LandingPage;