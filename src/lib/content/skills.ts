import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'developer toolkit',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Writing efficient code in Python, C, and C++',
        'Building web pages using HTML and JavaScript',
        'Version control and collaboration using Git and GitHub',
        'Writing backend scripts with Node.js',
      ],
      softwareSkills: [
        { name: 'Python', icon: 'logos:python' },
        { name: 'C', icon: 'devicon:c' },
        { name: 'C++', icon: 'devicon:cplusplus' },
        { name: 'HTML', icon: 'vscode-icons:file-type-html' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'GitHub', icon: 'akar-icons:github-fill' },
      ],
    },
  ],
};
