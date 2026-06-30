export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  href: string
  category: string
  accent: 'sky' | 'violet'
  features: string[]
}

export const products: Product[] = [
  {
    id: 'schooldash',
    name: 'SchoolDash',
    tagline: 'School Management System',
    description:
      'Go digital with a complete school management platform. Simplify attendance, academics, exams, timetables, and communication — all from one admin portal.',
    href: 'https://schooldash.in/',
    category: 'K-12 Education',
    accent: 'sky',
    features: [
      'Student & staff management',
      'Attendance & academics',
      'Exams & timetables',
      'Fee collection & reports',
      'Parent-teacher communication',
      'Mobile apps for iOS & Android',
    ],
  },
  {
    id: 'collegedash',
    name: 'CollegeDash',
    tagline: 'College Management & Automation',
    description:
      'Digitize your campus with an all-in-one college ERP. Manage admissions, academics, library, staff, LMS, grievances, and announcements from a single smart dashboard.',
    href: 'https://collegedash.in/',
    category: 'Higher Education',
    accent: 'violet',
    features: [
      'Admissions & enrollment',
      'Academics & LMS integration',
      'Library & staff management',
      'Grievance & announcement system',
      'NAAC reporting tools',
      'Student portal & website CMS',
    ],
  },
]

export const accentStyles = {
  sky: {
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    icon: 'bg-sky-500/15 text-sky-400',
    glow: 'from-sky-500/15',
    border: 'hover:border-sky-500/30',
    check: 'text-sky-400',
    logo: 'bg-sky-500',
  },
  violet: {
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    icon: 'bg-violet-500/15 text-violet-400',
    glow: 'from-violet-500/15',
    border: 'hover:border-violet-500/30',
    check: 'text-violet-400',
    logo: 'bg-violet-500',
  },
} as const
