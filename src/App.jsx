import { useState, useEffect, useRef, useCallback } from 'react'

/* ================================================================
   PORTFOLIO DATA
================================================================ */
const DATA = {
  personal: {
    name: 'Prakhar Verma',
    initials: 'PV',
    role: 'AI/ML Engineer & Full Stack Developer',
    tagline: 'Building intelligent solutions with code & creativity.',
    bio: "I'm an AI/ML Engineer and Full Stack Developer passionate about building scalable, efficient, and impactful solutions. I love turning complex problems into simple, beautiful, and intuitive designs — from intelligent LLM-powered platforms to high-performance full-stack applications.",
    email: 'pra9044rma@rediffmail.com',
    phone: '+91 9555070257',
    location: 'Jalandhar, Punjab, India',
    availability: 'Open to Work',
    github: 'https://github.com/prakhar9044-code',
    linkedin: 'https://www.linkedin.com/in/prakharai1212',
    portfolio: 'https://resume-prakharcodess.vercel.app',
    resume: '/Professional B.Tech Resume LaTeX.pdf',
  },
  traits: [
    { icon: 'fa-lightbulb', title: 'Problem Solver', desc: 'I love solving real-world problems with efficient and scalable solutions.' },
    { icon: 'fa-bolt', title: 'Quick Learner', desc: 'Always exploring new technologies and improving my skill set.' },
    { icon: 'fa-users', title: 'Team Player', desc: 'I enjoy collaborating and building great products with amazing teams.' },
    { icon: 'fa-gem', title: 'Detail Oriented', desc: 'Focus on writing clean code and delivering quality in every detail.' },
  ],
  stats: [
    { val: '5+', label: 'Projects Shipped' },
    { val: '15+', label: 'Certifications' },
    { val: '10+', label: 'Technologies' },
    { val: '3+', label: 'Hackathons' },
  ],
  experience: [
    {
      role: 'Event Coordinator',
      company: 'Coding Blocks',
      type: 'Part-time',
      period: 'Feb 2026 – Present',
      location: 'Jalandhar, Punjab',
      desc: 'Orchestrated end-to-end logistics for coding workshops and technical seminars. Managed cross-functional communication across 3+ simultaneous events, improving student participation throughput.',
      tags: ['Event Management', 'Technical Ops', 'Leadership'],
      current: true,
    },
    {
      role: 'Technical Lead',
      company: 'LPU School of CS Engineering',
      type: 'Part-time',
      period: 'Feb 2026 – Apr 2026',
      location: 'Punjab, India',
      desc: 'Led technical execution of departmental events including Computing & AI Innovation Expo \'26 and InnoTek \'26. Coordinated a cross-functional team of 10+ members across 3-month tenure.',
      tags: ['Team Leadership', 'Event Planning', 'Communication'],
      current: false,
    },
    {
      role: 'Community Member',
      company: 'Google Developer Groups (GDG) Jalandhar',
      type: 'Volunteer',
      period: 'Dec 2025 – Present',
      location: 'Jalandhar, Punjab',
      desc: 'Active participant in Google DevFest 2025, Googlify 2.0, and Coursera Day. Engaged with industry content on cloud, AI, and developer tooling directly from Google engineers.',
      tags: ['Google Cloud', 'AI', 'Community'],
      current: true,
    },
    {
      role: 'Student',
      company: 'Kalrashukla Classes',
      type: 'Full-time',
      period: 'Apr 2023 – Jan 2025',
      location: 'Kanpur Nagar, UP',
      desc: 'Underwent intensive academic training with focus on building a strong foundation in core science and mathematics. Achieved 93.4% in board examinations.',
      tags: ['Science', 'Mathematics', 'Problem Solving'],
      current: false,
    },
  ],
  education: [
    { degree: 'B.Tech CSE (AI & ML)', school: 'Lovely Professional University', period: '2025 – 2029', status: 'current', grade: 'Active' },
    { degree: 'Senior Secondary (12th)', school: 'The Jain International School', period: 'Graduated 2025', status: 'done', grade: '' },
    { degree: 'Higher Secondary (10th)', school: 'Dr. Virendra Swarup Public School', period: 'Graduated 2023', status: 'done', grade: '93.4%' },
  ],
  projects: [
    {
      id: 'nexus',
      name: 'Nexus AI',
      subtitle: 'AI Career Strategist',
      emoji: '🧠',
      desc: 'An LLM-powered SaaS platform that generates hyper-personalized career roadmaps by combining pattern recognition across market trends with user skill-gap analysis.',
      longDesc: 'Architected an intelligent career strategy platform leveraging large language models and RAG pipelines to produce actionable, market-aligned career growth plans. Engineered a high-performance frontend with sub-200ms interactive response.',
      tech: ['Python', 'LLMs', 'RAG', 'React.js', 'Node.js'],
      live: '',
      github: 'https://github.com/prakhar9044-code',
      period: 'Jan 2026 – Present',
      category: 'AI / SaaS',
      featured: true,
      problem: 'Career seekers lack personalized, data-driven roadmaps. Generic advice leads to misaligned career paths and missed opportunities.',
      solution: 'Built a RAG-powered LLM platform that ingests market trends, user skills, and job data to produce hyper-personalized career roadmaps.',
      impact: ['Personalised roadmaps for diverse career profiles', 'Real-time market trend integration', 'Sub-200ms response architecture'],
      accent: '#C9A84C',
    },
    {
      id: 'civisync',
      name: 'CiviSync',
      subtitle: 'Smart Civic Issue Platform',
      emoji: '🏙️',
      desc: 'Offline-first SaaS platform connecting citizens, municipal authorities, NGOs, and contractors for civic issue resolution with geospatial mapping.',
      longDesc: 'Built an offline-first SaaS serving 4 stakeholder roles with RBAC, real-time geospatial mapping via Leaflet.js, voice-to-text civic issue reporting, and gamified community funding.',
      tech: ['React.js', 'Supabase', 'PostgreSQL', 'Leaflet.js'],
      live: 'https://civisync-rho.vercel.app/',
      github: 'https://github.com/prakhar9044-code',
      period: 'Feb 2026 – Apr 2026',
      category: 'Full Stack / SaaS',
      featured: false,
      problem: 'Citizens have no efficient channel to report civic issues, causing delays and lack of accountability.',
      solution: 'Offline-first platform with RBAC, geospatial mapping, and transparent budget tracking that compresses reporting cycles from days to minutes.',
      impact: ['4 stakeholder roles with RBAC', 'Real-time geospatial mapping', 'Voice-to-text reporting'],
      accent: '#4ade80',
    },
    {
      id: 'spendex',
      name: 'Spendex AI',
      subtitle: 'Intelligent Finance Dashboard',
      emoji: '💸',
      desc: 'Frontend-driven SaaS dashboard for corporate payroll, treasury, and expense tracking with AI forecasting and browser-based PDF reporting.',
      longDesc: 'Engineered a frontend-only SaaS for corporate finance eliminating backend dependency while maintaining enterprise-grade fidelity. Integrated real-time AI forecasting, OCR receipt scanning, and automated PDF reports.',
      tech: ['React.js', 'Chart.js', 'AI Forecasting', 'Node.js'],
      live: 'https://spendex-ai-uyxw.vercel.app/',
      github: 'https://github.com/prakhar9044-code',
      period: 'Feb 2026',
      category: 'AI / Finance SaaS',
      featured: false,
      problem: 'Corporate expense management tools are bloated, slow, and require complex backends even for simple dashboards.',
      solution: 'Pure frontend SaaS with real-time AI forecasting, Kanban workflows, RBAC, OCR receipt scanning, and browser-based PDF reporting.',
      impact: ['3-tier RBAC system', 'Browser-based PDF reporting', 'Real-time AI cost forecasting'],
      accent: '#60a5fa',
    },
    {
      id: 'peopleconnect',
      name: 'PeopleConnect',
      subtitle: 'Social Welfare Ecosystem',
      emoji: '🤝',
      desc: 'Digital ecosystem bridging social welfare and mental wellness by enabling hyper-local resource discovery for food, shelter, and medical aid.',
      longDesc: 'Designed a hyper-local resource discovery platform with deep work zones, self-assessment tools, and mental wellness features serving underserved populations with zero-friction onboarding.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Maps API'],
      live: 'https://peopleconnect-rho.vercel.app/',
      github: 'https://github.com/prakhar9044-code',
      period: 'Jan 2026',
      category: 'Web App',
      featured: false,
      accent: '#a78bfa',
    },
    {
      id: 'edurev',
      name: 'EDU REV',
      subtitle: 'LPU Platform Prototype',
      emoji: '📚',
      desc: 'Educational prototype for Lovely Professional University to streamline resource sharing, course management, and peer-to-peer networking.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
      live: 'https://edu-rev-website-prototype.vercel.app/',
      github: 'https://github.com/prakhar9044-code',
      period: 'Oct 2025',
      category: 'Education / UI',
      featured: false,
      accent: '#f59e0b',
    },
  ],
  skills: {
    Languages: [
      { name: 'Python',     level: 95, icon: 'fab fa-python' },
      { name: 'JavaScript', level: 88, icon: 'fab fa-js' },
      { name: 'Java',       level: 75, icon: 'fab fa-java' },
      { name: 'C++',        level: 84, icon: 'fas fa-code' },
      { name: 'HTML5',      level: 92, icon: 'fab fa-html5' },
      { name: 'CSS3',       level: 90, icon: 'fab fa-css3-alt' },
    ],
    Frontend: [
      { name: 'React.js',   level: 84, icon: 'fab fa-react' },
      { name: 'Tailwind',   level: 88, icon: 'fas fa-wind' },
      { name: 'Bootstrap',  level: 85, icon: 'fab fa-bootstrap' },
      { name: 'Chart.js',   level: 80, icon: 'fas fa-chart-line' },
      { name: 'Leaflet.js', level: 78, icon: 'fas fa-map' },
    ],
    Backend: [
      { name: 'Node.js',    level: 80, icon: 'fab fa-node-js' },
      { name: 'Express.js', level: 78, icon: 'fas fa-server' },
      { name: 'MongoDB',    level: 80, icon: 'fas fa-database' },
      { name: 'PostgreSQL', level: 82, icon: 'fas fa-database' },
      { name: 'Supabase',   level: 78, icon: 'fas fa-cloud' },
      { name: 'REST APIs',  level: 86, icon: 'fas fa-plug' },
    ],
    'AI / ML': [
      { name: 'Generative AI', level: 90, icon: 'fas fa-brain' },
      { name: 'LLMs & RAG',    level: 92, icon: 'fas fa-robot' },
      { name: 'ML / DL',       level: 88, icon: 'fas fa-network-wired' },
      { name: 'Prompt Eng.',   level: 92, icon: 'fas fa-terminal' },
      { name: 'Data Science',  level: 85, icon: 'fas fa-chart-bar' },
    ],
    'Tools & Cyber': [
      { name: 'Git / GitHub',  level: 88, icon: 'fab fa-github' },
      { name: 'Cybersecurity', level: 88, icon: 'fas fa-shield-halved' },
      { name: 'Kali Linux',    level: 85, icon: 'fab fa-linux' },
      { name: 'Figma',         level: 80, icon: 'fab fa-figma' },
      { name: 'Arduino',       level: 82, icon: 'fas fa-microchip' },
      { name: 'AutoCAD',       level: 70, icon: 'fas fa-drafting-compass' },
    ],
  },
  certifications: [
    { name: 'Data Science Professional',   issuer: 'Oracle',      color: '#ef4444', icon: 'fas fa-database',    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=A04A17CEE858F4A8CFD5CB45ABBC63AABDBA1CED20C1D2309DFD5432D6455385' },
    { name: 'Cybersecurity Fundamentals',  issuer: 'IBM',         color: '#3b82f6', icon: 'fas fa-shield-halved',link: 'https://www.credly.com/badges/cd49251b-f877-44ae-8363-c688a4d7fc0a/public_url' },
    { name: 'Generative AI',               issuer: 'Google',      color: '#4285F4', icon: 'fab fa-google',       link: 'https://www.coursera.org/account/accomplishments/verify/4N6N6VEY9XY5' },
    { name: 'Artificial Intelligence',     issuer: 'Amazon AWS',  color: '#FF9900', icon: 'fab fa-aws',          link: 'https://www.credly.com/badges/03de804d-b0b2-49a8-bd77-ca98772f8097' },
    { name: 'AI Upskilling',               issuer: 'Qualcomm',    color: '#C9A84C', icon: 'fas fa-microchip',    link: '#' },
    { name: 'Technology Job Simulation',   issuer: 'Deloitte',    color: '#6366f1', icon: 'fas fa-briefcase',    link: '#' },
    { name: 'Full Stack React',            issuer: 'Infosys',     color: '#22c55e', icon: 'fab fa-react',        link: '#' },
    { name: 'Machine Learning',            issuer: 'SoloLearn',   color: '#22c55e', icon: 'fas fa-robot',        link: 'https://www.sololearn.com/en/certificates/CC-CU61JZ8H' },
    { name: 'Intro to LLMs',              issuer: 'SoloLearn',   color: '#00d4ff', icon: 'fas fa-comment-dots', link: 'https://www.sololearn.com/en/certificates/CC-WC1ZLCOY' },
    { name: 'Prompt Engineering',          issuer: 'SoloLearn',   color: '#f59e0b', icon: 'fas fa-terminal',     link: 'https://www.sololearn.com/en/certificates/CC-VBGFKZIQ' },
    { name: 'Python Basics',               issuer: 'SoloLearn',   color: '#facc15', icon: 'fab fa-python',       link: 'https://www.sololearn.com/en/certificates/CC-WITL9IVS' },
    { name: 'Python Intermediate',         issuer: 'SoloLearn',   color: '#eab308', icon: 'fab fa-python',       link: 'https://www.sololearn.com/en/certificates/CC-9EMDNQJB' },
    { name: 'HTML Programming',            issuer: 'SoloLearn',   color: '#f97316', icon: 'fab fa-html5',        link: 'https://www.sololearn.com/en/certificates/CC-LQSAGVIJ' },
    { name: 'CSS Fundamentals',            issuer: 'SoloLearn',   color: '#60a5fa', icon: 'fab fa-css3-alt',     link: 'https://www.sololearn.com/en/certificates/CC-3MQ5JO6Z' },
    { name: 'Write with AI',               issuer: 'SoloLearn',   color: '#ec4899', icon: 'fas fa-pen-nib',      link: 'https://www.sololearn.com/en/certificates/CC-FJ5GTNAM' },
  ],
  achievements: [
    { icon: 'fas fa-trophy', color: '#C9A84C', title: 'Hackathon Participant', desc: 'Graph-E-Thon 3.0 (Unstop), COD-A-FESTX 3.0, WEB-A-THON 2.0, COD-A-FEST 3.0 — 5 national-level competitions.' },
    { icon: 'fas fa-medal',  color: '#60a5fa', title: 'EDUREV Talent Hunt 2025', desc: 'Participated in EDUREV Talent Hunt 2025, demonstrating strong technical and problem-solving skills.' },
    { icon: 'fas fa-star',   color: '#4ade80', title: 'Technical Lead at LPU', desc: 'Coordinated Computing & AI Innovation Expo \'26 and InnoTek \'26 — events attended by 500+ participants.' },
    { icon: 'fas fa-graduation-cap', color: '#a78bfa', title: '93.4% in Board Exams', desc: 'Achieved 93.4% aggregate in 10th board examinations while serving as House Captain and Class Representative.' },
  ],
  testimonials: [
    {
      quote: 'Prakhar is an incredible problem solver. He built a flawless dashboard that entirely changed our workflow. His attention to detail and optimization is top-tier.',
      name: 'Marcus Johnson', role: 'Tech Lead, TechNova Inc', initials: 'MJ',
    },
    {
      quote: 'Exceptional AI integration skills. Seamlessly bridged our frontend with complex LLMs without breaking a sweat. It felt like watching an artist code.',
      name: 'Sarah Torres', role: 'Project Manager, AI Solutions', initials: 'ST',
    },
    {
      quote: 'Top-tier cybersecurity knowledge paired with clean, beautiful UI design — a rare and highly valuable combination. Delivered ahead of schedule.',
      name: 'David Kim', role: 'System Admin, SecureNet', initials: 'DK',
    },
  ],
  profiles: [
    { name: 'GitHub',        icon: 'fab fa-github',        color: '#ffffff', link: 'https://github.com/prakhar9044-code' },
    { name: 'LinkedIn',      icon: 'fab fa-linkedin',      color: '#0077b5', link: 'https://www.linkedin.com/in/prakharai1212' },
    { name: 'HackerRank',    icon: 'fas fa-code',          color: '#00ea64', link: 'https://www.hackerrank.com/profile/prakhar9044verma' },
    { name: 'LeetCode',      icon: 'fas fa-puzzle-piece',  color: '#ffa116', link: 'https://leetcode.com/u/jxLXeIbuH1/' },
    { name: 'StackOverflow', icon: 'fab fa-stack-overflow',color: '#f48024', link: 'https://stackoverflow.com/users/31419366/prakhar-verma' },
    { name: 'GeeksForGeeks', icon: 'fas fa-book',          color: '#2f8d46', link: 'https://www.geeksforgeeks.org/user/prakhar9044verma/' },
    { name: 'HackerEarth',  icon: 'fas fa-terminal',      color: '#9147ff', link: 'https://www.hackerearth.com/@prakhar9044-code/' },
    { name: 'DataCamp',      icon: 'fas fa-graduation-cap',color: '#C9A84C', link: 'https://www.datacamp.com/portfolio/prakhar9044verma' },
  ],
  techStack: ['Python', 'React', 'TensorFlow', 'Node.js', 'AWS', 'Git', 'Figma', 'Docker'],
}

/* ================================================================
   CUSTOM HOOK — SCROLL REVEAL
================================================================ */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('up'); observer.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ================================================================
   PRELOADER — Cinematic Split Reveal
================================================================ */
function Preloader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [status, setStatus] = useState('Initializing…')
  const [splitting, setSplitting] = useState(false)
  const steps = ['Loading assets…', 'Compiling interface…', 'Calibrating animations…', 'Welcome ✦']

  useEffect(() => {
    let p = 0
    const interval = setInterval(() => {
      p += Math.random() * 14 + 4
      if (p >= 100) {
        clearInterval(interval)
        setPct(100)
        setStatus('Welcome ✦')
        setTimeout(() => setSplitting(true), 500)
        setTimeout(onDone, 1350)
      } else {
        setPct(Math.floor(p))
        setStatus(steps[Math.min(Math.floor(p / 26), steps.length - 1)])
      }
    }, 90)
    return () => clearInterval(interval)
  }, [])

  const panelStyle = (pos) => ({
    position:'absolute', left:0, right:0, height:'50%',
    background:'#0B0B0F', zIndex:2,
    ...(pos === 'top' ? {top:0} : {bottom:0}),
    transition: splitting ? 'transform 0.85s cubic-bezier(0.76,0,0.24,1)' : 'none',
    transform: splitting ? (pos==='top' ? 'translateY(-100%)' : 'translateY(100%)') : 'translateY(0)',
  })

  return (
    <div style={{position:'fixed',inset:0,zIndex:999999,background:'#0B0B0F',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
      <div style={panelStyle('top')} />
      <div style={panelStyle('bottom')} />

      {/* Ambient orbs */}
      <div style={{position:'absolute',top:'-10%',left:'-10%',width:'500px',height:'500px',borderRadius:'50%',background:'rgba(201,168,76,0.04)',filter:'blur(80px)',pointerEvents:'none'}} />
      <div style={{position:'absolute',bottom:'-10%',right:'-10%',width:'400px',height:'400px',borderRadius:'50%',background:'rgba(201,168,76,0.03)',filter:'blur(80px)',pointerEvents:'none'}} />

      {/* Core content */}
      <div style={{position:'relative',zIndex:3,textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>
        {/* PV badge */}
        <div style={{width:'64px',height:'64px',borderRadius:'14px',background:'#C9A84C',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1.5rem',boxShadow:'0 0 40px rgba(201,168,76,0.25)',animation:'plLogoIn 0.6s 0.2s cubic-bezier(0.23,1,0.32,1) both'}}>
          <span style={{fontFamily:'"DM Serif Display",Georgia,serif',fontSize:'1.6rem',fontWeight:'400',color:'#0B0B0F',lineHeight:1}}>PV</span>
        </div>
        {/* Name */}
        <div style={{fontFamily:'"DM Serif Display",Georgia,serif',fontSize:'clamp(1.6rem,4vw,2.4rem)',fontWeight:'400',letterSpacing:'-0.02em',color:'#F4F2FF',marginBottom:'0.3rem',animation:'plFadeUp 0.7s 0.4s cubic-bezier(0.23,1,0.32,1) both'}}>
          Prakhar <span style={{color:'#C9A84C',fontStyle:'italic'}}>Verma</span>
        </div>
        {/* Role */}
        <div style={{fontFamily:'"JetBrains Mono",monospace',fontSize:'0.62rem',letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(107,104,128,0.8)',marginBottom:'2.5rem',animation:'plFadeUp 0.6s 0.55s cubic-bezier(0.23,1,0.32,1) both'}}>
          AI/ML Engineer · Full Stack Developer
        </div>
        {/* Progress */}
        <div style={{width:'220px',animation:'plFadeUp 0.5s 0.7s cubic-bezier(0.23,1,0.32,1) both'}}>
          <div style={{height:'1px',background:'rgba(255,255,255,0.07)',borderRadius:'1px',overflow:'hidden',marginBottom:'0.75rem'}}>
            <div style={{height:'100%',width:pct+'%',background:'linear-gradient(90deg,#C9A84C,#E2C47A)',borderRadius:'1px',transition:'width 0.15s ease'}} />
          </div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span style={{fontFamily:'"JetBrains Mono",monospace',fontSize:'0.6rem',color:'#C9A84C',letterSpacing:'0.08em'}}>{String(pct).padStart(3,'0')}</span>
            <span style={{fontFamily:'"JetBrains Mono",monospace',fontSize:'0.58rem',color:'rgba(107,104,128,0.6)',letterSpacing:'0.1em',textTransform:'uppercase'}}>{status}</span>
          </div>
        </div>
      </div>
      <style>{'@keyframes plLogoIn{from{opacity:0;transform:scale(0.7) rotate(-8deg)}to{opacity:1;transform:scale(1) rotate(0)}}@keyframes plFadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}'}</style>
    </div>
  )
}

/* ================================================================
   CURSOR
================================================================ */
function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  let rx = -100, ry = -100

  useEffect(() => {
    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return
    let mx = -100, my = -100

    const move = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.transform = `translate(${mx}px,${my}px)`
    }
    window.addEventListener('mousemove', move)

    let rx = mx, ry = my
    const loop = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      ring.style.transform = `translate(${rx}px,${ry}px)`
      requestAnimationFrame(loop)
    }
    loop()

    const addHover = () => document.body.classList.add('hovering')
    const rmHover  = () => document.body.classList.remove('hovering')
    document.querySelectorAll('a, button, [role=button], input, textarea, .card, .badge').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', rmHover)
    })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  )
}

/* ================================================================
   NAVBAR
================================================================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = ['home','about','experience','projects','skills','achievements','contact']
      let cur = 'home'
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home','About','Experience','Projects','Skills','Contact']
  const scrollTo = (id) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  return (
    <nav style={{
      position:'fixed',top:0,left:0,right:0,zIndex:50,
      transition:'all 0.3s',
      background: scrolled ? 'rgba(11,11,15,0.96)' : 'rgba(11,11,15,0.7)',
      backdropFilter:'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
    }}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem',height:'68px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>

        {/* ── LOGO — matches reference exactly ── */}
        <button onClick={() => scrollTo('home')}
          style={{display:'flex',alignItems:'center',gap:'0.6rem',background:'none',border:'none',padding:0}}>
          {/*
            Logo: dark square badge with gold border + gold "PV" text — matches uploaded screenshot exactly.
            Small golden dot sits at top-left corner of the badge.
          */}
          <div style={{
            position:'relative',
            width:'34px',height:'34px',
            borderRadius:'6px',
            background:'#131318',
            border:'1.5px solid rgba(201,168,76,0.55)',
            display:'flex',alignItems:'center',justifyContent:'center',
            flexShrink:0,
            boxShadow:'0 2px 8px rgba(0,0,0,0.4)',
          }}>
            {/* Gold dot — top-left */}
            <span style={{
              position:'absolute',top:'4px',left:'4px',
              width:'5px',height:'5px',borderRadius:'50%',
              background:'#C9A84C',
              boxShadow:'0 0 4px rgba(201,168,76,0.6)',
            }} />
            {/* PV text — centered in badge */}
            <span style={{
              fontFamily:'"Inter","DM Sans",sans-serif',
              fontSize:'0.68rem',fontWeight:'800',
              color:'#C9A84C',lineHeight:1,
              letterSpacing:'0.05em',
              marginTop:'2px', /* slight visual centering offset */
            }}>PV</span>
          </div>
          {/* PRAKHAR VERMA — uppercase tracking, bright white */}
          <span style={{
            fontFamily:'"Inter","DM Sans",sans-serif',
            fontWeight:'700',
            fontSize:'0.82rem',
            letterSpacing:'0.14em',
            textTransform:'uppercase',
            color:'#F4F2FF',
            whiteSpace:'nowrap',
          }}>
            PRAKHAR VERMA
          </span>
        </button>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden md:flex" style={{alignItems:'center',gap:'0.15rem'}}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{
                fontFamily:'"Inter",sans-serif',
                fontSize:'0.8rem',fontWeight:'500',
                padding:'0.4rem 0.75rem',borderRadius:'7px',
                background:'none',border:'none',
                color: active === l.toLowerCase() ? '#C9A84C' : 'rgba(107,104,128,0.9)',
                borderBottom: active === l.toLowerCase() ? '2px solid #C9A84C' : '2px solid transparent',
                transition:'color 0.2s,border-color 0.2s',
                cursor:'none',
              }}>
              {l}
            </button>
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
          <a href={DATA.personal.resume} download
            style={{
              display:'inline-flex',alignItems:'center',gap:'0.4rem',
              padding:'0.55rem 1.15rem',borderRadius:'8px',
              background:'#C9A84C',color:'#0B0B0F',
              fontFamily:'"Inter",sans-serif',fontSize:'0.78rem',fontWeight:'700',
              textDecoration:'none',border:'none',whiteSpace:'nowrap',
              boxShadow:'0 2px 16px rgba(201,168,76,0.25)',
              transition:'background 0.2s,transform 0.2s',
              letterSpacing:'0.01em',
            }}
            className="hidden sm:inline-flex"
            onMouseEnter={e=>{e.target.style.background='#E2C47A';e.target.style.transform='translateY(-1px)'}}
            onMouseLeave={e=>{e.target.style.background='#C9A84C';e.target.style.transform='translateY(0)'}}>
            <i className="fas fa-file-arrow-down" style={{fontSize:'0.7rem'}} />
            Download Resume
          </a>
          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{width:'38px',height:'38px',borderRadius:'9px',border:'1px solid rgba(255,255,255,0.1)',background:'none',color:'rgba(244,242,255,0.7)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} style={{fontSize:'0.85rem'}} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{background:'#141418',borderTop:'1px solid rgba(255,255,255,0.06)',padding:'1rem 1.5rem',display:'flex',flexDirection:'column',gap:'0.25rem'}}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{fontFamily:'"Inter",sans-serif',fontSize:'0.85rem',fontWeight:'500',padding:'0.65rem 0.5rem',textAlign:'left',background:'none',border:'none',color:active===l.toLowerCase()?'#C9A84C':'rgba(107,104,128,0.9)',borderRadius:'8px',cursor:'none'}}>
              {l}
            </button>
          ))}
          <a href={DATA.personal.resume} download
            style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.4rem',padding:'0.65rem',borderRadius:'8px',background:'#C9A84C',color:'#0B0B0F',fontWeight:'700',fontSize:'0.82rem',textDecoration:'none',marginTop:'0.5rem'}}>
            <i className="fas fa-file-arrow-down" style={{fontSize:'0.7rem'}} /> Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}

/* ================================================================
   HERO SECTION — Premium Cinematic
================================================================ */
function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  const techRow = [
    { label:'Python',     icon:'fab fa-python' },
    { label:'TensorFlow', icon:'fas fa-brain'    },
    { label:'React',      icon:'fab fa-react'    },
    { label:'Node.js',    icon:'fab fa-node-js'  },
    { label:'AWS',        icon:'fab fa-aws'      },
  ]

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })

  return (
    <section
      id="home"
      style={{
        minHeight:'100vh',
        display:'flex', alignItems:'center',
        position:'relative', overflow:'hidden',
        paddingTop:'68px',
        background:'#0B0B0F',
      }}>

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes hFadeUp {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes hFloat {
          0%,100% { transform:translateY(0px)   rotate(-0.4deg); }
          50%      { transform:translateY(-14px) rotate(0.4deg);  }
        }
        @keyframes hGlowPulse {
          0%,100% { opacity:.55; transform:scale(1);    }
          50%      { opacity:.85; transform:scale(1.06); }
        }
        @keyframes hArcDraw {
          from { stroke-dashoffset:1600; opacity:0; }
          to   { stroke-dashoffset:0;    opacity:1; }
        }
        @keyframes hBtnIn {
          from { opacity:0; transform:scale(0.88) translateY(12px); }
          to   { opacity:1; transform:scale(1)    translateY(0);    }
        }
        @keyframes hPillIn {
          from { opacity:0; transform:translateX(-10px); }
          to   { opacity:1; transform:translateX(0);     }
        }
        @keyframes hCardPop {
          0%   { opacity:0; transform:scale(0.8) translateY(10px); }
          70%  { transform:scale(1.04) translateY(-2px); }
          100% { opacity:1; transform:scale(1)   translateY(0);    }
        }
        @keyframes hBgDrift {
          0%,100% { background-position: 0% 50%;   }
          50%      { background-position: 100% 50%; }
        }
        @keyframes hBounce {
          0%,100% { transform:translateY(0);  }
          50%      { transform:translateY(5px); }
        }
        @keyframes hDotPulse {
          0%,100% { box-shadow:0 0 0 0   rgba(74,222,128,.45); }
          60%      { box-shadow:0 0 0 7px rgba(74,222,128,0);   }
        }
        @media(max-width:1024px){
          .h-grid { grid-template-columns:1fr !important; }
          .h-right { display:none !important; }
        }
      `}</style>

      {/* ── ANIMATED BACKGROUND ── */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none', zIndex:0,
        background:'linear-gradient(135deg,#0B0B0F 0%,#0E0C14 40%,#0B0B0F 100%)',
        backgroundSize:'200% 200%',
        animation:'hBgDrift 14s ease infinite',
      }} />

      {/* ── LEFT ambient glow ── */}
      <div style={{
        position:'absolute', left:'-8%', top:'30%',
        width:'420px', height:'420px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(201,168,76,0.055) 0%, transparent 70%)',
        filter:'blur(60px)', pointerEvents:'none', zIndex:1,
      }} />

      {/* ── RIGHT cinematic gold bloom ── */}
      <div style={{
        position:'absolute', right:'-4%', bottom:'-5%',
        width:'70vw', height:'100vh',
        background:'radial-gradient(ellipse 72% 85% at 78% 62%, rgba(201,168,76,0.16) 0%, rgba(201,168,76,0.055) 42%, transparent 75%)',
        pointerEvents:'none', zIndex:1,
        animation:'hGlowPulse 6s ease-in-out infinite',
      }} />

      {/* ── Hairline top accent ── */}
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:'1px',
        background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.18),transparent)',
        zIndex:2,
      }} />

      {/* ════ MAIN GRID ════ */}
      <div className="h-grid" style={{
        maxWidth:'1280px', margin:'0 auto', padding:'0 2rem',
        width:'100%',
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        gap:'3rem',
        alignItems:'center',
        position:'relative', zIndex:3,
        minHeight:'calc(100vh - 68px)',
      }}>

        {/* ══ LEFT — TEXT ══ */}
        <div style={{
          display:'flex', flexDirection:'column', gap:'1.25rem',
          paddingTop:'2rem', paddingBottom:'3rem',
        }}>

          {/* Availability badge */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'0.55rem',
            width:'fit-content',
            padding:'0.36rem 0.85rem',
            borderRadius:'99px',
            border:'1px solid rgba(74,222,128,0.28)',
            background:'rgba(74,222,128,0.06)',
            opacity: mounted ? 1 : 0,
            animation: mounted ? 'hFadeUp 0.55s 0.05s cubic-bezier(0.23,1,0.32,1) both' : 'none',
          }}>
            <span style={{
              width:'7px', height:'7px', borderRadius:'50%',
              background:'#4ade80',
              animation:'hDotPulse 2s ease-in-out infinite',
              flexShrink:0,
            }} />
            <span style={{
              fontFamily:'"JetBrains Mono",monospace',
              fontSize:'0.62rem', letterSpacing:'0.14em',
              textTransform:'uppercase', color:'#4ade80', fontWeight:'600',
            }}>Open to Work</span>
          </div>

          {/* HELLO I'M */}
          <div style={{
            display:'flex', alignItems:'center', gap:'0.65rem',
            animation: mounted ? 'hFadeUp 0.6s 0.15s cubic-bezier(0.23,1,0.32,1) both' : 'none',
            opacity: mounted ? undefined : 0,
          }}>
            <span style={{display:'block',width:'28px',height:'1.5px',background:'#C9A84C',borderRadius:'1px'}} />
            <span style={{
              fontFamily:'"JetBrains Mono",monospace',
              fontSize:'0.72rem', letterSpacing:'0.24em',
              textTransform:'uppercase', color:'#C9A84C', fontWeight:'500',
            }}>Hello, I'm</span>
          </div>

          {/* NAME */}
          <h1 style={{
            fontFamily:'"Inter","DM Sans",sans-serif',
            fontSize:'clamp(2.8rem,6.8vw,5.4rem)',
            fontWeight:900, lineHeight:0.93,
            letterSpacing:'-0.025em',
            color:'#F4F2FF', textTransform:'uppercase', margin:0,
            animation: mounted ? 'hFadeUp 0.7s 0.25s cubic-bezier(0.23,1,0.32,1) both' : 'none',
            opacity: mounted ? undefined : 0,
          }}>PRAKHAR VERMA</h1>

          {/* ROLE */}
          <div style={{
            display:'flex', alignItems:'center', gap:'0.75rem',
            animation: mounted ? 'hFadeUp 0.65s 0.38s cubic-bezier(0.23,1,0.32,1) both' : 'none',
            opacity: mounted ? undefined : 0,
          }}>
            <span style={{
              display:'block', width:'4px', height:'36px', borderRadius:'2px',
              background:'linear-gradient(to bottom, #C9A84C, transparent)',
              flexShrink:0,
            }} />
            <p style={{
              fontFamily:'"Inter",sans-serif',
              fontSize:'clamp(0.76rem,1.7vw,0.96rem)',
              fontWeight:700, letterSpacing:'0.11em',
              textTransform:'uppercase',
              color:'rgba(201,168,76,0.88)', margin:0, lineHeight:1.3,
            }}>AI/ML Engineer &amp;<br/>Full Stack Developer</p>
          </div>

          {/* BIO */}
          <p style={{
            fontFamily:'"Inter",sans-serif',
            fontSize:'0.93rem', lineHeight:1.8,
            color:'rgba(180,176,200,0.82)',
            maxWidth:'468px', margin:0,
            animation: mounted ? 'hFadeUp 0.65s 0.5s cubic-bezier(0.23,1,0.32,1) both' : 'none',
            opacity: mounted ? undefined : 0,
          }}>
            I engineer production-grade AI systems and full-stack platforms
            that solve real business problems at scale — from LLM-powered
            career tools to civic tech SaaS. Clean architecture, sharp UI,
            and measurable impact: that's the standard I hold every build to.
          </p>

          {/* BUTTONS */}
          <div style={{
            display:'flex', flexWrap:'wrap', gap:'0.85rem',
            marginTop:'0.25rem',
            animation: mounted ? 'hBtnIn 0.6s 0.62s cubic-bezier(0.23,1,0.32,1) both' : 'none',
            opacity: mounted ? undefined : 0,
          }}>
            <button onClick={() => scrollTo('projects')} style={{
              display:'inline-flex', alignItems:'center', gap:'0.5rem',
              padding:'0.82rem 1.8rem', borderRadius:'10px',
              background:'#C9A84C', color:'#0B0B0F',
              fontFamily:'"Inter",sans-serif', fontSize:'0.88rem', fontWeight:700,
              border:'none', cursor:'none', letterSpacing:'0.02em',
              boxShadow:'0 4px 24px rgba(201,168,76,0.32)',
              transition:'background 0.22s, transform 0.22s, box-shadow 0.22s',
            }}
              onMouseEnter={e=>{e.currentTarget.style.background='#E2C47A';e.currentTarget.style.transform='translateY(-3px) scale(1.02)';e.currentTarget.style.boxShadow='0 10px 32px rgba(201,168,76,0.45)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='#C9A84C';e.currentTarget.style.transform='translateY(0) scale(1)';e.currentTarget.style.boxShadow='0 4px 24px rgba(201,168,76,0.32)'}}>
              <i className="fas fa-eye" style={{fontSize:'0.78rem'}} />
              View My Work
            </button>
            <button onClick={() => scrollTo('contact')} style={{
              display:'inline-flex', alignItems:'center', gap:'0.5rem',
              padding:'0.8rem 1.75rem', borderRadius:'10px',
              background:'transparent',
              border:'1.5px solid rgba(255,255,255,0.14)',
              color:'#F4F2FF',
              fontFamily:'"Inter",sans-serif', fontSize:'0.88rem', fontWeight:500,
              cursor:'none',
              transition:'border-color 0.22s, background 0.22s, transform 0.22s, box-shadow 0.22s',
            }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(201,168,76,0.5)';e.currentTarget.style.background='rgba(201,168,76,0.07)';e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,0.3)'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.14)';e.currentTarget.style.background='transparent';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
              <i className="fas fa-envelope" style={{fontSize:'0.78rem'}} />
              Contact Me
            </button>
          </div>

          {/* TECH STACK */}
          <div style={{
            marginTop:'0.35rem',
            opacity: mounted ? undefined : 0,
            animation: mounted ? 'hFadeUp 0.6s 0.75s cubic-bezier(0.23,1,0.32,1) both' : 'none',
          }}>
            <div style={{
              fontFamily:'"JetBrains Mono",monospace',
              fontSize:'0.6rem', letterSpacing:'0.2em',
              textTransform:'uppercase', color:'rgba(107,104,128,0.65)',
              marginBottom:'0.8rem',
            }}>Technologies</div>
            <div style={{display:'flex', flexWrap:'wrap', gap:'0.55rem'}}>
              {techRow.map((t,i) => (
                <div key={t.label} style={{
                  display:'inline-flex', alignItems:'center', gap:'0.42rem',
                  padding:'0.35rem 0.82rem', borderRadius:'99px',
                  border:'1px solid rgba(255,255,255,0.09)',
                  background:'rgba(255,255,255,0.025)',
                  fontFamily:'"Inter",sans-serif',
                  fontSize:'0.75rem', fontWeight:500,
                  color:'rgba(220,216,240,0.7)',
                  animation: mounted ? `hPillIn 0.45s ${0.82 + i*0.07}s cubic-bezier(0.23,1,0.32,1) both` : 'none',
                  transition:'color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s',
                  cursor:'none',
                }}
                  onMouseEnter={e=>{e.currentTarget.style.color='#F4F2FF';e.currentTarget.style.borderColor='rgba(201,168,76,0.35)';e.currentTarget.style.background='rgba(201,168,76,0.07)';e.currentTarget.style.transform='translateY(-2px)'}}
                  onMouseLeave={e=>{e.currentTarget.style.color='rgba(220,216,240,0.7)';e.currentTarget.style.borderColor='rgba(255,255,255,0.09)';e.currentTarget.style.background='rgba(255,255,255,0.025)';e.currentTarget.style.transform='translateY(0)'}}>
                  <i className={t.icon} style={{fontSize:'0.88rem',color:'#C9A84C'}} />
                  {t.label}
                </div>
              ))}
            </div>
          </div>

          {/* SCROLL DOWN */}
          <button onClick={() => window.scrollBy({top:window.innerHeight,behavior:'smooth'})} style={{
            display:'inline-flex', alignItems:'center', gap:'0.5rem',
            background:'none', border:'none', padding:'0.2rem 0', marginTop:'0.4rem',
            fontFamily:'"JetBrains Mono",monospace',
            fontSize:'0.62rem', letterSpacing:'0.18em',
            textTransform:'uppercase', color:'rgba(107,104,128,0.65)',
            cursor:'none', transition:'color 0.2s', width:'fit-content',
            opacity: mounted ? undefined : 0,
            animation: mounted ? 'hFadeUp 0.5s 1.1s cubic-bezier(0.23,1,0.32,1) both' : 'none',
          }}
            onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'}
            onMouseLeave={e=>e.currentTarget.style.color='rgba(107,104,128,0.65)'}>
            <i className="fas fa-arrow-down" style={{color:'#C9A84C',fontSize:'0.68rem',animation:'hBounce 2.2s ease-in-out infinite'}} />
            Scroll Down
          </button>
        </div>

        {/* ══ RIGHT — PORTRAIT ══ */}
        <div className="h-right" style={{
          position:'relative',
          display:'flex', alignItems:'center', justifyContent:'center',
          height:'100%', minHeight:'540px',
        }}>

          {/* SVG curved gold light streak */}
          <svg style={{
            position:'absolute', inset:0,
            width:'100%', height:'100%',
            pointerEvents:'none', zIndex:1, overflow:'visible',
          }} viewBox="0 0 540 600" fill="none">
            <defs>
              <linearGradient id="goldArc1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0.05" />
                <stop offset="40%"  stopColor="#C9A84C" stopOpacity="0.7"  />
                <stop offset="75%"  stopColor="#E2C47A" stopOpacity="0.9"  />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <path d="M520 560 C490 420 420 220 280 100 C140 -20 20 40 10 160"
              stroke="url(#goldArc1)" strokeWidth="1.8" fill="none" strokeLinecap="round"
              strokeDasharray="1600" strokeDashoffset="1600"
              style={{ animation: mounted ? 'hArcDraw 1.6s 0.3s cubic-bezier(0.23,1,0.32,1) forwards' : 'none' }} />
            <path d="M490 560 C460 430 400 240 270 130 C140 20 30 60 20 180"
              stroke="rgba(201,168,76,0.22)" strokeWidth="0.8" fill="none" strokeLinecap="round"
              strokeDasharray="8 16" strokeDashoffset="1600"
              style={{ animation: mounted ? 'hArcDraw 1.8s 0.5s cubic-bezier(0.23,1,0.32,1) forwards' : 'none' }} />
            <path d="M460 540 C430 410 370 240 250 150 C130 60 40 90 35 200"
              stroke="rgba(201,168,76,0.1)" strokeWidth="1" fill="none" strokeLinecap="round"
              strokeDasharray="4 22" strokeDashoffset="1600"
              style={{ animation: mounted ? 'hArcDraw 2s 0.7s cubic-bezier(0.23,1,0.32,1) forwards' : 'none' }} />
          </svg>

          {/* Warm radial bloom behind portrait */}
          <div style={{
            position:'absolute', bottom:'-12%', right:'-8%',
            width:'480px', height:'520px', borderRadius:'50%',
            background:'radial-gradient(ellipse 75% 80% at 60% 70%, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.07) 48%, transparent 80%)',
            filter:'blur(18px)', pointerEvents:'none', zIndex:0,
            animation:'hGlowPulse 5s ease-in-out infinite',
          }} />

          {/* Halo ring */}
          <div style={{
            position:'absolute', top:'50%', left:'50%',
            transform:'translate(-50%,-50%)',
            width:'clamp(270px,40vw,420px)', height:'clamp(340px,52vw,540px)',
            borderRadius:'50%',
            border:'1px solid rgba(201,168,76,0.1)',
            pointerEvents:'none', zIndex:1,
            animation:'hGlowPulse 7s ease-in-out infinite reverse',
          }} />

          {/* Portrait */}
          <div style={{
            position:'relative', zIndex:2,
            width:'clamp(240px,38vw,390px)', height:'clamp(320px,52vw,530px)',
            animation: mounted ? 'hFloat 7s 1.2s ease-in-out infinite' : 'none',
          }}>
            <img src="/PROFILE.png" alt="Prakhar Verma" style={{
              width:'100%', height:'100%',
              objectFit:'cover', objectPosition:'center top',
              display:'block',
              filter:'brightness(0.93) contrast(1.07) saturate(0.96)',
            }}
              onError={e => { e.target.style.display='none'; if(e.target.nextSibling) e.target.nextSibling.style.display='flex' }} />
            <div style={{
              width:'100%', height:'100%',
              background:'linear-gradient(135deg,#141418,#1C1C22)',
              display:'none', alignItems:'center', justifyContent:'center',
            }}>
              <span style={{fontFamily:'"DM Serif Display",serif',fontSize:'9rem',color:'rgba(201,168,76,0.15)',lineHeight:1,userSelect:'none'}}>PV</span>
            </div>
          </div>

          {/* Stat card 1 — top right */}
          <div style={{
            position:'absolute', top:'11%', right:'-3%', zIndex:4,
            background:'rgba(18,18,22,0.90)',
            border:'1px solid rgba(255,255,255,0.1)',
            borderRadius:'14px', padding:'0.8rem 1.05rem',
            backdropFilter:'blur(18px)',
            boxShadow:'0 12px 40px rgba(0,0,0,0.55)',
            display:'flex', alignItems:'center', gap:'0.7rem',
            animation: mounted ? 'hCardPop 0.6s 1.0s cubic-bezier(0.23,1,0.32,1) both, hFloat 6s 1.5s ease-in-out infinite' : 'none',
          }}>
            <div style={{width:'36px',height:'36px',borderRadius:'10px',background:'rgba(201,168,76,0.14)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              <i className="fas fa-brain" style={{color:'#C9A84C',fontSize:'0.85rem'}} />
            </div>
            <div>
              <div style={{fontFamily:'"DM Serif Display",serif',fontSize:'1.3rem',color:'#F4F2FF',lineHeight:1}}>5+</div>
              <div style={{fontFamily:'"JetBrains Mono",monospace',fontSize:'0.55rem',color:'rgba(107,104,128,0.85)',marginTop:'0.12rem',letterSpacing:'0.06em'}}>AI Projects</div>
            </div>
          </div>

          {/* Stat card 2 — middle left */}
          <div style={{
            position:'absolute', bottom:'28%', left:'-9%', zIndex:4,
            background:'rgba(18,18,22,0.90)',
            border:'1px solid rgba(255,255,255,0.1)',
            borderRadius:'14px', padding:'0.8rem 1.05rem',
            backdropFilter:'blur(18px)',
            boxShadow:'0 12px 40px rgba(0,0,0,0.55)',
            display:'flex', alignItems:'center', gap:'0.7rem',
            animation: mounted ? 'hCardPop 0.6s 1.15s cubic-bezier(0.23,1,0.32,1) both, hFloat 8s 1.8s ease-in-out infinite reverse' : 'none',
          }}>
            <div style={{width:'36px',height:'36px',borderRadius:'10px',background:'rgba(201,168,76,0.14)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              <i className="fas fa-certificate" style={{color:'#C9A84C',fontSize:'0.85rem'}} />
            </div>
            <div>
              <div style={{fontFamily:'"DM Serif Display",serif',fontSize:'1.3rem',color:'#F4F2FF',lineHeight:1}}>15+</div>
              <div style={{fontFamily:'"JetBrains Mono",monospace',fontSize:'0.55rem',color:'rgba(107,104,128,0.85)',marginTop:'0.12rem',letterSpacing:'0.06em'}}>Certifications</div>
            </div>
          </div>

          {/* Stat card 3 — bottom right */}
          <div style={{
            position:'absolute', bottom:'7%', right:'-1%', zIndex:4,
            background:'rgba(18,18,22,0.90)',
            border:'1px solid rgba(74,222,128,0.22)',
            borderRadius:'14px', padding:'0.7rem 0.95rem',
            backdropFilter:'blur(18px)',
            boxShadow:'0 12px 40px rgba(0,0,0,0.5)',
            display:'flex', alignItems:'center', gap:'0.65rem',
            animation: mounted ? 'hCardPop 0.6s 1.3s cubic-bezier(0.23,1,0.32,1) both, hFloat 7s 2s ease-in-out infinite' : 'none',
          }}>
            <span style={{width:'9px',height:'9px',borderRadius:'50%',background:'#4ade80',flexShrink:0,animation:'hDotPulse 2s ease-in-out infinite'}} />
            <div>
              <div style={{fontFamily:'"JetBrains Mono",monospace',fontSize:'0.67rem',color:'#4ade80',fontWeight:700,letterSpacing:'0.05em'}}>Open to Work</div>
              <div style={{fontFamily:'"JetBrains Mono",monospace',fontSize:'0.56rem',color:'rgba(107,104,128,0.7)',marginTop:'0.1rem'}}>B.Tech @ LPU</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div style={{
        position:'absolute', bottom:0, left:0, right:0, height:'1px',
        background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)',
      }} />
    </section>
  )
}

/* ================================================================
   ABOUT SECTION
================================================================ */
function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal section-label mb-2">About Me</div>
        <h2 className="reveal font-display text-[clamp(2rem,5vw,3.2rem)] text-main mb-12 leading-tight">
          Crafting intelligent solutions<br />
          <span className="italic text-gold">with code &amp; creativity.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio + Traits — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            <div className="reveal card p-8">
              <p className="text-muted leading-relaxed mb-4">{DATA.personal.bio}</p>
              <p className="text-muted leading-relaxed text-sm">
                Currently pursuing my <strong className="text-main font-semibold">B.Tech in Computer Science (AI &amp; ML)</strong> at Lovely Professional University (2025–2029).
                Whether engineering a scalable SaaS platform or crafting ultra-smooth animations, I hold one core belief:
                <em className="text-main not-italic font-medium"> Write clean code, build smart systems, never compromise on UX.</em>
              </p>
            </div>

            {/* Traits grid */}
            <div className="grid grid-cols-2 gap-4">
              {DATA.traits.map((t, i) => (
                <div key={t.title} className={`reveal delay-${i + 1} card card-gold p-5`}>
                  <div className="w-9 h-9 rounded-lg bg-gold-dim flex items-center justify-center mb-3">
                    <i className={`fas ${t.icon} text-gold text-sm`} />
                  </div>
                  <div className="font-semibold text-main text-sm mb-1">{t.title}</div>
                  <div className="text-muted text-xs leading-relaxed">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Info card + Stats — 1 col */}
          <div className="space-y-6">
            {/* Info card */}
            <div className="reveal card p-6 space-y-4">
              <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">Personal Info</div>
              {[
                { icon: 'fas fa-user', label: 'Name', val: 'Prakhar Verma' },
                { icon: 'fas fa-location-dot', label: 'Location', val: 'Jalandhar, Punjab, India' },
                { icon: 'fas fa-envelope', label: 'Email', val: DATA.personal.email },
                { icon: 'fas fa-circle-check', label: 'Availability', val: DATA.personal.availability },
              ].map(row => (
                <div key={row.label} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-gold-dim flex items-center justify-center flex-shrink-0">
                    <i className={`${row.icon} text-gold text-xs`} />
                  </div>
                  <div>
                    <div className="font-mono text-[.58rem] text-muted uppercase tracking-wider">{row.label}</div>
                    <div className="text-main text-sm font-medium">{row.val}</div>
                  </div>
                </div>
              ))}
              <a href={DATA.personal.resume} download className="btn-gold w-full justify-center mt-2 text-sm">
                <i className="fas fa-file-arrow-down text-xs" /> Download Resume
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {DATA.stats.map((s, i) => (
                <div key={s.label} className={`reveal delay-${i + 1} card card-gold p-4 text-center`}>
                  <div className="font-display text-2xl text-gold mb-1">{s.val}</div>
                  <div className="font-mono text-[.6rem] text-muted uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   EXPERIENCE SECTION
================================================================ */
function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left heading */}
          <div className="lg:sticky top-28">
            <div className="reveal section-label">My Journey</div>
            <h2 className="reveal font-display text-[clamp(2rem,5vw,3rem)] text-main mb-4 leading-tight">
              My professional<br />
              <span className="italic text-gold">journey</span>
            </h2>
            <p className="reveal text-muted text-sm leading-relaxed mb-8">
              From student organiser to Technical Lead — every step has shaped my approach to building impactful tech solutions.
            </p>
            {/* Education mini timeline */}
            <div className="reveal card p-6 space-y-5">
              <div className="font-mono text-xs tracking-widest uppercase text-gold">Education</div>
              {DATA.education.map((e, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${e.status === 'current' ? 'bg-gold animate-pulse-gold' : 'bg-muted'}`} />
                  <div>
                    <div className="text-main text-sm font-semibold">{e.degree}</div>
                    <div className="text-muted text-xs">{e.school}</div>
                    <div className="font-mono text-[.6rem] text-muted/70 mt-0.5">{e.period}{e.grade ? ` · ${e.grade}` : ''}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right timeline */}
          <div className="relative pl-8">
            <div className="tl-line" />
            {DATA.experience.map((e, i) => (
              <div key={i} className={`reveal delay-${i + 1} relative mb-10 last:mb-0`}>
                <div className="tl-dot" />
                <div className="card card-gold p-6 hover:border-gold/30 transition-all">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-main font-semibold text-base">{e.role}</h3>
                      <div className="text-gold text-sm font-medium">{e.company}</div>
                    </div>
                    {e.current && (
                      <span className="flex-shrink-0 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/25 font-mono text-[.58rem] text-green-400 tracking-wider">
                        CURRENT
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-3 font-mono text-[.65rem] text-muted">
                    <span><i className="fas fa-calendar-alt mr-1" />{e.period}</span>
                    <span>·</span>
                    <span><i className="fas fa-location-dot mr-1" />{e.location}</span>
                    <span>·</span>
                    <span>{e.type}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-4">{e.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map(tag => <span key={tag} className="badge">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   PROJECTS SECTION
================================================================ */
function Projects() {
  const [featured, setFeatured] = useState(DATA.projects[0])
  const [view, setView] = useState('grid')

  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="reveal section-label">My Work</div>
            <h2 className="reveal font-display text-[clamp(2rem,5vw,3rem)] text-main leading-tight">
              Some things<br /><span className="italic text-gold">I've built</span>
            </h2>
          </div>
          <div className="reveal flex gap-2">
            {['grid','list'].map(v => (
              <button key={v} onClick={() => setView(v)}
                className={`w-9 h-9 rounded-lg border flex items-center justify-center text-sm transition-all ${
                  view === v ? 'border-gold/40 bg-gold-dim text-gold' : 'border-line text-muted hover:text-main'
                }`}>
                <i className={`fas fa-${v === 'grid' ? 'grip' : 'list'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className={`grid gap-5 mb-16 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {DATA.projects.map((p, i) => (
            <div key={p.id} className={`reveal delay-${(i % 3) + 1} card card-gold group overflow-hidden`}
              style={{ '--accent': p.accent }}>
              {/* Top accent bar */}
              <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: p.accent }} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-[.6rem] tracking-widest uppercase text-muted">{p.category}</span>
                    <h3 className="text-main font-semibold text-lg leading-tight mt-0.5 group-hover:text-gold transition-colors">
                      {p.emoji} {p.name}
                    </h3>
                    <div className="text-muted text-xs">{p.subtitle}</div>
                  </div>
                  {p.featured && (
                    <span className="px-2 py-1 rounded-full text-[.58rem] font-mono tracking-wider border border-gold/30 text-gold bg-gold-dim flex-shrink-0">
                      FEATURED
                    </span>
                  )}
                </div>

                <p className="text-muted text-sm leading-relaxed mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map(t => <span key={t} className="badge text-[.6rem]">{t}</span>)}
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-line">
                  <span className="font-mono text-[.6rem] text-muted">{p.period}</span>
                  <div className="flex gap-2 ml-auto">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-sm btn-sm-gold">
                        <i className="fas fa-external-link-alt text-[.6rem]" /> Live Demo
                      </a>
                    )}
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-sm btn-sm-line">
                      <i className="fab fa-github text-[.6rem]" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── FEATURED PROJECT Deep Dive ── */}
        <div className="sep mb-16" />
        <div className="reveal section-label mb-2">Featured Project</div>
        <h3 className="reveal font-display text-[clamp(1.5rem,3vw,2.2rem)] text-main mb-8">
          Case Study — <span className="italic text-gold">{featured.name}</span>
        </h3>

        {/* Project selector */}
        <div className="reveal flex flex-wrap gap-2 mb-8">
          {DATA.projects.filter(p => p.problem).map(p => (
            <button key={p.id} onClick={() => setFeatured(p)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                featured.id === p.id ? 'border-gold/40 bg-gold-dim text-gold' : 'border-line text-muted hover:text-main'
              }`}>
              {p.emoji} {p.name}
            </button>
          ))}
        </div>

        <div className="card p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{featured.emoji}</span>
                <h4 className="font-display text-xl text-main">{featured.name}</h4>
              </div>
              <p className="text-muted text-sm">{featured.subtitle}</p>
            </div>
            <p className="text-muted leading-relaxed text-sm">{featured.longDesc || featured.desc}</p>
            <div className="flex flex-wrap gap-2">
              {featured.tech.map(t => <span key={t} className="badge">{t}</span>)}
            </div>
            <div className="flex gap-3 pt-2">
              {featured.live && (
                <a href={featured.live} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
                  <i className="fas fa-external-link-alt text-xs" /> Live Demo
                </a>
              )}
              <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                <i className="fab fa-github text-xs" /> View on GitHub
              </a>
            </div>
          </div>

          <div className="space-y-5">
            {featured.problem && (
              <div className="p-5 rounded-xl bg-surface2 border border-line">
                <div className="flex items-center gap-2 mb-2">
                  <i className="fas fa-triangle-exclamation text-gold text-xs" />
                  <span className="font-mono text-xs tracking-widest uppercase text-gold">The Problem</span>
                </div>
                <p className="text-muted text-sm leading-relaxed">{featured.problem}</p>
              </div>
            )}
            {featured.solution && (
              <div className="p-5 rounded-xl bg-surface2 border border-line">
                <div className="flex items-center gap-2 mb-2">
                  <i className="fas fa-lightbulb text-gold text-xs" />
                  <span className="font-mono text-xs tracking-widest uppercase text-gold">My Solution</span>
                </div>
                <p className="text-muted text-sm leading-relaxed">{featured.solution}</p>
              </div>
            )}
            {featured.impact && (
              <div className="p-5 rounded-xl bg-surface2 border border-line">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fas fa-chart-line text-gold text-xs" />
                  <span className="font-mono text-xs tracking-widest uppercase text-gold">Impact</span>
                </div>
                <ul className="space-y-2">
                  {featured.impact.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted">
                      <i className="fas fa-check text-gold text-xs flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   SKILLS SECTION
================================================================ */
function Skills() {
  const [activeTab, setActiveTab] = useState('Languages')
  const tabs = Object.keys(DATA.skills)
  const [visible, setVisible] = useState(true)
  // Key trick: force full remount of grid when tab changes so items animate fresh
  const [gridKey, setGridKey] = useState(0)

  const switchTab = (tab) => {
    if (tab === activeTab) return
    // Fade out, swap, fade in
    setVisible(false)
    setTimeout(() => {
      setActiveTab(tab)
      setGridKey(k => k + 1)
      setVisible(true)
    }, 180)
  }

  const skills = DATA.skills[activeTab]

  return (
    <section id="skills" style={{padding:'6rem 0',background:'#0B0B0F'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 1.5rem'}}>

        {/* Header */}
        <div className="reveal" style={{
          display:'inline-flex',alignItems:'center',gap:'0.5rem',
          fontFamily:'"JetBrains Mono",monospace',fontSize:'0.62rem',
          letterSpacing:'0.22em',textTransform:'uppercase',color:'#C9A84C',marginBottom:'0.85rem',
        }}>
          <span style={{display:'block',width:'16px',height:'1px',background:'#C9A84C'}} />
          My Skills
        </div>
        <h2 className="reveal font-display" style={{fontSize:'clamp(2rem,5vw,3rem)',color:'#F4F2FF',lineHeight:'1.15',marginBottom:'0.5rem',fontWeight:'400'}}>
          Technologies I{' '}
          <span style={{fontStyle:'italic',color:'#C9A84C'}}>work with</span>
        </h2>
        <p className="reveal" style={{color:'rgba(107,104,128,0.85)',fontSize:'0.9rem',marginBottom:'2.5rem',maxWidth:'520px'}}>
          A curated set of tools and technologies I use to build scalable, impactful software.
        </p>

        {/* ── Tab buttons ── */}
        <div className="reveal" style={{display:'flex',flexWrap:'wrap',gap:'0.6rem',marginBottom:'2.5rem'}}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => switchTab(tab)}
              style={{
                padding:'0.5rem 1.1rem',
                borderRadius:'9px',
                fontFamily:'"Inter",sans-serif',
                fontSize:'0.82rem',fontWeight:'500',
                border: activeTab === tab
                  ? '1px solid rgba(201,168,76,0.5)'
                  : '1px solid rgba(255,255,255,0.08)',
                background: activeTab === tab
                  ? 'rgba(201,168,76,0.12)'
                  : 'rgba(255,255,255,0.02)',
                color: activeTab === tab ? '#C9A84C' : 'rgba(107,104,128,0.85)',
                cursor:'none',
                transition:'all 0.2s',
              }}
              onMouseEnter={e => {
                if (activeTab !== tab) {
                  e.currentTarget.style.color = '#F4F2FF'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== tab) {
                  e.currentTarget.style.color = 'rgba(107,104,128,0.85)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                }
              }}>
              {tab}
            </button>
          ))}
        </div>

        {/* ── Skills grid — NO reveal class, animated via inline style ── */}
        <div
          key={gridKey}
          style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',
            gap:'1rem',
            marginBottom:'4rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition:'opacity 0.22s ease, transform 0.22s ease',
          }}>
          {skills.map((s, i) => (
            <SkillCard key={`${activeTab}-${s.name}`} s={s} i={i} visible={visible} />
          ))}
        </div>

        {/* ── All Technologies badge cloud ── */}
        <div style={{height:'1px',background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)',margin:'0 0 2.5rem'}} />
        <div className="reveal" style={{
          display:'inline-flex',alignItems:'center',gap:'0.5rem',
          fontFamily:'"JetBrains Mono",monospace',fontSize:'0.62rem',
          letterSpacing:'0.22em',textTransform:'uppercase',color:'#C9A84C',marginBottom:'1.25rem',
        }}>
          <span style={{display:'block',width:'16px',height:'1px',background:'#C9A84C'}} />
          All Technologies
        </div>
        <div className="reveal" style={{display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
          {[
            'Python','JavaScript','Java','C++','HTML5','CSS3',
            'React.js','Node.js','Express.js','MongoDB','PostgreSQL','Supabase','REST APIs',
            'Tailwind CSS','Bootstrap','Chart.js','Leaflet.js',
            'Machine Learning','Deep Learning','LLMs','RAG','Prompt Engineering','Generative AI',
            'Cybersecurity','Kali Linux','Threat Intelligence','Social Engineering','Cryptography',
            'Git','GitHub','GitHub Copilot','Figma','Arduino','AutoCAD',
            'DALL·E','Midjourney',
            'Microsoft Excel','Microsoft Word','Microsoft PowerPoint',
            'OOP','Data Structures & Algorithms',
          ].map(t => (
            <span key={t} style={{
              display:'inline-flex',alignItems:'center',
              padding:'0.28rem 0.7rem',borderRadius:'99px',
              fontFamily:'"JetBrains Mono",monospace',
              fontSize:'0.62rem',letterSpacing:'0.04em',
              border:'1px solid rgba(255,255,255,0.07)',
              background:'rgba(255,255,255,0.02)',
              color:'rgba(107,104,128,0.8)',
              transition:'color 0.2s,border-color 0.2s',
              whiteSpace:'nowrap',
            }}
              onMouseEnter={e=>{e.currentTarget.style.color='#F4F2FF';e.currentTarget.style.borderColor='rgba(255,255,255,0.14)'}}
              onMouseLeave={e=>{e.currentTarget.style.color='rgba(107,104,128,0.8)';e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'}}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <style>{'@keyframes skillSlideIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}@keyframes barGrow{from{width:0%}to{width:var(--bar-w)}}'}</style>
    </section>
  )
}

/* Individual skill card — self-animated, no IntersectionObserver dependency */
function SkillCard({ s, i, visible }) {
  return (
    <div
      style={{
        background:'#141418',
        border:'1px solid rgba(255,255,255,0.06)',
        borderRadius:'14px',
        padding:'1.25rem',
        opacity:0,
        animation: visible ? `skillSlideIn 0.35s ${i * 0.055}s cubic-bezier(0.23,1,0.32,1) forwards` : 'none',
        transition:'border-color 0.25s,transform 0.25s',
      }}
      onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(201,168,76,0.2)';e.currentTarget.style.transform='translateY(-3px)'}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.06)';e.currentTarget.style.transform='translateY(0)'}}>
      {/* Icon + name + pct */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'0.85rem'}}>
        <div style={{display:'flex',alignItems:'center',gap:'0.7rem'}}>
          <div style={{
            width:'34px',height:'34px',borderRadius:'9px',
            background:'rgba(201,168,76,0.1)',
            display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
          }}>
            <i className={s.icon} style={{color:'#C9A84C',fontSize:'0.9rem'}} />
          </div>
          <span style={{fontFamily:'"Inter",sans-serif',fontSize:'0.88rem',fontWeight:'500',color:'#F4F2FF'}}>{s.name}</span>
        </div>
        <span style={{fontFamily:'"JetBrains Mono",monospace',fontSize:'0.7rem',color:'rgba(107,104,128,0.7)'}}>{s.level}%</span>
      </div>
      {/* Progress bar — animated with CSS keyframe so it runs every time card mounts */}
      <div style={{height:'3px',background:'rgba(255,255,255,0.06)',borderRadius:'3px',overflow:'hidden'}}>
        <div style={{
          height:'100%',borderRadius:'3px',
          background:'linear-gradient(90deg,#C9A84C,#E2C47A)',
          '--bar-w': s.level + '%',
          width:0,
          animation: visible ? `barGrow 1s ${i * 0.055 + 0.1}s cubic-bezier(0.23,1,0.32,1) forwards` : 'none',
        }} />
      </div>
    </div>
  )
}

/* ================================================================
   ACHIEVEMENTS SECTION
================================================================ */
function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal section-label">Recognition</div>
        <h2 className="reveal font-display text-[clamp(2rem,5vw,3rem)] text-main mb-12 leading-tight">
          Some <span className="italic text-gold">highlights</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Highlights */}
          <div className="lg:col-span-1 space-y-4">
            {DATA.achievements.map((a, i) => (
              <div key={i} className={`reveal delay-${i + 1} card card-gold p-5 flex items-start gap-4`}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: a.color + '18' }}>
                  <i className={`${a.icon} text-sm`} style={{ color: a.color }} />
                </div>
                <div>
                  <div className="text-main font-semibold text-sm mb-1">{a.title}</div>
                  <div className="text-muted text-xs leading-relaxed">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications grid */}
          <div className="lg:col-span-2">
            <div className="reveal font-mono text-xs tracking-widest uppercase text-gold mb-5">Certifications</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DATA.certifications.map((c, i) => (
                <a key={i} href={c.link} target="_blank" rel="noopener noreferrer"
                  className={`reveal delay-${(i % 3) + 1} card card-gold p-4 flex flex-col items-start gap-2 hover:border-gold/30 no-underline`}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: c.color + '18' }}>
                    <i className={`${c.icon} text-xs`} style={{ color: c.color }} />
                  </div>
                  <div>
                    <div className="text-main font-medium text-xs leading-tight mb-0.5">{c.name}</div>
                    <div className="font-mono text-[.58rem] tracking-wider uppercase" style={{ color: c.color }}>
                      {c.issuer}
                    </div>
                  </div>
                  <i className="fas fa-external-link-alt text-[.55rem] text-muted ml-auto mt-auto" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   TESTIMONIALS — Infinite dual-row marquee
================================================================ */

/* ================================================================
   TESTIMONIALS — Dual-row infinite marquee
================================================================ */
const ALL_TESTI = [
  ...DATA.testimonials,
  {
    quote: "Prakhar\'s work on our AI dashboard was outstanding — clean architecture, smart design decisions, delivered ahead of schedule. A true professional.",
    name: 'Rachel Chen', role: 'CTO, InnovateLabs', initials: 'RC', color: '#C9A84C',
  },
  {
    quote: "One of the sharpest young developers I\'ve worked with. His ability to bridge AI concepts with production-ready frontend code is genuinely rare.",
    name: 'Arjun Patel', role: 'Engineering Manager, TechScale', initials: 'AP', color: '#60a5fa',
  },
  {
    quote: "The cybersecurity knowledge combined with beautiful UI design is a rare and invaluable combo. The deliverables were flawless.",
    name: 'Daniel Kim', role: 'Lead Engineer, SecureStack', initials: 'DK', color: '#4ade80',
  },
  {
    quote: "Highly recommend Prakhar for any AI integration project. He transformed our backend data into an intuitive, visual experience our whole team loved.",
    name: 'Priya Sharma', role: 'Product Lead, DataPulse', initials: 'PS', color: '#a78bfa',
  },
]

/* Single testimonial card */
function TCard({ t }) {
  return (
    <div style={{
      flexShrink:0,
      width:'360px',
      background:'#141418',
      border:'1px solid rgba(255,255,255,0.07)',
      borderRadius:'18px',
      padding:'1.6rem 1.75rem',
      position:'relative',
      overflow:'hidden',
      transition:'border-color 0.3s',
    }}
    onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(201,168,76,0.25)'}}
    onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'}}>
      {/* Top gold accent line */}
      <div style={{
        position:'absolute',top:0,left:0,right:0,height:'2px',
        background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)',
        opacity:0,transition:'opacity 0.3s',
      }} />
      {/* Big quote mark */}
      <div style={{
        fontFamily:'"DM Serif Display",Georgia,serif',
        fontSize:'3.5rem',lineHeight:'1',
        color:'rgba(201,168,76,0.1)',
        marginBottom:'-0.5rem',
        userSelect:'none',
      }}>"</div>
      {/* Stars */}
      <div style={{display:'flex',gap:'3px',marginBottom:'0.85rem'}}>
        {[0,1,2,3,4].map(i=>(
          <i key={i} className="fas fa-star" style={{fontSize:'0.65rem',color:'#C9A84C'}} />
        ))}
      </div>
      {/* Quote text */}
      <p style={{
        fontFamily:'"Inter",sans-serif',
        fontSize:'0.84rem',lineHeight:'1.72',
        color:'rgba(244,242,255,0.65)',
        fontStyle:'italic',
        marginBottom:'1.4rem',
        minHeight:'72px',
      }}>
        "{t.quote}"
      </p>
      {/* Author */}
      <div style={{display:'flex',alignItems:'center',gap:'0.75rem',paddingTop:'1rem',borderTop:'1px solid rgba(255,255,255,0.06)'}}>
        <div style={{
          width:'38px',height:'38px',borderRadius:'50%',
          background:`rgba(${t.color==='#C9A84C'?'201,168,76':t.color==='#4ade80'?'74,222,128':t.color==='#60a5fa'?'96,165,250':'167,139,250'},0.15)`,
          border:`1px solid ${t.color||'rgba(201,168,76,0.3)'}44`,
          display:'flex',alignItems:'center',justifyContent:'center',
          flexShrink:0,
        }}>
          <span style={{fontFamily:'"Inter",sans-serif',fontSize:'0.72rem',fontWeight:'700',color:t.color||'#C9A84C'}}>{t.initials}</span>
        </div>
        <div>
          <div style={{fontFamily:'"Inter",sans-serif',fontSize:'0.85rem',fontWeight:'600',color:'#F4F2FF'}}>{t.name}</div>
          <div style={{fontFamily:'"JetBrains Mono",monospace',fontSize:'0.6rem',letterSpacing:'0.06em',color:'rgba(107,104,128,0.8)'}}>{t.role}</div>
        </div>
      </div>
    </div>
  )
}

/* Marquee keyframes — injected once */
const MARQUEE_STYLES = `
  @keyframes marqL {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marqR {
    0%   { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
`

/* Marquee row */
function MarqueeRow({ items, direction='left' }) {
  const doubled = [...items, ...items]
  const [paused, setPaused] = useState(false)

  const duration = direction === 'left' ? '40s' : '48s'
  const animName  = direction === 'left' ? 'marqL' : 'marqR'

  return (
    <>
      <style>{MARQUEE_STYLES}</style>
      <div
        style={{
          overflow:'hidden',
          WebkitMaskImage:'linear-gradient(90deg,transparent 0%,#000 8%,#000 92%,transparent 100%)',
          maskImage:'linear-gradient(90deg,transparent 0%,#000 8%,#000 92%,transparent 100%)',
        }}
        onMouseEnter={()=>setPaused(true)}
        onMouseLeave={()=>setPaused(false)}
      >
        <div style={{
          display:'flex',
          gap:'1.5rem',
          width:'max-content',
          animationName: animName,
          animationDuration: duration,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: paused ? 'paused' : 'running',
          willChange:'transform',
        }}>
          {doubled.map((t,i)=><TCard key={`${direction}-${i}`} t={t} />)}
        </div>
      </div>
    </>
  )
}

function Testimonials() {
  /* Two rows, different starting offsets for visual variety */
  const row1 = ALL_TESTI
  const row2 = [...ALL_TESTI.slice(2), ...ALL_TESTI.slice(0,2)]

  return (
    <section style={{padding:'7rem 0',background:'#0B0B0F',overflow:'hidden'}}>
      {/* ── Header ── */}
      <div style={{maxWidth:'1280px',margin:'0 auto 3.5rem',padding:'0 1.5rem'}}>
        <div className="reveal" style={{
          display:'inline-flex',alignItems:'center',gap:'0.5rem',
          fontFamily:'"JetBrains Mono",monospace',
          fontSize:'0.62rem',letterSpacing:'0.22em',textTransform:'uppercase',
          color:'#C9A84C',marginBottom:'0.85rem',
        }}>
          <span style={{display:'block',width:'16px',height:'1px',background:'#C9A84C'}} />
          What People Say
        </div>
        <h2 className="reveal font-display" style={{
          fontSize:'clamp(2rem,5vw,3rem)',
          color:'#F4F2FF',lineHeight:'1.15',margin:0,fontWeight:'400',
        }}>
          What people say{' '}
          <span style={{fontStyle:'italic',color:'#C9A84C'}}>about me</span>
        </h2>
      </div>

      {/* ── Row 1 — scrolls LEFT ── */}
      <div style={{marginBottom:'1.2rem'}}>
        <MarqueeRow items={row1} direction="left" />
      </div>

      {/* ── Row 2 — scrolls RIGHT ── */}
      <MarqueeRow items={row2} direction="right" />

      {/* ── Coding profiles ── */}
      <div style={{maxWidth:'1280px',margin:'5rem auto 0',padding:'0 1.5rem'}}>
        <div style={{height:'1px',background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)',marginBottom:'3rem'}} />
        <div className="reveal" style={{
          display:'inline-flex',alignItems:'center',gap:'0.5rem',
          fontFamily:'"JetBrains Mono",monospace',
          fontSize:'0.62rem',letterSpacing:'0.22em',textTransform:'uppercase',
          color:'#C9A84C',marginBottom:'1.25rem',
        }}>
          <span style={{display:'block',width:'16px',height:'1px',background:'#C9A84C'}} />
          Coding Profiles
        </div>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))',
          gap:'0.75rem',
        }}>
          {DATA.profiles.map((p,i)=>(
            <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer"
              className={`reveal delay-${(i%4)+1}`}
              style={{
                display:'flex',flexDirection:'column',alignItems:'center',gap:'0.5rem',
                padding:'1rem',borderRadius:'14px',
                background:'#141418',border:'1px solid rgba(255,255,255,0.06)',
                textDecoration:'none',
                transition:'border-color 0.25s,transform 0.25s',
              }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(201,168,76,0.2)';e.currentTarget.style.transform='translateY(-3px)'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.06)';e.currentTarget.style.transform='translateY(0)'}}>
              <i className={p.icon} style={{fontSize:'1.3rem',color:p.color}} />
              <span style={{fontFamily:'"JetBrains Mono",monospace',fontSize:'0.58rem',color:'rgba(107,104,128,0.8)',letterSpacing:'0.06em',textTransform:'uppercase'}}>{p.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* keyframes injected once */}
      <style>{`
        @keyframes marqL {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqR {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}


/* ================================================================
   CONTACT SECTION
================================================================ */
function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    const subj = encodeURIComponent(`${form.subject || 'Portfolio Inquiry'}: ${form.name}`)
    const body = encodeURIComponent(`Hello Prakhar,\n\n${form.message}\n\nBest regards,\n${form.name}\n(${form.email})`)
    setTimeout(() => {
      window.location.href = `mailto:${DATA.personal.email}?subject=${subj}&body=${body}`
      setSent(true)
      setLoading(false)
    }, 800)
  }

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal section-label">Get In Touch</div>
        <h2 className="reveal font-display text-[clamp(2rem,5vw,3rem)] text-main mb-2 leading-tight">
          Let's work <span className="italic text-gold">together</span>
        </h2>
        <p className="reveal text-muted text-sm mb-12 max-w-lg">
          I'm always open to discussing new projects, interesting opportunities, or just having a chat about technology.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <div className="reveal-left space-y-6">
            {[
              { icon: 'fas fa-envelope', label: 'Email', val: DATA.personal.email, href: `mailto:${DATA.personal.email}` },
              { icon: 'fas fa-phone', label: 'Phone', val: DATA.personal.phone, href: `tel:${DATA.personal.phone}` },
              { icon: 'fas fa-location-dot', label: 'Location', val: DATA.personal.location, href: '#' },
            ].map(row => (
              <a key={row.label} href={row.href}
                className="card card-gold p-5 flex items-center gap-4 no-underline group hover:border-gold/30">
                <div className="w-11 h-11 rounded-xl bg-gold-dim flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors">
                  <i className={`${row.icon} text-gold`} />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted tracking-wider uppercase mb-0.5">{row.label}</div>
                  <div className="text-main text-sm font-medium">{row.val}</div>
                </div>
                <i className="fas fa-arrow-right text-muted text-xs ml-auto group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </a>
            ))}

            {/* Social icons */}
            <div className="flex gap-3 pt-4">
              {DATA.profiles.slice(0, 5).map(p => (
                <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-line flex items-center justify-center hover:border-gold/30 transition-all hover:-translate-y-0.5">
                  <i className={`${p.icon} text-sm`} style={{ color: p.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal-right">
            <div className="card p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/25 flex items-center justify-center mb-4">
                    <i className="fas fa-check text-green-500 text-xl" />
                  </div>
                  <div className="font-display text-xl text-main mb-2">Message Sent!</div>
                  <div className="text-muted text-sm mb-6">Thank you for reaching out. I'll respond within 24 hours.</div>
                  <button onClick={() => { setSent(false); setForm({ name:'',email:'',subject:'',message:'' }) }} className="btn-outline text-sm">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs text-muted mb-1.5 block">Your Name *</label>
                      <input type="text" placeholder="Prakhar Verma" value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                    </div>
                    <div>
                      <label className="font-mono text-xs text-muted mb-1.5 block">Email *</label>
                      <input type="email" placeholder="you@email.com" value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
                    </div>
                  </div>
                  <div>
                    <label className="font-mono text-xs text-muted mb-1.5 block">Subject</label>
                    <input type="text" placeholder="Project Collaboration" value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-muted mb-1.5 block">Message *</label>
                    <textarea rows={5} placeholder="Tell me about your project or opportunity…" value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required />
                  </div>
                  <button type="submit" className="btn-gold w-full justify-center mt-2" disabled={loading}>
                    {loading ? <><i className="fas fa-spinner fa-spin text-xs" /> Sending…</> : <><i className="fas fa-paper-plane text-xs" /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   FOOTER
================================================================ */
function Footer() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const [email, setEmail] = useState('')
  const [subbed, setSubbed] = useState(false)

  return (
    <footer className="border-t border-line bg-bg">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center text-bg text-xs font-bold font-display">PV</div>
              <span className="font-display text-base text-main">Prakhar <span className="italic text-gold">Verma</span></span>
            </div>
            <p className="text-muted text-xs leading-relaxed mb-4">AI/ML Engineer &amp; Full Stack Developer. Building intelligent solutions for a better tomorrow.</p>
            <div className="flex gap-2">
              {DATA.profiles.slice(0, 4).map(p => (
                <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-line flex items-center justify-center hover:border-gold/30 transition-all">
                  <i className={`${p.icon} text-xs`} style={{ color: p.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">Quick Links</div>
            <div className="space-y-2">
              {['Home','About','Experience','Projects','Skills','Contact'].map(l => (
                <button key={l} onClick={() => scrollTo(l.toLowerCase())}
                  className="block font-mono text-xs text-muted hover:text-main transition-colors tracking-wider">
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">Resources</div>
            <div className="space-y-2">
              {[
                { label: 'Resume', link: DATA.personal.resume },
                { label: 'GitHub',   link: DATA.personal.github },
                { label: 'LinkedIn', link: DATA.personal.linkedin },
                { label: 'Certifications', link: '#achievements' },
                { label: 'LeetCode', link: 'https://leetcode.com/u/jxLXeIbuH1/' },
              ].map(r => (
                <a key={r.label} href={r.link} target="_blank" rel="noopener noreferrer"
                  className="block font-mono text-xs text-muted hover:text-main transition-colors tracking-wider">
                  {r.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">Newsletter</div>
            <p className="text-muted text-xs leading-relaxed mb-4">Stay updated with my latest projects and insights.</p>
            {subbed ? (
              <div className="flex items-center gap-2 text-green-400 font-mono text-xs">
                <i className="fas fa-check" /> Subscribed!
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if(email) setSubbed(true) }} className="space-y-2">
                <input type="email" placeholder="Enter your email" value={email}
                  onChange={e => setEmail(e.target.value)} className="text-xs py-2.5" />
                <button type="submit" className="btn-gold w-full justify-center text-xs py-2.5">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <div className="sep mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted">© {new Date().getFullYear()} Prakhar Verma. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <img src="https://api.visitorbadge.io/api/visitors?path=prakhar.dev.v3&label=VISITORS&labelColor=%230B0B0F&countColor=%23C9A84C&style=flat-square"
              alt="Visitor count" className="rounded opacity-70 hover:opacity-100 transition-opacity" />
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-lg border border-line flex items-center justify-center text-muted hover:text-main hover:border-gold/30 transition-all">
              <i className="fas fa-arrow-up text-xs" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ================================================================
   404 PAGE
================================================================ */
function NotFound({ onBack }) {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg">
      {/* Gold arc background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 900" fill="none">
        <circle cx="700" cy="900" r="600" stroke="rgba(201,168,76,.06)" strokeWidth="1" />
        <circle cx="700" cy="900" r="450" stroke="rgba(201,168,76,.04)" strokeWidth="1" strokeDasharray="8 20" />
        <circle cx="700" cy="900" r="300" stroke="rgba(201,168,76,.08)" strokeWidth="1.5" />
        <path d="M100 900 A600 600 0 0 1 1300 900" stroke="#C9A84C" strokeWidth="1" opacity=".2" strokeDasharray="1000" strokeDashoffset="1000" className="gold-arc" />
      </svg>

      {/* Glowing center spot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[.025] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <div className="font-display text-[clamp(6rem,20vw,14rem)] text-main/8 leading-none select-none mb-2">
          404
        </div>
        <div className="font-display text-2xl text-main mb-2">Page not found</div>
        <p className="text-muted text-sm mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button onClick={onBack} className="btn-gold">
            <i className="fas fa-arrow-left text-xs" /> Go Back Home
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
            Contact Me
          </button>
        </div>
        {/* Mini brand */}
        <div className="mt-12 flex items-center justify-center gap-2 opacity-40">
          <div className="w-6 h-6 rounded-md bg-gold flex items-center justify-center text-bg text-[.6rem] font-bold font-display">PV</div>
          <span className="font-mono text-xs text-muted">prakhar.dev</span>
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   TOAST UTILITY
================================================================ */
function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="toast">
      <i className={`fas ${type === 'success' ? 'fa-check-circle text-green-400' : 'fa-circle-info text-gold'} text-base`} />
      <span className="text-sm text-main">{message}</span>
    </div>
  )
}

/* ================================================================
   MAIN APP
================================================================ */
export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [page, setPage] = useState('home') // 'home' | '404'

  useReveal()

  return (
    <>
      {/* Grain */}
      <div className="grain" aria-hidden="true" />

      {/* Cursor */}
      <Cursor />

      {/* Preloader */}
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}

      {/* Main site */}
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        {page === '404' ? (
          <NotFound onBack={() => setPage('home')} />
        ) : (
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Achievements />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </>
  )
}
