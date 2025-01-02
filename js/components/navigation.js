import { smoothScrollTo } from '../utils/scroll.js';
import { updateActiveNavLink } from '../utils/dom.js';
import { getCurrentSection } from '../utils/scroll.js';

/**
 * Initialize navigation functionality
 */
export const initNavigation = () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  // Setup smooth scrolling
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return; // Skip empty links
      
      const section = document.querySelector(targetId);
      smoothScrollTo(section);
    });
  });

  // Setup scroll spy
  window.addEventListener('scroll', () => {
    const currentSection = getCurrentSection(sections);
    updateActiveNavLink(navLinks, currentSection);
  });
};