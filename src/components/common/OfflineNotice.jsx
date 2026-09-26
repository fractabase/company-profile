import { useEffect, useRef } from "react";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";
import { Icons } from "./Icons";
import gsap from "gsap";

/**
 * OfflineNotice component
 *
 * Unique floating corner badge/indicator di pojok kanan bawah.
 *
 * Design revisi:
 * - Offline: static dot amber (no pulse), persistent badge
 * - Reconnect: pulse ring sekali (single burst), dot cyan pulse, auto-dismiss 3 detik
 */
export default function OfflineNotice() {
  const isOnline = useOnlineStatus();
  const containerRef = useRef(null);
  const pulseRingRef = useRef(null);
  const reconnectTimerRef = useRef(null);
  const wasOfflineRef = useRef(false);

  // Handle offline/online transitions
  useEffect(() => {
    const container = containerRef.current;
    const pulseRing = pulseRingRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isOnline) {
      // User went offline
      wasOfflineRef.current = true;

      // Show container
      if (prefersReducedMotion) {
        gsap.set(container, { display: "flex", opacity: 1, scale: 1 });
      } else {
        gsap.fromTo(
          container,
          { scale: 0, opacity: 0, display: "none" },
          { scale: 1, opacity: 1, display: "flex", duration: 0.4, ease: "back.out(1.7)" },
        );
      }

      // Clear reconnect timer
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
        reconnectTimerRef.current = null;
      }
    } else if (wasOfflineRef.current && isOnline) {
      // User reconnected - trigger single pulse burst
      if (!prefersReducedMotion && pulseRing) {
        // Reset pulse ring position terlebih dahulu
        gsap.set(pulseRing, { scale: 1, opacity: 0.6 });
        // Kemudian animate single burst
        gsap.to(pulseRing, {
          scale: 2.2,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // Auto-dismiss setelah 3 detik
      reconnectTimerRef.current = setTimeout(() => {
        if (prefersReducedMotion) {
          gsap.set(container, { display: "none", opacity: 0 });
        } else {
          gsap.to(container, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: "back.in(1.7)",
            onComplete: () => gsap.set(container, { display: "none" }),
          });
        }
        wasOfflineRef.current = false;
      }, 3000);
    }

    return () => {
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
      }
    };
  }, [isOnline]);

  const isOfflineState = !isOnline;

  return (
    <>
      <div
        ref={containerRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="fixed bottom-6 right-6 z-50"
        style={{ display: "none" }}
      >
        {/* Pulse ring effect - always rendered, animated via GSAP */}
        <div
          ref={pulseRingRef}
          className="absolute inset-0 rounded-full bg-primary/60 pointer-events-none"
          style={{ transform: "scale(1)", opacity: 0 }}
        />

        {/* Main badge container */}
        <div
          className={`relative flex items-center gap-3 px-5 py-3.5 rounded-2xl backdrop-blur-md transition-all duration-300 ${
            isOfflineState
              ? "bg-dark-surface/95 shadow-xl shadow-tertiary/20 border border-tertiary/30"
              : "bg-dark-surface/95 shadow-xl shadow-primary/20 border border-primary/30"
          }`}
        >
          {/* Icon with animated background */}
          <div
            className={`relative shrink-0 flex items-center justify-center w-9 h-9 rounded-xl ${
              isOfflineState ? "bg-tertiary/20 text-tertiary" : "bg-primary/20 text-primary"
            }`}
          >
            {isOfflineState ? <Icons.AlertCircle className="w-5 h-5" /> : <Icons.Check className="w-5 h-5" />}
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-0.5">
            {isOfflineState ? (
              <>
                <span className="text-sm font-bold text-white">Sedang Offline</span>

                <span className="text-xs text-white/60">Periksa koneksi internet</span>
              </>
            ) : (
              <span className="text-sm font-bold text-white">Koneksi Kembali</span>
            )}
          </div>

          {/* Status dot indicator */}
          {isOfflineState ? (
            // Static amber dot ketika offline (no pulse)
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-tertiary" />
          ) : (
            // Animated green dot ketika reconnect (pulse)
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 animate-ping" />
          )}
        </div>
      </div>
    </>
  );
}
