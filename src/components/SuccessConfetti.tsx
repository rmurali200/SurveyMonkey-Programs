import React, { useEffect, useState, createElement } from 'react';
const SuccessConfetti = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  useEffect(() => {
    // Create confetti effect
    const createConfetti = () => {
      const confettiContainer = document.createElement('div');
      confettiContainer.style.position = 'fixed';
      confettiContainer.style.top = '0';
      confettiContainer.style.left = '0';
      confettiContainer.style.width = '100%';
      confettiContainer.style.height = '100%';
      confettiContainer.style.pointerEvents = 'none';
      confettiContainer.style.zIndex = '9999';
      document.body.appendChild(confettiContainer);
      // Create 100 confetti pieces
      const colors = ['#FFC700', '#FF0058', '#2E7CF6', '#17D943', '#BAFF8E'];
      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.position = 'absolute';
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.borderRadius = '50%';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = '-20px';
        confetti.style.opacity = `${Math.random() + 0.5}`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiContainer.appendChild(confetti);
        // Animate falling
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 0.5;
        confetti.animate([{
          transform: `translateY(0) rotate(0deg)`,
          opacity: 1
        }, {
          transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`,
          opacity: 0
        }], {
          duration: duration * 1000,
          delay: delay * 1000,
          easing: 'cubic-bezier(.37,.74,.15,1)',
          fill: 'forwards'
        });
      }
      // Clean up confetti after animation
      setTimeout(() => {
        if (confettiContainer && document.body.contains(confettiContainer)) {
          document.body.removeChild(confettiContainer);
        }
        setShowConfetti(false);
      }, 5000);
    };
    if (showConfetti) {
      createConfetti();
    }
    return () => {
      const confettiContainer = document.querySelector('div[style*="position: fixed"][style*="pointer-events: none"]');
      if (confettiContainer && document.body.contains(confettiContainer)) {
        document.body.removeChild(confettiContainer);
      }
    };
  }, [showConfetti]);
  return null;
};
export default SuccessConfetti;