import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Skin Disease AI',
      img: 'https://i.postimg.cc/pVcnwpYz/240-F-1575698413-w-Cq-F4o-BF5-Ec-Nl-Vvl-NXUnoq-QMgi0r-SWp1.jpg',
      year: 2025,
      tags: ['Python', 'CNN', 'Streamlit'],
      url: '',
      repo: ''
    },
    {
      id: getId(),
      name: 'Sports League Management System',
      img: 'https://i.postimg.cc/XJ6CDdng/240-F-17335975-wez-Hs72-ORL3-CY2d-FLVi9-Xt-Lx4-XDOg-ZBT.jpg',
      year: 2024,
      tags: ['Java', 'HTML'],
      url: '',
      repo: ''
    },

  ],
};
