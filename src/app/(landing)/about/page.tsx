'use client';

import React from 'react';
import { FoundersNote, ImpactStats, MissionSection, VisionAndPillars } from '@/components/landing/about';

const About: React.FC = () => {
  return (
    <>
      <MissionSection />
      <VisionAndPillars />
      <FoundersNote />
      <ImpactStats />
    </>
  );
};

export default About;
