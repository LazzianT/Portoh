import heroPortrait from '../assets/profile/01_hero_portrait.png';
import aboutPortrait from '../assets/profile/02_about_portrait.png';
import contactPortrait from '../assets/profile/16_contact_portrait.png';
import cleanCode from '../assets/illustrations/03_clean_scalable_illustration.png';
import modernUi from '../assets/illustrations/04_modern_uiux_illustration.png';
import learning from '../assets/illustrations/05_continuous_learning_illustration.png';
import wmsScreenshot from '../assets/projects/07_wms_dashboard_screenshot.png';
import pmScreenshot from '../assets/projects/09_project_management_screenshot.png';
import senditScreenshot from '../assets/projects/11_sendit_phone_screens.png';
import lazytechScreenshot from '../assets/projects/13_lazytech_screenshot.png';
import schoolScreenshot from '../assets/projects/15_school_management_screenshot.png';

export const profile = { heroPortrait, aboutPortrait, contactPortrait };

export const skillCards = [
  {
    title: 'Clean & Scalable Code',
    description: 'Writing code that is maintainable and easy to scale.',
    image: cleanCode,
    tone: 'light',
    rotate: '-3deg',
  },
  {
    title: 'Modern UI/UX Focus',
    description: 'Create intuitive and beautiful user experiences.',
    image: modernUi,
    tone: 'navy',
    rotate: '4deg',
  },
  {
    title: 'Continuous Learning',
    description: 'Always open to new technologies and challenges.',
    image: learning,
    tone: 'lime',
    rotate: '-3deg',
  },
];

export const featuredProject = {
  id: 'wms',
  title: 'WMS - Warehouse Management System',
  description:
    'Inventory and warehouse management system for manufacturing company with modern and clean interface.',
  tech: ['React', 'SQL Server', 'Tailwind'],
  image: wmsScreenshot,
};

export const projects = [
  {
    id: 'project-management',
    title: 'Project Management App',
    description:
      'A complete project management platform with team collaboration, task tracking, and analytics.',
    tech: ['React', 'Express.js', 'Tailwind'],
    image: pmScreenshot,
  },
  {
    id: 'sendit',
    title: 'Send.it - Shipping App',
    description:
      'A prototype for shipping service with pickup feature and heavy item handling.',
    tech: ['Figma', 'UI/UX', 'Prototype'],
    image: senditScreenshot,
  },
  {
    id: 'lazytech',
    title: 'LazyTech Store',
    description:
      'E-commerce for computer equipment with modern and clean interface.',
    tech: ['React', 'Node.js', 'Tailwind'],
    image: lazytechScreenshot,
  },
  {
    id: 'school',
    title: 'School Management System',
    description:
      'Manage student, teacher, class, and schedules in a simple way.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    image: schoolScreenshot,
  },
];

export const navLinks = [
  { label: 'Home', href: '#home', preview: heroPortrait },
  { label: 'About', href: '#about', preview: aboutPortrait },
  { label: 'Projects', href: '#projects', preview: wmsScreenshot },
  { label: 'Contact', href: '#contact', preview: contactPortrait },
];
