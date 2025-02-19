import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 
// shows the button only when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsHovered(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '20px',
            padding: '15px',
            fontSize: '18px',
            background: 'linear-gradient(135deg, #ff7eb9, #ff758c, #fd5e53, #fc4a1a)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            boxShadow: isHovered
              ? '0 0 30px rgba(255, 118, 133, 1), 0 0 60px rgba(255, 118, 133, 0.9)'
              : '0 0 20px rgba(255, 118, 133, 0.8), 0 0 40px rgba(255, 118, 133, 0.6)',
            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
            animation: 'glow 2s infinite alternate',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            zIndex: '1000',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
