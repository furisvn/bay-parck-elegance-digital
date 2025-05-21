
/**
 * Smoothly scrolls to an element with ID, accounting for header offset
 */
export const scrollToElement = (elementId: string, headerOffset: number = 80) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    return true;
  }
  
  return false;
};

/**
 * Checks if an element is in viewport
 */
export const isElementInViewport = (element: Element) => {
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
