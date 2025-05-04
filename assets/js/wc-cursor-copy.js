function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || (window.matchMedia && window.matchMedia("(max-width: 768px)").matches);
}

// Only load and initialize the cursor on non-mobile devices
if (!isMobileDevice()) {
  const script = document.createElement('script');
  script.src = '../assets/js/wc-cursor.js'; // Adjust this path as needed
  script.onload = function() {
      // If there's any initialization function in wc-cursor.js, call it here
      if (typeof initCursor === 'function') {
          initCursor();
      }
  };
  document.head.appendChild(script);
} else {
  // For mobile devices, add a style to hide cursor elements
  const style = document.createElement('style');
  style.textContent = '.cursor1, .cursor2 { display: none !important; }';
  document.head.appendChild(style);
}

// Handle resize events
window.addEventListener('resize', function() {
  const isMobile = isMobileDevice();
  const cursorElements = document.querySelectorAll('.cursor1, .cursor2');
  cursorElements.forEach(el => {
      if (el) {
          el.style.display = isMobile ? 'none' : '';
      }
  });

  // If switched to desktop and cursor script wasn't loaded, load it
  if (!isMobile && !document.querySelector('script[src$="wc-cursor.js"]')) {
      const script = document.createElement('script');
      script.src = '../assets/js/wc-cursor.js'; // Adjust this path as needed
      document.head.appendChild(script);
  }
});