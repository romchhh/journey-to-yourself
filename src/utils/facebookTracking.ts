// Utility functions for Facebook Pixel and Conversions API tracking

/**
 * Generate a unique event ID for deduplication
 */
export function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
}

/**
 * Get Facebook Browser ID (fbp) from cookies
 */
export function getFbp(): string | null {
  if (typeof document === 'undefined') return null;
  
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === '_fbp') {
      return decodeURIComponent(value);
    }
  }
  return null;
}

/**
 * Get Facebook Click ID (fbc) from cookies or URL
 */
export function getFbc(): string | null {
  if (typeof document === 'undefined') return null;
  
  // Check cookies first
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === '_fbc') {
      return decodeURIComponent(value);
    }
  }
  
  // Check URL for fbclid parameter
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const fbclid = urlParams.get('fbclid');
    if (fbclid) {
      // Format: fb.{timestamp}.{random}.{fbclid}
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 15);
      return `fb.${timestamp}.${random}.${fbclid}`;
    }
  }
  
  return null;
}

/**
 * Check if Purchase event was already sent for this orderRef
 */
export function isPurchaseAlreadySent(orderRef: string): boolean {
  if (typeof window === 'undefined') return false;
  
  const key = `fb_purchase_${orderRef}`;
  const sent = localStorage.getItem(key);
  return sent === 'true';
}

/**
 * Mark Purchase event as sent for this orderRef
 */
export function markPurchaseAsSent(orderRef: string): void {
  if (typeof window === 'undefined') return;
  
  const key = `fb_purchase_${orderRef}`;
  localStorage.setItem(key, 'true');
  
  // Clean up old entries (older than 30 days)
  try {
    const keys = Object.keys(localStorage);
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    
    keys.forEach((k) => {
      if (k.startsWith('fb_purchase_')) {
        const timestamp = localStorage.getItem(`${k}_timestamp`);
        if (timestamp && parseInt(timestamp) < thirtyDaysAgo) {
          localStorage.removeItem(k);
          localStorage.removeItem(`${k}_timestamp`);
        }
      }
    });
    
    // Store timestamp for this orderRef
    localStorage.setItem(`${key}_timestamp`, Date.now().toString());
  } catch (e) {
    // Ignore errors in cleanup
    console.warn('[FB Tracking] Error cleaning up old purchase records:', e);
  }
}

/**
 * Check if PageView was already sent for this page load
 */
export function isPageViewAlreadySent(): boolean {
  if (typeof window === 'undefined') return false;
  
  const key = `fb_pageview_${window.location.pathname}`;
  const sessionKey = sessionStorage.getItem(key);
  return sessionKey === 'true';
}

/**
 * Mark PageView as sent for this page
 */
export function markPageViewAsSent(): void {
  if (typeof window === 'undefined') return;
  
  const key = `fb_pageview_${window.location.pathname}`;
  sessionStorage.setItem(key, 'true');
}

