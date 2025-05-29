module.exports = {
  siteTitle: 'Suraj Kumar | Mern Stack Developer',
  siteDescription:
    "Suraj Kumar is an aspiring MERN stack developer based in India, passionate about learning new technologies and helping beginners in tech.",
  siteKeywords:
    'Suraj Doberiyal, Suraj, doberiyal, surajdoberiyal, software engineer, web developer, javascript, script, delhi, new delhi, bit, vikas nagar, uttam nagar',
  siteUrl: 'https://iamsuraj.netlify.app',
  siteLanguage: 'en_US',
  googleAnalyticsID: '-',
  googleVerification: '-',
  name: 'Suraj kumar',
  location: 'Uttam Nagar, India',
  email: 'Surajdoberiyal@gmail.com',
  github: 'https://github.com/Surajdoberiyal',
  twitterHandle: '@surajdoberiyal',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Surajdoberiyal',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/suraj-kumar-73b77b185/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/suraj__dobriyal',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/DoberiyalSuraj',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
