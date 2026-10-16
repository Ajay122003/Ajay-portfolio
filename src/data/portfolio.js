export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const education = [
  { years: '2021 - 2025', title: 'Adithya Institute of Technology', detail: 'B.E. in Electronics & Communication Engineering', result: 'CGPA: 7.25' },
  { years: '2020 - 2021', title: 'St Francis Higher Secondary School', detail: 'Higher Secondary Education', result: 'Percentage: 80%' },
  { years: '2018 - 2019', title: 'St Francis Higher Secondary School', detail: 'SSLC (10th Grade)', result: 'Percentage: 82%' },
]

export const internships = [
  { years: '2024', title: 'Python Full Stack Developer Intern', organization: 'CareerLadder Institute', detail: 'Built and maintained full-stack web applications with Python, Django, React, and MySQL, collaborating with senior developers on client projects.' },
  { years: 'Apr 2024', title: 'IoT Workshop Trainee', organization: 'Novitech Pvt. Limited', detail: 'Hands-on training in IoT hardware, cloud connectivity, and sensor data processing.' },
]

export const workExperience = {
  title: 'Full Stack Developer',
  company: 'SaaSTrail Venture Studio',
  period: 'Sep 2025 - Present',
  location: 'Coimbatore, India',
  points: [
    'Build full-stack applications with React, Django, and Django REST Framework, connecting responsive interfaces to REST APIs.',
    'Implement authentication, authorization, role-based access control, and CRM features with business logic and validation.',
    'Test APIs with Postman, manage environment variables, and collaborate through Git and GitHub.',
    'Design MySQL databases, build ORM-backed CRUD workflows, and integrate internal and third-party APIs.',
    'Develop MCP tools for UNAXL with FastAPI to support AI-assisted workflows in Claude Desktop.',
    'Build CRM dashboards for PromptXL with React and Next.js, including dynamic interfaces and real-time updates.',
  ],
  technologies: ['React', 'Next.js', 'Django', 'Django REST Framework', 'FastAPI', 'MySQL', 'Tailwind CSS', 'Postman', 'Git & GitHub', 'MCP', 'REST APIs'],
}

export const projects = [
  { title: 'LUVARA- Ecommerce Website', category: 'React · Django REST · PostgreSQL', image: '/image/Project6.png', description: 'A digital menu and order management system where customers can browse, place orders, and track meals.', href: 'https://github.com/Ajay122003/Fashion-luvara-client', tone: 'from-[#a4452d] to-[#d58a4d]' },
  { title: 'Smart Restaurant Ordering System', category: 'React · Django · MySQL', image: '/image/Project1.jpg', description: 'A digital menu and order management system where customers can browse, place orders, and track meals.', href: 'https://github.com/Ajay122003/Smart-Restaurant-Ordering-System', tone: 'from-[#a4452d] to-[#d58a4d]' },
  { title: 'Fashion E-commerce Platform', category: 'JavaScript · HTML · CSS', image: '/image/Project2.jpg', description: 'A responsive fashion storefront with a product catalogue, cart management, filters, and search.', href: null, tone: 'from-[#536e5d] to-[#97a477]' },
  { title: 'BloodLink: Blood Bank Finder', category: 'Python · Django REST · React', image: '/image/Project3.png', description: 'A location-based blood bank finder with blood-group filters, availability details, and contact information.', href: 'https://github.com/Ajay122003/BloodLink-Blood-Bank-Finder', tone: 'from-[#9e3d3c] to-[#d37b60]' },
  { title: 'Python OOP Programs', category: 'Python · OOP', image: '/image/Project4.png', description: 'A collection of object-oriented programming exercises covering classes, inheritance, polymorphism, and encapsulation.', href: 'https://github.com/Ajay122003/Python-OOPs-Programs', tone: 'from-[#4b6784] to-[#87a0ad]' },
  { title: 'Task Management System', category: 'Django · MySQL', image: '/image/Project5.png', description: 'A project and task tracker with authentication, deadlines, priorities, status tracking, and a dashboard.', href: 'https://github.com/Ajay122003/Task-Management-System', tone: 'from-[#4c7159] to-[#94a578]' },
]

export const skills = [
  { name: 'HTML5', level: 90, icon: 'Code2' },
  { name: 'CSS3', level: 85, icon: 'PanelsTopLeft' },
  { name: 'JavaScript', level: 80, icon: 'Braces' },
  { name: 'React', level: 95, icon: 'Atom' },
  { name: 'Tailwind CSS', level: 85, icon: 'Wind' },
  { name: 'Python', level: 98, icon: 'Terminal' },
  { name: 'Django', level: 95, icon: 'Server' },
  { name: 'FastAPI', level: 90, icon: 'Zap' },
  { name: 'Next.js', level: 85, icon: 'Layers3' },
  { name: 'Vue.js', level: 75, icon: 'Component' },
  { name: 'MySQL', level: 78, icon: 'Database' },
  { name: 'Git & GitHub', level: 90, icon: 'GitBranch' },
  { name: 'REST APIs', level: 85, icon: 'CloudCog' },
  { name: 'MCP', level: 85, icon: 'Workflow' },
]

export const certifications = [
  { date: 'May - Aug 2025', organization: 'CareerLadder Institute', title: 'Python Full Stack Course', detail: 'Training in Python, Django, React, and MySQL.', image: '/image/certificate1.jpg' },
  { date: 'Apr 2024', organization: 'Novitech Private Limited', title: 'Internet of Things', detail: 'IoT development with sensors, Arduino, and cloud integration.', image: '/image/certificate2.jpg' },
  { date: 'Jun 2024', organization: 'Rinex Technologies', title: 'IoT & Robotics', detail: 'Robotics programming, automation systems, and IoT protocols.', image: '/image/certificate3.jpg' },
  { date: 'Feb 2024', organization: 'Novitech Private Limited', title: 'Connecting Devices with Cloud', detail: 'Device connectivity, cloud infrastructure, and data streaming.', image: '/image/certificate4.jpg' },
  { date: 'Jul 2025', organization: 'Skyy Skill', title: 'Frontend Workshop', detail: 'Modern front-end development with HTML, CSS, and JavaScript.', image: '/image/certificate5.jpg' },
]

export const contactDetails = [
  { label: 'Location', value: 'Coimbatore, Tamil Nadu, India', href: null },
  { label: 'Phone', value: '+91 9342198948', href: 'tel:+919342198948' },
  { label: 'Email', value: 'ajayelango54@gmail.com', href: 'mailto:ajayelango54@gmail.com' },
]

export const socialLinks = {
  github: 'https://github.com/Ajay122003',
  linkedin: 'https://www.linkedin.com/in/ajay-e9342198948',
}

export const resumeUrl = '/image/AJAY%20E%20new%20resume.pdf'
