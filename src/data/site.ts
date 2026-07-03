import { Plane, Ship, FileCheck, Container, Globe2, Headphones, Route, ShieldCheck, Timer, Users, Sparkles, BarChart3 } from 'lucide-react';

export const company = {
  name: 'Spectralink Global Logistics Pvt Ltd',
  phone: '+91 95946 78999',
  email: 'HRHEAD@SPECTRALINKGLOBAL.COM',
  address: '1B, Michael Mansion, Plot No. 68, Road No. 7, Prabhat Colony, Santacruz East, Mumbai – 400055',
  whatsapp: '919594678999',
};

export const nav = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['CFS Operations', '/cfs-operations'], ['Global Network', '/global-network'], ['Contact', '/contact']
];

export const services = [
  { title: 'Air Freight', icon: Plane, text: 'Fast, secure, and reliable transportation for urgent and high-value cargo.' },
  { title: 'Ocean Freight', icon: Ship, text: 'Reliable FCL and LCL shipping solutions with efficient container management and worldwide connectivity.' },
  { title: 'Customs Clearance', icon: FileCheck, text: 'Efficient customs clearance, shipping bill filing, inspection coordination, and compliance support.' },
  { title: 'CFS Operations', icon: Container, text: 'Professional Container Freight Station support from carting to vessel loading.' },
];

export const whyChoose = [
  ['Tailored Shipping Solutions', 'Customized logistics strategies designed for every business.', Sparkles],
  ['Specialized Expertise', 'Precise handling for cargo ranging from delicate electronics to heavy machinery.', ShieldCheck],
  ['Flexible Air, LCL & FCL Options', 'Adaptable freight options based on shipment needs and timelines.', Ship],
  ['Personalized Guidance', 'Dedicated logistics experts supporting every shipment.', Users],
  ['Streamlined Processes', 'Technology-driven operations that improve efficiency.', Route],
  ['End-to-End Visibility', 'Transparent shipment updates throughout the logistics process.', BarChart3],
  ['Global Reach', 'Worldwide logistics network ensuring reliable transportation.', Globe2],
  ['24×7 Customer Support', 'Responsive assistance and proactive communication.', Headphones],
  ['Fast Transit Times', 'Optimized transportation planning for timely movement.', Timer],
];

export const cfsSteps = ['Carting','Shipping Bill Filing','Customs Inspection','Clearing','Stuffing','Sealing','Movement to Port','Gate In at Port','Loaded on Vessel','On-board details sent to client'];
