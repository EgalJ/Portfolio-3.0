/**
 * Update active state of navigation links
 * @param {NodeListOf<Element>} navLinks - List of navigation links
 * @param {string} currentSection - ID of current section
 */
export const updateActiveNavLink = (navLinks, currentSection) => {
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
};