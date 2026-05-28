
// ── TYPING EFFECT ──
const roles = ["Python Full Stack Developer", "React.js Developer", "Django Developer", "UI/UX Enthusiast"];
let roleIdx = 0, charIdx = 0, deleting = false;
const typingEl = document.getElementById("typing-text");
 
function type() {
  const cur = roles[roleIdx];
  if (!deleting) {
    typingEl.textContent = cur.slice(0, ++charIdx);
    if (charIdx === cur.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    typingEl.textContent = cur.slice(0, --charIdx);
    if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 45 : 85);
}
type();
 
// ── SKILLS DATA ──
const skills = [
  { name: "HTML5",       icon: "bi-filetype-html",   level: 90 },
  { name: "CSS3",        icon: "bi-filetype-css",    level: 85 },
  { name: "JavaScript",  icon: "bi-filetype-js",     level: 80 },
  { name: "React.js",    icon: "bi-diagram-3",       level: 95 },
  { name: "Bootstrap",   icon: "bi-bootstrap",       level: 85 },
  { name: "TailWind CSS",   icon: "bi-bootstrap",       level: 85 },
  { name: "Python",      icon: "bi-filetype-py",     level: 98 },
  { name: "Django",      icon: "bi-server",          level: 95 },
  { name: "FastAPI",      icon: "bi-server",          level: 90 },
  { name: "Next.js",     icon: "bi-node-plus",       level: 85 },
  { name: "Vue.js",     icon: "bi-node-plus",       level: 75 },
  { name: "MySQL",       icon: "bi-database",        level: 78 },
  { name: "Java",        icon: "bi-cup-hot",         level: 55 },
  { name: "Git & GitHub",icon: "bi-git",             level: 90 },
  { name: "REST APIs",   icon: "bi-cloud-arrow-up",  level: 85 },
  { name: "MCP",   icon: "bi-cloud-arrow-up",  level: 85 },
  { name: "Cluade AI",   icon: "bi-cloud-arrow-up",  level: 85 },
];
 
const sc = document.getElementById("skills-container");
skills.forEach((s, i) => {
  const delay = (i % 4) * 0.08;
  sc.innerHTML += `
  <div class="col-sm-6 col-lg-4">
    <div class="skill-pill reveal" style="transition-delay:${delay}s">
      <div class="skill-icon-wrap"><i class="bi ${s.icon}"></i></div>
      <span>${s.name}</span>
      <div class="skill-bar-wrap">
        <div class="skill-bar"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
        <span style="font-size:.7rem;color:var(--muted);width:28px;text-align:right">${s.level}%</span>
      </div>
    </div>
  </div>`;
});
 
// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-bar-fill').forEach(b => {
        b.style.width = b.dataset.level + '%';
      });
    }
  });
}, { threshold: .15 });
reveals.forEach(r => observer.observe(r));
 
// Animate skill bars on scroll into view
document.querySelectorAll('.skill-bar-fill').forEach(b => {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { b.style.width = b.dataset.level + '%'; }
  }, { threshold: .5 });
  obs.observe(b);
});
 
// ── ACTIVE NAV HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sidebar-nav a');
window.addEventListener('scroll', () => {
  const pos = window.scrollY + 200;
  sections.forEach(s => {
    const top = s.offsetTop, bot = top + s.offsetHeight;
    navLinks.forEach(a => {
      if (a.getAttribute('href') === '#' + s.id) {
        a.classList.toggle('active', pos >= top && pos < bot);
      }
    });
  });
}, { passive: true });
 
// ── MOBILE MENU ──
document.getElementById('hamburgerBtn').onclick = () => {
  document.getElementById('mobileMenu').classList.add('open');
  document.getElementById('overlay').classList.add('open');
};
document.getElementById('closeMenu').onclick = () => {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
};
document.getElementById('overlay').onclick = () => {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
};
document.querySelectorAll('#mobileMenu a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
  });
});
 
// ── AI ASSISTANT ──
const PORTFOLIO_CONTEXT = `You are Ajay E's personal AI portfolio assistant. Answer questions about Ajay based ONLY on this information:
 
NAME: Ajay E (E. Ajay)
LOCATION: Coimbatore, Tamil Nadu, India
EMAIL: ajayelango54@gmail.com
PHONE: +91 9342198948
GITHUB: https://github.com/Ajay122003
LINKEDIN: https://www.linkedin.com/in/ajay-e9342198948
 
EDUCATION:
- B.E. Electronics and Communication Engineering, Adithya Institute of Technology (2021-2025), CGPA: 7.25
- Higher Secondary, St Francis Higher Secondary School (2021), 80%
- SSLC, St Francis (2019), 82%
 
SKILLS: HTML, CSS, JavaScript, React.js, Bootstrap, Python, Django, Node.js, MySQL, Java, Git/GitHub, REST APIs
 
PROJECTS:
1. Smart Restaurant Ordering System (Django, React, MySQL) - github.com/Ajay122003/Smart-Restaurant-Ordering-System
2. Fashion E-commerce Platform (React, Node.js)
3. BloodLink: Blood Bank Finder (Python, Django, Maps API) - github.com/Ajay122003/BloodLink-Blood-Bank-Finder
4. Python OOPs Programs (Python) - github.com/Ajay122003/Python-OOPs-Programs
5. Task Management System (Django, JS, MySQL) - github.com/Ajay122003/Task-Management-System
 
CERTIFICATIONS:
- Python Full Stack Course, CareerLadder Institute (May-Aug 2025)
- IoT, Novitech Pvt. Ltd. (Apr 2024)
- IoT & Robotics, Rinex Technologies (Jun 2024)
- Connecting Devices with Cloud workshop, Novitech (Feb 2024)
- Frontend Workshop, Skyy Skill (Jul 2025)
 
INTERNSHIP: Python Full Stack Developer Intern at CareerLadder Institute (2024)
 
AVAILABILITY: Open to full-time roles, internships, and freelance projects as a Full Stack Developer.
 
Keep responses SHORT (2-3 sentences max), friendly, and helpful. If asked something not covered above, say you don't have that info but Ajay can be reached at ajayelango54@gmail.com.`;
 
async function askAI(question) {
  const chatArea = document.getElementById('chatArea');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'ai-msg bot typing';
  chatArea.appendChild(typingDiv);
  chatArea.scrollTop = chatArea.scrollHeight;
 
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: PORTFOLIO_CONTEXT,
        messages: [{ role: 'user', content: question }]
      })
    });
    const data = await res.json();
    typingDiv.classList.remove('typing');
    typingDiv.textContent = data.content?.[0]?.text || "Sorry, I couldn't get a response. Please try again!";
  } catch (err) {
    typingDiv.classList.remove('typing');
    typingDiv.textContent = 'Hmm, something went wrong. You can reach Ajay directly at ajayelango54@gmail.com!';
  }
  chatArea.scrollTop = chatArea.scrollHeight;
}
 
document.getElementById('aiSend').onclick = () => {
  const inp = document.getElementById('aiInput');
  const q = inp.value.trim();
  if (!q) return;
  const chatArea = document.getElementById('chatArea');
  const userMsg = document.createElement('div');
  userMsg.className = 'ai-msg user';
  userMsg.textContent = q;
  chatArea.appendChild(userMsg);
  inp.value = '';
  chatArea.scrollTop = chatArea.scrollHeight;
  askAI(q);
};
 
document.getElementById('aiInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('aiSend').click();
});
 
document.querySelectorAll('.ai-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const q = chip.dataset.q;
    const chatArea = document.getElementById('chatArea');
    const userMsg = document.createElement('div');
    userMsg.className = 'ai-msg user';
    userMsg.textContent = q;
    chatArea.appendChild(userMsg);
    chatArea.scrollTop = chatArea.scrollHeight;
    askAI(q);
  });
});