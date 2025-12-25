"use client";

import { useEffect } from 'react';
import { 
  generateEventId, 
  getFbp, 
  getFbc, 
  isPageViewAlreadySent, 
  markPageViewAsSent 
} from '@/utils/facebookTracking';

export default function FacebookPageView() {
  useEffect(() => {
    // Wait for fbq to be available
    const checkAndTrack = () => {
      if (typeof window === 'undefined' || !window.fbq) {
        setTimeout(checkAndTrack, 100);
        return;
      }

      // Check if PageView was already sent for this page
      if (isPageViewAlreadySent()) {
        console.log('[FB Tracking] PageView already sent for this page');
        return;
      }

      try {
        const eventId = generateEventId();
        const fbp = getFbp();
        const fbc = getFbc();
        const eventSourceUrl = window.location.href;

        console.log('[FB Tracking] Sending PageView to CAPI:', {
          eventId,
          fbp,
          fbc,
          url: eventSourceUrl,
        });

        // Track PageView in Pixel with eventID for deduplication
        if (window.fbq) {
          window.fbq('track', 'PageView', { eventID: eventId });
          console.log('[FB Pixel] PageView tracked with eventID:', eventId);
        }

        // Send PageView to Conversions API
        fetch('/api/facebook/conversion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eventName: 'PageView',
            eventId: eventId,
            fbp: fbp,
            fbc: fbc,
            eventSourceUrl: eventSourceUrl,
          }),
        })
          .then((response) => {
            if (response.ok) {
              markPageViewAsSent();
              console.log('[FB CAPI] PageView sent successfully');
            } else {
              console.error('[FB CAPI] Failed to send PageView:', response.status);
            }
          })
          .catch((error) => {
            console.error('[FB CAPI] Error sending PageView:', error);
          });
      } catch (error) {
        console.error('[FB Tracking] Error in PageView tracking:', error);
      }
    };

    // Start checking after a short delay to ensure pixel is loaded
    setTimeout(checkAndTrack, 500);
  }, []);

  return null;
}

 