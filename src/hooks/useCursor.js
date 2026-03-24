import { useEffect, useRef } from 'react';

export function useCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursorPosition = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const enlargeCursor = () => cursor.classList.add('big');
    const shrinkCursor = () => cursor.classList.remove('big');

    document.addEventListener('mousemove', updateCursorPosition);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, .sticker, .proj-card, .skill-card, .btn'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', enlargeCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    // Wobble skill cards on hover
    const skillCards = document.querySelectorAll('[data-skill-card]');
    skillCards.forEach((card, i) => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = `rotate(${i % 2 === 0 ? '-2deg' : '2deg'}) scale(1.03)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', enlargeCursor);
        el.removeEventListener('mouseleave', shrinkCursor);
      });
      skillCards.forEach((card) => {
        card.removeEventListener('mouseenter', null);
        card.removeEventListener('mouseleave', null);
      });
    };
  }, []);

  return cursorRef;
}
