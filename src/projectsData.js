// projectsData.js

export const projects = [
  {
    id: 1,
    number: '01',
    name: 'UniPrep Analyzer',
    category: 'AI · EdTech',
    description: 'UniPrep helps engineering students prepare for exams efficiently. It scans past university question papers to identify recurring patterns, ranks topics by importance, and uses Gemini AI to answer predicted questions, turning study prep into an interactive experience.',
    images: [
      '/project-images/uniprep/img1.PNG',
      '/project-images/uniprep/img2.PNG',
      '/project-images/uniprep/img3.PNG',
      '/project-images/uniprep/img4.PNG',
      '/project-images/uniprep/img5.PNG'
    ],
    features: [
      {
        label: 'Section 2 // Technical Stack',
        title: 'Decoupled Multi-Model Stack',
        detail: `
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:18px; margin-top:16px;">
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase; display:block; margin-bottom:8px;">Frontend:</strong>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <span style="font-size:16px; font-weight:800; color:#ffffff;">React (v18)</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">React Router DOM (v6)</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">TailwindCSS & PostCSS</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Vite</span>
              </div>
            </div>
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase; display:block; margin-bottom:8px;">Backend & Database:</strong>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Django (v4.2) & DRF</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">SQLite</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">MongoDB</span>
              </div>
            </div>
            <div style="grid-column: span 2;">
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase; display:block; margin-bottom:8px;">AI & Data Science:</strong>
              <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Pandas & NumPy</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Scikit-Learn (Random Forest)</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Sentence Transformers & KeyBERT</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Google Gemini API</span>
              </div>
            </div>
          </div>
        `
      },
      {
        label: 'Section 3 // Core Features',
        title: 'Personalized Dashboards',
        detail: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Secure Login:</strong>
              <p style="margin:4px 0 0 0;">Students can safely sign up, log in, and save their study preferences.</p>
            </div>
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Custom Subject Lists:</strong>
              <p style="margin:4px 0 0 0;">Allows students to choose their engineering branch (like Computer Science, Electrical, or Mechanical) to see relevant subjects immediately.</p>
            </div>
          </div>
        `
      },
      {
        label: 'Section 4 // Core Features',
        title: 'Exam Predictions & AI Tutor',
        detail: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">AI Question Predictor:</strong>
              <p style="margin:4px 0 0 0;">Finds patterns in older question papers to predict which questions are most likely to appear next.</p>
            </div>
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Dynamic Past Paper & Concept Map:</strong>
              <p style="margin:4px 0 0 0;">Analyzes the past 5 years of exam papers to detect recurring exam patterns, cyclical trends, and map core concept distributions.</p>
            </div>
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Gemini AI Assistant:</strong>
              <p style="margin:4px 0 0 0;">Answers student questions instantly and tailors explanations to the difficulty level of the topic.</p>
            </div>
          </div>
        `
      },
      {
        label: 'Section 5 // Project Outcomes',
        title: 'Student Benefits',
        detail: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Saves Study Time:</strong>
              <p style="margin:4px 0 0 0;">Helps students ignore less important details and focus revision on high-priority topics.</p>
            </div>
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Active Study Tools:</strong>
              <p style="margin:4px 0 0 0;">Turns static past papers into conversation-driven study sheets with an interactive AI tutor.</p>
            </div>
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Fast & Scalable:</strong>
              <p style="margin:4px 0 0 0;">Built using Django and MongoDB to store large amounts of study material while keeping page loads incredibly fast.</p>
            </div>
          </div>
        `
      }
    ],
    stack: [
      { label: 'React', highlight: true },
      { label: 'TailwindCSS', highlight: false },
      { label: 'Django REST', highlight: true },
      { label: 'MongoDB', highlight: false },
      { label: 'Gemini API', highlight: true },
      { label: 'Scikit-Learn', highlight: false }
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    number: '02',
    name: 'EduVerse Workspace',
    category: 'AI · 3D Learning',
    description: 'EduVerse is a unified workspace that helps students prepare for job placements. Instead of jumping between multiple websites, students can practice aptitude tests, summarize PDFs, write emails, optimize resumes, and practice mock interviews in a single application.',
    images: [
      '/project-images/eduverse/edu1.jfif',
      '/project-images/eduverse/edu2.jfif',
      '/project-images/eduverse/edu3.jfif',
      '/project-images/eduverse/edu4.jfif',
      '/project-images/eduverse/edu5.jfif'
    ],
    features: [
      {
        label: 'Section 2 // Technical Stack',
        title: 'Quantum Cinema Tech Stack',
        detail: `
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:18px; margin-top:16px;">
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase; display:block; margin-bottom:8px;">Frontend:</strong>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <span style="font-size:16px; font-weight:800; color:#ffffff;">React 19 & Vite</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">TypeScript</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Tailwind CSS & Vanilla CSS</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Spline & Three.js</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">React Three Fiber & GSAP</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Recharts & Mermaid.js</span>
              </div>
            </div>
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase; display:block; margin-bottom:8px;">Backend & Database:</strong>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <span style="font-size:16px; font-weight:800; color:#ffffff;">FastAPI & Python 3.10+</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Uvicorn</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Socket.io</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">PostgreSQL & SQLModel</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">PyMuPDF & Pillow</span>
              </div>
            </div>
            <div style="grid-column: span 2;">
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase; display:block; margin-bottom:8px;">AI & Inference Models:</strong>
              <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Google Gemini SDK</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">OpenRouter APIs (GPT-4o-mini)</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Ollama Offline Inference</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Custom Adaptor safetensors</span>
              </div>
            </div>
          </div>
        `
      },
      {
        label: 'Section 3 // Core Features',
        title: 'Mock Interviews & Aptitude Practice',
        detail: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">AI Interview Coach:</strong>
              <ul style="margin:4px 0 0 16px; padding:0; list-style-type:circle; display:flex; flex-direction:column; gap:3px;">
                <li><strong>3D Avatars:</strong> Animated 3D characters speak to the student with natural mouth movements.</li>
                <li><strong>Practice Loop:</strong> Simulates realistic job interviews, analyzes student answers, and provides performance feedback.</li>
                <li><strong>Voice Commands:</strong> Wake-word activation and voice-to-text make the experience fully conversational.</li>
              </ul>
            </div>
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Aptitude Trainer:</strong>
              <ul style="margin:4px 0 0 16px; padding:0; list-style-type:circle; display:flex; flex-direction:column; gap:3px;">
                <li><strong>Smart Tests:</strong> Automatically generates math and logic problems tailored to the student's skill level.</li>
                <li><strong>Fun Progress:</strong> Award points (XP) as students complete challenges to keep motivation high.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        label: 'Section 4 // Core Features',
        title: 'AI Study & Writing Assistants',
        detail: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">PDF Document Summarizer:</strong>
              <p style="margin:4px 0 0 0;">Summarizes long documents, extracts key insights, creates practice quizzes, and draws visual flowcharts.</p>
            </div>
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Research Paper Assistant:</strong>
              <p style="margin:4px 0 0 0;">Helps outline research papers, search academic sources, and generate formatted bibliographies.</p>
            </div>
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Resume & Email Builder:</strong>
              <p style="margin:4px 0 0 0;">Writes professional emails and checks resumes against job descriptions to score how well they match.</p>
            </div>
          </div>
        `
      },
      {
        label: 'Section 5 // Key Outcomes',
        title: 'Key Benefits',
        detail: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">All-in-One Hub:</strong>
              <p style="margin:4px 0 0 0;">Combines test practice, resume builders, and interview prep in one single website.</p>
            </div>
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Better Interview Prep:</strong>
              <p style="margin:4px 0 0 0;">Realistic voice and visual feedback prepare students for real-world job interviews and build confidence.</p>
            </div>
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Saves Time:</strong>
              <p style="margin:4px 0 0 0;">Automates citations, summaries, flowchart drawings, and emails to let students focus on learning.</p>
            </div>
          </div>
        `
      }
    ],
    stack: [
      { label: 'FastAPI', highlight: true },
      { label: 'React 19', highlight: true },
      { label: 'Three.js', highlight: false },
      { label: 'Live2D', highlight: true },
      { label: 'Ollama', highlight: false },
      { label: 'PostgreSQL', highlight: false }
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    number: '03',
    name: 'Village Services',
    category: 'Django · Social Impact',
    description: 'Village Services connects skilled local workers (like plumbers, electricians, and cooks) with job recruiters in their area. It features secure payments, AI-powered job matching, and a direct messaging system to help both sides collaborate safely.',
    images: [
      '/project-images/localfreelancer/free1.jfif',
      '/project-images/localfreelancer/free2.jfif',
      '/project-images/localfreelancer/free%203.jfif',
      '/project-images/localfreelancer/free%204.jfif',
      '/project-images/localfreelancer/free5.jfif'
    ],
    features: [
      {
        label: 'Section 2 // Technical Stack',
        title: 'Full-Stack Social Impact Stack',
        detail: `
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:18px; margin-top:16px;">
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase; display:block; margin-bottom:8px;">Backend & Deploy:</strong>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Python</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Django 4.2 & Gunicorn</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">WhiteNoise Static</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Heroku & Render Deploy</span>
              </div>
            </div>
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase; display:block; margin-bottom:8px;">Database & Frontend:</strong>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <span style="font-size:16px; font-weight:800; color:#ffffff;">MongoDB (djongo & PyMongo)</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">PostgreSQL-Ready</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">HTML5, CSS3, & JS</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Tailwind CSS</span>
              </div>
            </div>
            <div style="grid-column: span 2;">
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase; display:block; margin-bottom:8px;">APIs, Payments, & AI:</strong>
              <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Google Gemini 2.0 Flash API</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Razorpay & UPI Payments</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">QR Code Escrows</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">Coursera, Udemy & LinkedIn Learning APIs</span>
                <span style="font-size:16px; font-weight:800; color:#ffffff;">ServSafe & NECA Standards</span>
              </div>
            </div>
          </div>
        `
      },
      {
        label: 'Section 3 // Core Features',
        title: 'Secure Local Job Marketplace',
        detail: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Simple Hiring:</strong>
              <p style="margin:4px 0 0 0;">Recruiters post details about jobs (pay, location, hours), and local workers apply with their rates.</p>
            </div>
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Safe Payments:</strong>
              <p style="margin:4px 0 0 0;">Payments are locked securely in escrow. Workers upload before/after photos of their work to release the payment safely.</p>
            </div>
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Direct Chatting:</strong>
              <p style="margin:4px 0 0 0;">Built-in messaging allows workers and recruiters to talk directly, discuss terms, and coordinate work.</p>
            </div>
          </div>
        `
      },
      {
        label: 'Section 4 // Core Features',
        title: 'AI Matcher & Skill Learning',
        detail: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Smart Job Matcher:</strong>
              <p style="margin:4px 0 0 0;">Uses Gemini AI to match workers with the most relevant job postings based on their skills.</p>
            </div>
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Career Guidance:</strong>
              <p style="margin:4px 0 0 0;">AI suggests pricing structures, marketing templates, and seasonal business tips tailored to each worker's trade.</p>
            </div>
            <div>
              <strong style="color:var(--primary); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Online Courses:</strong>
              <p style="margin:4px 0 0 0;">Links workers to learning resources from Coursera, Udemy, and YouTube to help them earn trade certifications.</p>
            </div>
          </div>
        `
      },
      {
        label: 'Section 5 // Project Outcomes',
        title: 'Community Impact',
        detail: `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Before vs. After:</strong>
              <ul style="margin:4px 0 0 16px; padding:0; list-style-type:circle; display:flex; flex-direction:column; gap:3px;">
                <li><strong>Hiring:</strong> Relying on word-of-mouth ➔ Finding jobs online</li>
                <li><strong>Payments:</strong> Risk of unpaid cash ➔ Locked digital escrow payments</li>
                <li><strong>Disputes:</strong> No support ➔ Admin help to resolve issues</li>
                <li><strong>Growth:</strong> Single skills ➔ AI course suggestions and certifications</li>
              </ul>
            </div>
            <div>
              <strong style="color:var(--accent); font-family:var(--font-mono); font-size:12px; text-transform:uppercase;">Tracked Metrics:</strong>
              <p style="margin:4px 0 0 0;">Admin dashboards monitor jobs completed, earnings, and worker feedback to ensure high service quality.</p>
            </div>
          </div>
        `
      }
    ],
    stack: [
      { label: 'Django 4.2', highlight: true },
      { label: 'Razorpay', highlight: false },
      { label: 'MongoDB', highlight: true },
      { label: 'Gemini API', highlight: true },
      { label: 'Tailwind CSS', highlight: false },
      { label: 'AJAX Chat', highlight: false }
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    number: '04',
    name: 'Prompt Studio',
    category: 'AI · Developer Tooling',
    description: 'Prompt Studio is a specialized workspace for developers to write, test, and refine AI prompts. It includes version control, side-by-side comparison across models, and prompt performance metrics.',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop'
    ],
    features: [
      {
        title: 'Prompt Version Control',
        detail: 'Track variations and revert prompt updates instantly. Saves every change across different AI models.'
      },
      {
        title: 'Compare AI Models',
        detail: 'Run the same prompt simultaneously across GPT-4, Claude, and Gemini to compare formatting and answers side-by-side.'
      },
      {
        title: 'Performance Scoring',
        detail: 'Test prompt quality automatically with custom rules before launching them in apps.'
      },
      {
        title: 'Smart Caching',
        detail: 'Caches previous runs and suggests optimized prompt structures to reduce token costs.'
      }
    ],
    stack: [
      { label: 'Next.js', highlight: true },
      { label: 'Anthropic SDK', highlight: true },
      { label: 'PostgreSQL', highlight: false },
      { label: 'Vercel', highlight: false }
    ],
    liveUrl: '#',
    githubUrl: '#',
  }
];
