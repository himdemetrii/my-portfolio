import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Skills',
      href: '/skills',
    },
    {
      text: 'Experience',
      href: '/experience',
    },
    {
      text: 'Projects',
      href: '/projects',
    },
    {
  text: 'Case Studies',
  href: '/case-studies',
},
    {
      text: 'Contact',
    href: '/contact',

    },
  ],
  actions: [
    {
      text: 'Resume',
      href: '/Demetri_Williams_Computer_Science___Resume.pdf',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'LinkedIn', href: 'https://www.linkedin.com/in/demetri-williams-0370aa304/' },
    { text: 'TikTok', href: 'https://www.tiktok.com/@himdemetrii' },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/demetri-williams-0370aa304/' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@himdemetrii' },
  ],
  footNote: `Demetri Williams · All rights reserved.`,
};
