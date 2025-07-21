/*
 * =========================
 * AUTHOR INFO - Alwin Jose
 * =========================
 */

import { StringKeyValueType } from '../types';

export const socialLinks: StringKeyValueType = {
  instagram: 'https://www.instagram.com/a.lwin__/',
  github: 'https://github.com/alwinjose1',
  linkedin: 'https://www.linkedin.com/in/alwinjose1/',
};

export const author = {
  name: 'Alwin Jose',
  email: 'alwinjose920@gmail.com',
};

export const seoData = {
  title: 'Alwin Jose | Aspiring Software Developer',
  description:
    'Alwin Jose is a BCA graduate and aspiring software developer, passionate about building impactful web and AI tools.',
  author: author.name,
  image: '/alwin-jose.png', // Change this to your own image URL or upload to GitHub and paste it here
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  keywords: [
    'Alwin Jose',
    'alwinjose1',
    'Portfolio',
    'Alwin Jose Portfolio',
    'BCA Developer',
    'Software Developer Portfolio',
  ],
};
