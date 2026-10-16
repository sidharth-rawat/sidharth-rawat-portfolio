export const profile = {
  name: 'Sidharth Rawat',
  role: 'Full-Stack Developer',
  // Plain, user-facing value prop — what he actually does.
  tagline:
    'I build and ship production systems — Node.js backends, React & React Native apps, and the cloud infrastructure that keeps them running.',
  location: 'India',
  email: 'sidharthrawat20@gmail.com',
  phone: '+91 7500129748',
  github: 'https://github.com/sidharth-rawat',
  linkedin: 'https://www.linkedin.com/in/sidharth-rawat20',
  resume: '/resume.pdf',
}

// The hero's memorable element: real, measurable impact.
export const metrics = [
  { value: '50%', label: 'cloud cost reduced' },
  { value: '10K+', label: 'daily orders served' },
  { value: '99.9%', label: 'production uptime' },
  { value: '3+ yrs', label: 'shipping full-stack' },
]

export const about = [
  'I’m a full-stack developer with 3+ years building production software end to end — from React and React Native front-ends to Node.js APIs, databases, and the AWS infrastructure underneath.',
  'My work tends to be measured in outcomes: cutting a BigQuery bill in half, taking a mobile backend to 10,000+ orders a day at 99.9% uptime, and shaving response times by a quarter. Lately I’ve been building AI/LLM-powered and real-time features, and tooling like MiniCloud — my own mini deployment platform.',
]

export type Job = {
  company: string
  role: string
  period: string
  location: string
  badge?: string
  points: string[]
}

export const experience: Job[] = [
  {
    company: 'Leher Sustainable Agri Pvt Ltd',
    role: 'Full-Stack Engineer',
    period: 'Jun 2026 — Present',
    location: 'Gurgaon',
    points: [
      'Cut BigQuery costs 50% ($3,000 → $1,500/mo) by redesigning query patterns and data partitioning across production infrastructure.',
      'Architected and shipped LLM-powered features in Node.js, enabling AI-driven automation that lifted user task-completion rates.',
      'Built a real-time voice-AI experience by integrating large language models with the Pipecat framework for natural conversation.',
    ],
  },
  {
    company: 'Gatoes',
    role: 'Software Development Engineer I',
    period: 'Jun 2024 — May 2026',
    location: 'Remote',
    badge: 'Forbes 30 Under 30 Asia 2025',
    points: [
      'Built a cross-platform app in React Native (Expo) on a Node.js REST backend handling 10,000+ daily orders at 99.9% uptime.',
      'Optimized MongoDB and MySQL queries, cutting average response time 25% and improving order-processing throughput.',
      'Shipped real-time order tracking with Socket.IO and push notifications, reducing support tickets 20%.',
      'Designed a CI/CD pipeline with Docker, NGINX, and AWS (EC2, S3, RDS), taking deploys from hours to minutes.',
      'Mentored 3 junior developers through code reviews and pairing, setting coding standards across the team.',
    ],
  },
  {
    company: 'Agua Wireless Systems Pvt Ltd',
    role: 'Software Engineer',
    period: 'Aug 2023 — May 2024',
    location: 'Bangalore',
    points: [
      'Built an Employee OT Management System (React.js, Material-UI, Node.js, MongoDB) automating overtime for 500+ employees.',
      'Led the Asset Management backend with RESTful APIs and role-based access control, improving asset-tracking efficiency 30%.',
      'Engineered a nested location hierarchy and optimized the schema for a 25% gain in query performance and accuracy.',
    ],
  },
]

export type Project = {
  name: string
  blurb: string
  stack: string[]
  year: string
  featured?: boolean
  links?: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    name: 'MiniCloud',
    blurb:
      'A self-built mini Heroku/Railway: connect a GitHub repo, and a push triggers an async pipeline that clones the exact commit and deploys it into a health-checked Docker container — with retries, timeouts, rollback, HMAC-signed webhooks, and Prometheus metrics.',
    stack: ['Node.js', 'TypeScript', 'Express', 'BullMQ', 'Redis', 'PostgreSQL', 'Prisma', 'Docker'],
    year: '2026',
    featured: true,
    links: [
      { label: 'Live demo', url: 'https://app.3.110.222.63.sslip.io/' },
      { label: 'Code (backend)', url: 'https://github.com/sidharth-rawat/minicloud-backend' },
      { label: 'Code (frontend)', url: 'https://github.com/sidharth-rawat/minicloud-frontend' },
      {
        label: 'System design',
        url: 'https://github.com/sidharth-rawat/minicloud-backend/blob/main/SYSTEM_DESIGN.md',
      },
    ],
  },
  {
    name: 'askdb',
    blurb:
      'Talk to your database in plain English. A self-hosted AI assistant that turns natural-language questions into safe, read-only SQL, runs them against a connected PostgreSQL database, and returns the results. The AI is constrained to SELECT-only queries, and stored connection credentials are encrypted at rest.',
    stack: ['Next.js', 'TypeScript', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'Google Gemini', 'Docker'],
    year: '2026',
    featured: true,
    links: [{ label: 'Code', url: 'https://github.com/sidharth-rawat/askdb' }],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3', 'Bash'] },
  {
    group: 'Frontend',
    items: ['React.js', 'React Native', 'Next.js', 'Redux', 'Tailwind CSS', 'Material UI', 'Vite', 'Expo'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Socket.IO', 'Microservices', 'JWT', 'RBAC'],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'BigQuery', 'Sequelize', 'Mongoose'],
  },
  { group: 'AI & Integrations', items: ['OpenAI API', 'LLM Integrations', 'Voice AI (Pipecat)'] },
  {
    group: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, RDS, Lambda, ECS, ECR)', 'Docker', 'NGINX', 'GitHub Actions', 'CI/CD'],
  },
  { group: 'Monitoring & Tools', items: ['Grafana', 'Prometheus', 'PM2', 'Git', 'Postman'] },
]

export const certification = {
  name: 'AI Fluent Tech Professional',
  issuer: 'Calyptus',
  issued: 'Mar 2026',
  credentialId: '3759',
}

export const education = [
  { degree: 'B.Tech, Computer Science Engineering', school: 'Sanskriti University, India', period: 'Pursuing' },
  {
    degree: 'Diploma, Computer Science Engineering',
    school: 'UBTER, Uttarakhand, India',
    period: 'Jul 2022',
  },
]
