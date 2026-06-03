import React, { useState, useEffect } from 'react';
import ProjectsSection from './ProjectsSection';
import CertificationsSection from './CertificationsSection';
import TrainingSection from './TrainingSection';
import './App.css';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState(false);

  // Typing animation state for the Hero section role title
  const roles = ["AI Architect", "AI and ML Engineer", "Full Stack Developer", "Data Analytics"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setTypingText(fullText.substring(0, typingText.length + 1));
        setTypingSpeed(100);

        if (typingText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setTypingText(fullText.substring(0, typingText.length - 1));
        setTypingSpeed(50);

        if (typingText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(200);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, roleIndex, typingSpeed]);

  // Trigger skill progress bars animation when they enter screen
  useEffect(() => {
    const handleScroll = () => {
      const skillsSec = document.getElementById('skills');
      if (skillsSec) {
        const rect = skillsSec.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleSkills(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const skillCategories = [
    {
      label: 'AI & Machine Learning',
      icon: '🤖',
      skills: [
        { name: 'Generative AI', logo: 'https://cdn.simpleicons.org/openai/d946ef', fallback: '🧠' },
        { name: 'GPT / LLMs', logo: 'https://cdn.simpleicons.org/openai/f5c542', fallback: '💬' },
        { name: 'Llama', logo: 'https://cdn.simpleicons.org/meta/d946ef', fallback: '🦙' },
        { name: 'Prompt Eng.', logo: 'https://cdn.simpleicons.org/googlegemini/f5c542', fallback: '✨' },
        { name: 'Deep Learning', logo: 'https://cdn.simpleicons.org/pytorch/d946ef', fallback: '🔬' },
        { name: 'NLP', logo: 'https://cdn.simpleicons.org/spacy/f5c542', fallback: '📝' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', fallback: '🔢' },
        { name: 'scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg', fallback: '📊' },
        { name: 'RAG', logo: 'https://cdn.simpleicons.org/databricks/d946ef', fallback: '🗂️' },
        { name: 'LangChain', logo: 'https://cdn.simpleicons.org/langchain/f5c542', fallback: '⛓️' },
        { name: 'LangGraph', logo: 'https://cdn.simpleicons.org/langchain/d946ef', fallback: '🕸️' },
      ],
    },
    {
      label: 'Languages & Frameworks',
      icon: '⚡',
      skills: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', fallback: '🐍' },
        { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', fallback: '🎸' },
        { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', fallback: '🧪' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', fallback: '⚛️' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', fallback: '🌐' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', fallback: '🎨' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', fallback: '💛' },
        { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', fallback: '🍃' },
        { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs.svg', fallback: '⚡' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', fallback: '🍃' },
        { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', fallback: '⚡' },
        { name: 'REST APIs', logo: 'https://cdn.simpleicons.org/fastapi/d946ef', fallback: '🔌' },
      ],
    },
    {
      label: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', fallback: '🐘' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', fallback: '🐬' },
        { name: 'SQL', logo: 'https://cdn.simpleicons.org/sqlite/f5c542', fallback: '📋' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', fallback: '🍃' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', fallback: '🔥' },
      ],
    },
    {
      label: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', fallback: '🌿' },
        { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/ffffff', fallback: '🐙' },
        { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman/d946ef', fallback: '📮' },
        { name: 'Power BI', logo: 'https://cdn.simpleicons.org/powerbi/f5c542', fallback: '📈' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', fallback: '🐳' },
      ],
    },
  ];

  return (
    <>
      {/* Navigation Header */}
      <header className="header">
        <div className="navContainer">
          <a href="#" className="logo">
            VEENA<span>.AI</span>
          </a>
          <nav className="navLinks">
            <a href="#about" className="navLink">About</a>
            <a href="#education" className="navLink">Education</a>
            <a href="#skills" className="navLink">Skills</a>
            <a href="#projects" className="navLink">Projects</a>
            <a href="#certifications" className="navLink">Certs</a>
            <a href="#training" className="navLink">Training</a>
            <a href="#references" className="navLink">References</a>
            <a href="#contact" className="navLink">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Theme Wrapper */}
      <div className="appContainer">
        
        {/* 1. HOME / HERO SECTION (DARK, bg #1a0518) */}
        <section id="about" className="portfolioSection sec-hero heroSection">
          
          {/* Subtle neural network background and dark depth masks */}
          <div className="heroBgImage" />
          <div className="heroBgMask" />
          
          <div className="paddedContent">
            <div className="ambientGlow" />
            
            <div className="heroContentWrapper">
              
              {/* Left column - Content */}
              <div className="heroLeft">
                <h1 className="heroTitle">Veena <span>Kulkarni</span></h1>
                <h5 className="heroRole">{typingText}<span className="typingCursor">|</span></h5>
                <p className="heroSubtitle">
                  Hi, I'm Veena Kulkarni. I engineer state-of-the-art multilingual LLM pipelines, 
                  multi-agent workflow builders, and highly interactive AI learning interfaces, 
                  blending cinematic precision with high-performance code.
                </p>
                <div className="heroCTA">
                  <a 
                    href="/veena-kulkarni-resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btnResumeSquare"
                  >
                    Resume 📄
                  </a>
                </div>
              </div>

              {/* Right column - Square Avatar */}
              <div className="heroRight">
                <div className="avatarSquare">
                  <img 
                      src="/vkimage.jpeg" 
                      alt="Veena Kulkarni Profile Portrait" 
                    />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. EDUCATION SECTION (DARK, bg #1a0518, Double-Helix Timeline) */}
        <section id="education" className="portfolioSection sec-education">
          <div className="paddedContent">
            <span className="sectionLabel">// Academic Milestones //</span>
            <h2 className="sectionHeading" style={{ fontWeight: 900 }}><span style={{ color: '#f5c542' }}>Academic</span> <span style={{ color: '#d946ef' }}>Journey</span></h2>
            
            <div className="timelineContainer">
              
              {/* Central Helix Timeline */}
              <div className="timelineTrack">
                <svg className="timelineHelixSvg" viewBox="0 0 100 1000" preserveAspectRatio="none">
                  <path 
                    d="M 50,0 Q 15,125 50,250 T 50,500 T 50,750 T 50,1000" 
                    stroke="var(--accent)" 
                    strokeWidth="3" 
                    strokeDasharray="6, 6" 
                    fill="none" 
                    opacity="0.8"
                  />
                  <path 
                    d="M 50,0 Q 85,125 50,250 T 50,500 T 50,750 T 50,1000" 
                    stroke="var(--primary)" 
                    strokeWidth="3" 
                    strokeDasharray="6, 6" 
                    fill="none" 
                    opacity="0.8"
                  />
                </svg>
                
                {/* Timeline Nodes */}
                <div className="timelineNode gold" style={{ top: '12.5%' }}>terminal</div>
                <div className="timelineNode" style={{ top: '50%' }}>architecture</div>
                <div className="timelineNode gold" style={{ top: '87.5%' }}>science</div>
              </div>

              {/* Row 1: B.Tech in Computer Science */}
              <div className="timelineRow">
                <div className="timelineColLeft">
                  <span className="timelineFloatLabel gold">Undergraduate</span>
                </div>
                <div className="timelineColRight">
                  <div className="eduCard primary-accent">
                    <span className="eduCardOutlineNo">18</span>
                    <div className="eduCardContent">
                      <h3 className="eduCardTitle">B.Tech in Computer Science</h3>
                      <span className="eduCardInstitution">SKN Sinhgad College of Engineering Korti, Pandharpur</span>
                      <p className="eduCardDesc">
                        Pursuing Bachelor of Technology with a focus on core engineering and software development.
                      </p>
                      <span className="eduCardBadge">CGPA: 9.50</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Higher Secondary / Class 12th */}
              <div className="timelineRow">
                <div className="timelineColLeft">
                  <div className="eduCard secondary-accent">
                    <span className="eduCardOutlineNo">14</span>
                    <div className="eduCardContent">
                      <h3 className="eduCardTitle">Higher Secondary / Class 12th</h3>
                      <span className="eduCardInstitution">Shri Vithal Prashala & Jr. College, Venunagar</span>
                      <p className="eduCardDesc">
                        Focused on PCM (Physics, Chemistry, Maths) during higher secondary education.
                      </p>
                      <span className="eduCardBadge">Score: 77.50%</span>
                    </div>
                  </div>
                </div>
                <div className="timelineColRight">
                  <span className="timelineFloatLabel">Secondary Education</span>
                </div>
              </div>

              {/* Row 3: Secondary School / Class 10th */}
              <div className="timelineRow">
                <div className="timelineColLeft">
                  <span className="timelineFloatLabel gold">Primary Foundation</span>
                </div>
                <div className="timelineColRight">
                  <div className="eduCard primary-accent">
                    <span className="eduCardOutlineNo">12</span>
                    <div className="eduCardContent">
                      <h3 className="eduCardTitle">Secondary School / Class 10th</h3>
                      <span className="eduCardInstitution">D.H.Kawathekar Prashala Pandharpur</span>
                      <p className="eduCardDesc">
                        Completed secondary education with a perfect score in mathematics and science.
                      </p>
                      <span className="eduCardBadge">Score: 100%</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. SKILLS SECTION (DARK, bg #1e0a1e) */}
        <section id="skills" className="portfolioSection sec-skills">
          <div className="skillsBgImage" />
          <div className="skillsBgMask" />
          
          <div className="paddedContent">
            <span className="sectionLabel">// Core Competencies //</span>
            <h2 className="sectionHeading" style={{ color: '#ffffff', fontWeight: 900 }}>Technical <span style={{ color: 'var(--primary)' }}>Skills</span></h2>
            <div className="skillCategoriesGrid">
              {skillCategories.map((cat, ci) => (
                <div key={ci} className="skillCategory">
                  <div className="skillCategoryHeader">
                    <span className="skillCategoryIcon">{cat.icon}</span>
                    <span className="skillCategoryLabel">{cat.label}</span>
                  </div>
                  <div className="skillIconsRow">
                    {cat.skills.map((skill, si) => (
                      <div key={si} className="skillBadge" title={skill.name}>
                        <div className="skillCircle">
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="skillLogo"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <span className="skillFallback" style={{ display: 'none' }}>{skill.fallback}</span>
                        </div>
                        <span className="skillBadgeName">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PROJECTS SECTION (DARKEST, bg #0d0012) */}
        <div className="portfolioSection sec-projects">
          <ProjectsSection />
        </div>

        {/* 5. CERTIFICATIONS SECTION */}
        <CertificationsSection />

        {/* 6. TRAINING SECTION */}
        <TrainingSection />

        {/* 7. REFERENCES SECTION (DARK/LIGHT, bg #fdf4ff) */}
        <section id="references" className="portfolioSection sec-references">
          <div className="paddedContent">
            <span className="sectionLabel" style={{ color: '#d946ef' }}>// References //</span>
            <h2 className="sectionHeading" style={{ color: '#ffffff', fontWeight: 900 }}><span style={{ color: '#d946ef' }}>References</span></h2>
            <div className="referencesGrid">
              
              {/* Reference 1: Sameer Katekar */}
              <div className="referenceCard">
                <div className="refIcon">👔</div>
                <h3 className="refName">Sameer Katekar</h3>
                <div className="refDesignation">Training & Placement Officer</div>
                <div className="refInstitution">SKN Sinhgad College of Engineering, Pandharpur</div>
                <a href="tel:+918308614875" className="refPhone">
                  <span>📞</span> +91 83086 14875
                </a>
              </div>

              {/* Reference 2: Sandeep Linge */}
              <div className="referenceCard">
                <div className="refIcon">👨‍🏫</div>
                <h3 className="refName">Sandeep Linge</h3>
                <div className="refDesignation">Training & Placement Coordinator (CSE)</div>
                <div className="refInstitution">SKN Sinhgad College of Engineering, Pandharpur</div>
                <a href="tel:+919284020948" className="refPhone">
                  <span>📞</span> +91 92840 20948
                </a>
              </div>

              {/* Reference 3: Subhash Pingale */}
              <div className="referenceCard">
                <div className="refIcon">🏛️</div>
                <h3 className="refName">Subhash Pingale</h3>
                <div className="refDesignation">Head of Department (CSE)</div>
                <div className="refInstitution">SKN Sinhgad College of Engineering, Pandharpur</div>
                <a href="tel:+919975560358" className="refPhone">
                  <span>📞</span> +91 99755 60358
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 8. CONTACT SECTION (DARK, bg #1a0518 - mirrors Hero) */}
        <section id="contact" className="portfolioSection sec-contact">
          <div className="paddedContent">
            <span className="sectionLabel">// Let's Build Together //</span>
            <h2 className="sectionHeading" style={{ color: '#ffffff', fontWeight: 900, marginBottom: '60px' }}>Let's Build <span style={{ color: 'var(--primary)' }}>Something</span></h2>

            <div className="contactLayout">
              
              {/* LEFT: Contact Info */}
              <div className="contactInfoCol">
                <p className="contactInfoIntro">Have a project in mind? Reach out through any of these channels and let's create something remarkable together.</p>
                
                <div className="contactInfoCards">
                  
                  <a href="https://linkedin.com/in/veena-kulkarni-6a96822aa" target="_blank" rel="noopener noreferrer" className="contactInfoCard">
                    <div className="contactInfoIcon">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="contactInfoText">
                      <span className="contactInfoLabel">LinkedIn</span>
                      <span className="contactInfoValue">veena-kulkarni-6a96822aa</span>
                    </div>
                  </a>

                  <a href="https://github.com/vk460" target="_blank" rel="noopener noreferrer" className="contactInfoCard">
                    <div className="contactInfoIcon">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </div>
                    <div className="contactInfoText">
                      <span className="contactInfoLabel">GitHub</span>
                      <span className="contactInfoValue">github.com/vk460</span>
                    </div>
                  </a>

                  <a href="mailto:veena.kulkarni.sknscoe.comp@gmail.com" className="contactInfoCard">
                    <div className="contactInfoIcon">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                      </svg>
                    </div>
                    <div className="contactInfoText">
                      <span className="contactInfoLabel">Email</span>
                      <span className="contactInfoValue">veena.kulkarni.sknscoe.comp@gmail.com</span>
                    </div>
                  </a>

                  <a href="tel:+91808791329" className="contactInfoCard">
                    <div className="contactInfoIcon">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div className="contactInfoText">
                      <span className="contactInfoLabel">Phone</span>
                      <span className="contactInfoValue">+91 80879 1329</span>
                    </div>
                  </a>

                </div>
              </div>

              {/* RIGHT: Contact Form */}
              <div className="contactFormCol">
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                  <div className="formGroup">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder=" "
                      className="inputField"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <label className="inputLabel">Your Name</label>
                  </div>

                  <div className="formGroup">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder=" "
                      className="inputField"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <label className="inputLabel">Your Email</label>
                  </div>

                  <div className="formGroup">
                    <textarea
                      name="message"
                      required
                      rows="4"
                      placeholder=" "
                      className="inputField"
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{ resize: 'none' }}
                    />
                    <label className="inputLabel">Your Project Vision</label>
                  </div>

                  <button type="submit" className="btnPrimary formBtn">
                    {submitted ? 'Message Sent ✓' : 'Send Message ↗'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer sec-hero">
          <p className="footerText">
            © {new Date().getFullYear()} VEENA KULKARNI. ALL RIGHTS RESERVED. CINEMATIC TECHNICALISM.
          </p>
        </footer>

      </div>
    </>
  );
}
