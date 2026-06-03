import React, { useState, useEffect, useRef } from 'react';
import styles from './training.module.css';
import { training as certificates } from './trainingData';

const TrainingSection = () => {
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
      id="training" 
      className={styles.sectionWrapper}
    >
      <div className={styles.sectionHeadingWrapper}>
        <div className={styles.sectionLabel}>// Continuous Training //</div>
        <h2 className={styles.sectionHeading} style={{ color: '#ffffff', fontWeight: 900 }}>Continuously <span style={{ color: '#f5c542' }}>Learning.</span> Always <span style={{ color: '#f5c542' }}>Building.</span></h2>
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
              <div key={cert.id} className={`${styles.certSlide} ${inClass}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className={styles.imageContainer}>
                  <img 
                    src={cert.fileUrl}
                    alt={cert.title}
                    className={styles.certFrame}
                  />
                  {/* Realistic Golden Frame Overlay */}
                  <img 
                    src="/certificates/gold_frame_realistic.png" 
                    className={styles.frameOverlay} 
                    alt="" 
                  />
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

export default TrainingSection;
