export interface Job {
  id: string;
  title: string;
  companyName: string;
  companyLogo: string;
  location: string;
  type: string;
  remote: boolean;
  description: string;
  requirements: string[];
  postedAt: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  industry: string;
  location: string;
  size: string;
  website: string;
  openPositions: {
    id: string;
    title: string;
    location: string;
    type: string;
  }[];
}