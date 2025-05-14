import { Job, Company } from './types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    companyName: 'TechCorp',
    companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=64&h=64&fit=crop',
    location: 'San Francisco, CA',
    type: 'Full-time',
    remote: true,
    description: 'We are looking for a Senior Frontend Developer to join our team...',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with state management',
    ],
    postedAt: '2024-02-15',
  },
  {
    id: '2',
    title: 'Backend Engineer',
    companyName: 'DataFlow',
    companyLogo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=64&h=64&fit=crop',
    location: 'New York, NY',
    type: 'Full-time',
    remote: false,
    description: 'Join our backend team to build scalable services...',
    requirements: [
      'Experience with Node.js and Express',
      'Knowledge of SQL and NoSQL databases',
      'Understanding of microservices architecture',
    ],
    postedAt: '2024-02-14',
  },
];

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=120&h=120&fit=crop',
    description: 'Leading technology company focused on innovation...',
    industry: 'Technology',
    location: 'San Francisco, CA',
    size: '1000-5000 employees',
    website: 'techcorp.com',
    openPositions: [
      {
        id: '1',
        title: 'Senior Frontend Developer',
        location: 'San Francisco, CA',
        type: 'Full-time',
      },
    ],
  },
  {
    id: '2',
    name: 'DataFlow',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&h=120&fit=crop',
    description: 'Data analytics and processing solutions provider...',
    industry: 'Data & Analytics',
    location: 'New York, NY',
    size: '500-1000 employees',
    website: 'dataflow.com',
    openPositions: [
      {
        id: '2',
        title: 'Backend Engineer',
        location: 'New York, NY',
        type: 'Full-time',
      },
    ],
  },
];