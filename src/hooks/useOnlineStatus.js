import { useState, useEffect } from "react";

/**
 * useOnlineStatus hook
 * 
 * Tracks the browser's online/offline status using navigator.onLine
 * and window online/offline events.
 * 
 * @returns {boolean} - true if online, false if offline
 */
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(() => {
    // Initialize from navigator.onLine if available
    return typeof navigator !== "undefined" && typeof navigator.onLine === "boolean"
      ? navigator.onLine
      : true;
  });

  useEffect(() => {
    // Handler for online event
    const handleOnline = () => setIsOnline(true);
    
    // Handler for offline event
    const handleOffline = () => setIsOnline(false);

    // Register event listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}
