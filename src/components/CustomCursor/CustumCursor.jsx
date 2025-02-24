import { useEffect } from 'react';

const CustomCursor = () => {
  const cursorStyle = {
    position: 'fixed',
    width: '0px',
    height: '0px',
    borderRadius: '50%',
    background: '#ffffff',
    boxShadow: '0 0 140px 80px rgba(247, 145, 225, 0.2)',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
  };

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div id="custom-cursor" style={cursorStyle} />;
};

export default CustomCursor;
