/**
 * Smooth scroll to element
 * @param {HTMLElement|null} element - The element to scroll to
 * @returns {boolean} - Whether the scroll was successful
 */
export const smoothScrollTo = (element) => {
  if (!element) {
    return false;
  }
  
  try {
    element.scrollIntoView({
      behavior: 'smooth'
    });
    return true;
  } catch (error) {
    return false;
  }
};