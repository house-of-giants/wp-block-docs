// @ts-nocheck
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function PlausibleTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.plausible) {
      window.plausible('pageview');
    }
  }, [location]);
  return null;
}
