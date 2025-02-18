import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // shows button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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
          //styles for the button
          style={{
            position: 'fixed',
            bottom:'40px',
            right: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 0 10px rgba(0, 123, 255, 0.8), 0 0 20px rgba(0, 123, 255, 0.6)',
            transition: 'box-shadow 0.3s ease, transform 0.2s ease',
            zIndex: '1000'
          }
        }
        onMouseEnter={(e) => {
          (e.target as HTMLButtonElement).style.boxShadow =
            '0 0 20px rgba(0, 123, 255, 1), 0 0 40px rgba(0, 123, 255, 0.8)';
          (e.target as HTMLButtonElement).style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLButtonElement).style.boxShadow =
            '0 0 10px rgba(0, 123, 255, 0.8), 0 0 20px rgba(0, 123, 255, 0.6)';
          (e.target as HTMLButtonElement).style.transform = 'scale(1)';
        }}
        >
          ⮝
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
