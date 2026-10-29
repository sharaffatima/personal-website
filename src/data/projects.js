// To add a project, append an object below. Cards, numbering and grid adapt automatically.
// Images live in /public/projects/ (recommended: 16:10, e.g. 1600×1000, WebP or JPG).
const img = (file) => `${import.meta.env.BASE_URL}projects/${file}`;

export const projects = [
  {
    id: 'thesis',
    category: 'Bachelor thesis',
    title: 'Explainable Anomaly Detection',
    description:
      'Bachelor thesis comparing attention visualizations and SHAP feature attribution as explanations for Transformer-based anomaly detection models on ECG time series.',
    tags: ['Python', 'Transformers', 'SHAP', 'Time series'],
    image: {
      src: img('Explainable ECG Anomaly Dashboard.png'), // adjust to your actual file name in public/projects/
      alt: 'Attention and SHAP importance plots overlaid on an anomalous ECG window',
      width: 1600,
      height: 1000,
    },
    link: {
      href: 'https://github.com/sharaffatima/Thesis',
      label: 'View the thesis repository on GitHub',
    },
  },
  {
    id: 'pharmacio',
    category: 'Backend development',
    title: 'Pharmacio — Pharmacy Management',
    description:
      'A pharmacy management system covering inventory, supplier offers, purchasing and point of sale, with Arabic and English support and an OCR workflow that extracts structured data from offer documents.',
    tags: ['Django', 'PostgreSQL', 'Celery', 'Flutter'],
    image: {
      src: img('Pharmacio Pharmacy Dashboard Showcase.png'), // adjust to your actual file name in public/projects/
      alt: 'Pharmacio pharmacy management application screens including dashboard and inventory',
      width: 1600,
      height: 1000,
    },
    link: {
      href: 'https://github.com/sharaffatima/Pharmacio',
      label: 'View Pharmacio on GitHub',
    },
  },
  {
    id: 'sharaf-vision',
    category: 'Full-stack development',
    title: 'Sharaf Vision — POS & Inventory',
    description:
      'An offline-first point-of-sale and inventory system for a luxury interior-decoration business, featuring local data storage and automatic synchronization.',
    tags: ['React', 'TypeScript', 'Django', 'IndexedDB'],
    image: {
      src: img('Sharaf Vision POS Showcase.png'),
      // Optional: srcSet: `${img('sharaf-vision-800.jpg')} 800w, ${img('Sharaf Vision POS Showcase.png')} 1600w`,
      alt: 'Sharaf Vision branding and application screens shown in a luxury interior-decoration showroom',
      width: 1600,
      height: 1000,
    },
    link: {
      href: 'https://github.com/sharaffatima/sharaf-vision',
      label: 'View Sharaf Vision on GitHub',
    },
  },
  {
    id: 'openlab',
    category: 'University group project',
    title: 'OpenLab — Learning Analytics',
    description:
      'Contributed to an existing educational platform by implementing and improving features related to open learning analytics, collaboration, and educational insights.',
    tags: ['React', 'Spring Boot', 'MongoDB', 'JWT'],
    image: {
      src: img('OpenLab Learning Analytics Dashboard.png'),
      alt: 'OpenLab learning analytics interface with data visualizations',
      width: 1600,
      height: 1000,
    },
    link: {
      href: 'https://github.com/sharaffatima/openlap-lab',
      label: 'View OpenLab on GitHub',
    },
  },
];