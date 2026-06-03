import React, { useState, useEffect, useRef } from 'react';
import styles from './certifications.module.css';
import { certificates } from './certificatesData';

const CertificationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [progressKey, setProgressKey] = useState(0);

  const totalCerts = certificates.length;

  useEffect(() => {
    setIsAnimating(false);
    setProgressKey(prev => prev + 1);

    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 50);

    return () => clearTimeout(animationTimer);
  }, [activeIndex]);

  useEffect(() => {
    const autoTimer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % totalCerts);
    }, 5000);

    return () => clearInterval(autoTimer);
  }, [activeIndex, totalCerts]);

  const handleNext = () => setActiveIndex(prev => (prev + 1) % totalCerts);
  const handlePrev = () => setActiveIndex(prev => (prev - 1 + totalCerts) % totalCerts);
  const handleDotClick = (index) => setActiveIndex(index);

  return (
    <section 
      id="certifications" 
      className={styles.sectionWrapper}
    >
      <div className={styles.sectionHeadingWrapper}>
        <div className={styles.sectionLabel}>// Certifications //</div>
        <h2 className={styles.sectionHeading} style={{ color: '#ffffff', fontWeight: 900 }}><span style={{ color: '#f5c542' }}>Certifications</span> That <span style={{ color: '#f5c542' }}>Count.</span></h2>
      </div>

      <div className={styles.carouselTrackWrapper}>
        <div 
          className={styles.slidingTrack}
          style={{ 
            width: `calc(100vw * ${totalCerts})`,
            transform: `translateX(calc(-100vw * ${activeIndex}))`
          }}
        >
          {certificates.map((cert, index) => {
            const isActive = index === activeIndex;
            const nextCert = certificates[(index + 1) % totalCerts];
            const inClass = (isActive && isAnimating) ? styles.in : '';

            return (
              <div key={cert.id} className={`${styles.certSlide} ${inClass}`}>
                
                {/* LEFT COLUMN: Number, Title, Desc */}
                <div className={styles.leftColumn}>
                  <div className={styles.outlineNumber}>
                    {cert.number}
                  </div>
                  <h3 className={styles.certTitle}>
                    <span style={{ color: 'var(--primary)' }}>{cert.title.split(' ')[0]}</span>{' '}
                    <span style={{ 
                      background: 'linear-gradient(90deg, #d946ef, #9333ea)', 
                      WebkitBackgroundClip: 'text', 
                      WebkitTextFillColor: 'transparent' 
                    }}>
                      {cert.title.split(' ').slice(1).join(' ')}
                    </span>
                  </h3>
                  <p className={styles.certDescription}>
                    {cert.description}
                  </p>
                  
                  <div className={styles.tagsRow}>
                    {cert.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`${styles.tag} ${
                          tagIndex < 2 ? styles.tagHighlighted : ''
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewTextLink}
                  >
                    View Certificate ↗
                  </a>
                </div>

                {/* RIGHT COLUMN: Image */}
                <div className={styles.rightColumn}>
                  <div className={styles.imageContainer}>
                    {cert.type === 'image' || cert.image ? (
                      <img src={cert.fileUrl || cert.image} alt={cert.title} className={styles.certFrame} />
                    ) : cert.type === 'pdf' ? (
                      <iframe 
                        src={`${cert.fileUrl}#view=Fit&toolbar=0&navpanes=0&scrollbar=0`}
                        title={cert.title}
                        className={styles.certFrame}
                        style={{ border: 'none', width: '100%', height: '100%' }}
                        scrolling="no"
                      />
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--primary)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ width: '64px', height: '64px', opacity: 0.3 }}
                        >
                          <circle cx="12" cy="8" r="6"></circle>
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                        </svg>
                        <span style={{ marginTop: '12px', fontSize: '13px', opacity: 0.5, color: 'var(--muted-foreground)' }}>
                          Document Preview
                        </span>
                      </div>
                    )}
                    {/* Realistic Golden Frame Overlay */}
                    <img 
                      src="/certificates/gold_frame_realistic.png" 
                      className={styles.frameOverlay} 
                      alt="" 
                    />
                  </div>
                </div>

                {/* RIGHT PEEK: Next number */}
                <div className={styles.nextNumberPeek}>
                  {nextCert.number}
                </div>

              </div>
            );
          })}
        </div>

        {/* CONTROLS */}
        <button className={`${styles.navArrow} ${styles.navArrowLeft}`} onClick={handlePrev}>
          <svg viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className={`${styles.navArrow} ${styles.navArrowRight}`} onClick={handleNext}>
          <svg viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className={styles.dotIndicators}>
          {certificates.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.progressBarContainer}>
          <div 
            key={progressKey}
            className={`${styles.progressBar} ${styles.progressBarAnim}`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
