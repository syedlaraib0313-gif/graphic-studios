export type ServiceCategory = 
  | 'BRANDING' 
  | 'SOCIAL MEDIA' 
  | 'PRINT' 
  | 'PACKAGING' 
  | 'ADVERTISING' 
  | 'BUSINESS'
  | 'DIGITAL';

export type PortfolioCategory = 'ALL' | 'BRANDING' | 'SOCIAL MEDIA' | 'PRINT' | 'PACKAGING' | 'ADVERTISING';

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  client: string;
  services: string[];
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  mockupImage: string;
  galleryImages: string[];
  palette: string[];
  year: string;
  featured?: boolean;
}

export interface ServiceDetail {
  id: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  items: string[];
  deliverablesSummary: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverable: string;
}

export interface WhyPillar {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  selectedServices: string[];
  projectDetails: string;
  budget: string;
  urgency: string;
}
