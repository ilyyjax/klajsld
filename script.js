(() => {
  const orbitRadius = 350; // orbit radius
  const bills = document.querySelectorAll('.bill');
  const total = bills.length;

  // Initialize each bill evenly spaced
  bills.forEach((bill, i) => {
    bill.angle = (360 / total) * i;
  });

  function animate() {
    bills.forEach(bill => {
      bill.angle += 0.3; // fixed speed
      const rad = bill.angle * (Math.PI/180);
      const x = Math.cos(rad) * orbitRadius;
      const y = Math.sin(rad) * orbitRadius;
      bill.style.transform = `translate(${x}px, ${y}px)`;
    });
    requestAnimationFrame(animate);
  }
  animate();

  // X logo link
  const xLink = document.getElementById('x-link');
  if (xLink) xLink.href = 'https://x.com/i/communities/1972087756521123954';

  // Custom cursor
  const cursor = document.getElementById('custom-cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Cursor hover effects
  const hoverElements = document.querySelectorAll('.bill, .x-link');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      cursor.style.boxShadow = '0 0 20px cyan, 0 0 40px cyan';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.boxShadow = 'none';
    });
  });
})();
