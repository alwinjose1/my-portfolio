import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, I am',
  title: 'Alwin Jose',
  tagline: 'A Tech Enthusiast',
  description:
    "I’m a BCA graduate passionate about software development, and AI projects. I love building useful tools and learning new technologies every day.",
  specialText: 'Open to developer roles & internships.',
  cta: {
    title: 'See My Resume',
    url: '/Alwin_Resume.pdf',
    hideInDesktop: true,
  },
};
