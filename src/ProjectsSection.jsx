import React, { useState, useEffect, useRef } from 'react';
import { projects } from './projectsData';
import styles from './projects.module.css';

// SVG Camera Icon for placeholders
const CameraIcon = () => (
  <svg
    className={styles.placeholderIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

// Individual Project block to manage self-contained state
const ProjectBlock = ({ project, index }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const blockRef = useRef(null);
  const timerRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // References for the 5 scroll zones
  const zoneRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Text Trigger Animation: On activeImg change, trigger the stagger animation
  useEffect(() => {
    setAnimate(false);
    const delay = setTimeout(() => {
      setAnimate(true);
    }, 40); // 40ms wait as specified
    return () => clearTimeout(delay);
  }, [activeImg]);

  // TRIGGER 1 — AUTO TIMER & PROGRESS BAR
  useEffect(() => {
    // Determine speed: 4s on mobile, 5s on desktop
    const duration = isMobile ? 4000 : 5000;
    const intervalTick = 50; // Update progress bar every 50ms

    if (timerRef.current) clearInterval(timerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    setProgress(0);

    // If mouse is hovering over the block on desktop, pause the timer
    if (isHovered && !isMobile) {
      return;
    }

    // Progress bar updater
    let elapsed = 0;
    progressIntervalRef.current = setInterval(() => {
      elapsed += intervalTick;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
    }, intervalTick);

    // Auto image swapper
    timerRef.current = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % 5);
    }, duration);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [activeImg, isHovered, isMobile]);

  // TRIGGER 2 — SCROLL POSITION (INTERSECTION OBSERVER)
  useEffect(() => {
    if (isMobile) return; // Disable scroll-driven image switching on mobile

    const observers = [];

    zoneRefs.forEach((ref, zoneIndex) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveImg(zoneIndex);
          }
        },
        {
          threshold: 0.5, // 50% viewport visibility threshold
          rootMargin: '-5% 0px -5% 0px', // slight margins to avoid edge flickering
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isMobile]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={blockRef}
      className={`${styles.projectBlock} ${isEven ? styles.zigzagEven : styles.zigzagOdd}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE PANEL (Sticky on Desktop) */}
      <div className={styles.imagePanel}>
        {project.images.map((imgSrc, imgIdx) => (
          <div
            key={imgIdx}
            className={`${styles.projectImage} ${activeImg === imgIdx ? styles.imageActive : ''}`}
          >
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={`${project.name} slide ${imgIdx + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div className={styles.placeholderDiv}>
                <CameraIcon />
                <div className={styles.placeholderText}>
                  Image {imgIdx + 1} of 5 — Add your project screenshot here
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Cinematic gradient overlay */}
        <div className={isEven ? styles.overlayEven : styles.overlayOdd} />

        {/* Dot indicators at the bottom */}
        <div className={`${styles.dotContainer} ${isEven ? styles.dotsLeft : styles.dotsRight}`}>
          {Array.from({ length: 5 }).map((_, dotIdx) => (
            <div
              key={dotIdx}
              onClick={() => setActiveImg(dotIdx)}
              className={`${styles.dot} ${activeImg === dotIdx ? styles.dotActive : styles.dotInactive}`}
            />
          ))}
        </div>

        {/* Gold progress bar indicating timing */}
        {!isMobile && (
          <div
            className={`${styles.progressBar} ${isEven ? styles.progressLeft : styles.progressRight}`}
            style={{ height: `${progress}%` }}
          />
        )}
      </div>

      {/* CONTENT PANEL */}
      <div className={styles.contentPanel}>
        
        {/* Zone 0: Project Overview */}
        <div ref={zoneRefs[0]} className={styles.scrollZone}>

          <span className={`${styles.categoryBadge} ${styles.animItem} ${animate ? styles.animItemVisible : ''} ${styles.stagger0}`}>
            {project.category}
          </span>

          <h3 className={`${styles.projectTitle} ${styles.animItem} ${animate ? styles.animItemVisible : ''} ${styles.stagger1}`}>
            <span style={{ color: 'var(--primary)' }}>{project.name.split(' ')[0]}</span>{' '}
            <span style={{ 
              background: 'linear-gradient(90deg, #d946ef, #9333ea)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
              }}>
              {project.name.split(' ').slice(1).join(' ')}
            </span>
          </h3>

          <p className={`${styles.description} ${styles.animItem} ${animate ? styles.animItemVisible : ''} ${styles.stagger2}`}>
            {project.description}
          </p>

          <div className={`${styles.tagContainer} ${styles.animItem} ${animate ? styles.animItemVisible : ''} ${styles.stagger3}`}>
            {project.stack.map((item, stackIdx) => (
              <span
                key={stackIdx}
                className={`${styles.tag} ${item.highlight ? styles.tagHighlighted : ''}`}
              >
                {item.label}
              </span>
            ))}
          </div>

          <div className={`${styles.buttonContainer} ${styles.animItem} ${animate ? styles.animItemVisible : ''} ${styles.stagger4}`}>
            <a href={project.liveUrl} className={styles.btnPrimary}>
              View Project &nbsp;↗
            </a>
            <a href={project.githubUrl} className={styles.btnSecondary}>
              GitHub &nbsp;↗
            </a>
          </div>
        </div>

        {/* Zones 1, 2, 3, 4: Feature Details */}
        {project.features.map((feature, featIdx) => (
          <div
            key={featIdx}
            ref={zoneRefs[featIdx + 1]}
            className={`${styles.scrollZone} ${styles.featureZone}`}
          >
            <div className={styles.pill}>
              {feature.label || `Feature ${featIdx + 2} of 5`}
            </div>
            <div className={styles.line} />
            <h4 className={styles.featureHeading}>{feature.title}</h4>
            <div 
              className={styles.featureDetail}
              dangerouslySetInnerHTML={{ __html: feature.detail }}
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.sectionLabel}>// Our Projects //</div>
      <h2 className={styles.sectionHeading} style={{ color: '#ffffff', fontWeight: 900 }}>Work That <span style={{ color: 'var(--primary)' }}>Speaks.</span></h2>
      
      {projects.map((project, idx) => (
        <ProjectBlock key={project.id} project={project} index={idx} />
      ))}
    </section>
  );
}
