/**
 * Analytics and tracking utilities for SEO monitoring
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with your actual ID

// Initialize Google Analytics
export const initGA = () => {
  // Load gtag script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    // Enhanced ecommerce for developer actions
    custom_map: {
      custom_parameter_1: "block_type",
      custom_parameter_2: "interaction_type",
      custom_parameter_3: "user_segment",
    },
    // Site speed sample rate
    site_speed_sample_rate: 100,
    // Enhanced link attribution
    enhanced_link_attribution: true,
  });
};

// Track page views for SPA
export const trackPageView = (path: string, title: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_title: title,
      page_location: window.location.href,
      page_path: path,
    });

    // Track as virtual pageview for SPA
    window.gtag("event", "page_view", {
      page_title: title,
      page_location: window.location.href,
      page_path: path,
    });
  }
};

// Developer-specific event tracking
export const trackDeveloperAction = (
  action: string,
  blockType?: string,
  additionalData?: Record<string, any>,
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: "developer_interaction",
      event_label: blockType,
      block_type: blockType,
      interaction_type: action,
      ...additionalData,
    });
  }
};

// Code copying tracking (important for developer sites)
export const trackCodeCopy = (
  codeType: "block_markup" | "properties" | "pattern",
  blockName?: string,
) => {
  trackDeveloperAction("code_copy", blockName, {
    code_type: codeType,
    value: 1, // Assign value to code copies for conversion tracking
  });
};

// Search tracking
export const trackSearch = (query: string, resultsCount: number) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "search", {
      search_term: query,
      event_category: "site_search",
      results_count: resultsCount,
    });
  }
};

// Block validation tracking
export const trackValidation = (
  isValid: boolean,
  errorCount: number,
  blockCount: number,
) => {
  trackDeveloperAction("block_validation", undefined, {
    validation_result: isValid ? "success" : "errors",
    error_count: errorCount,
    block_count: blockCount,
    value: isValid ? 1 : 0,
  });
};

// Performance tracking for Core Web Vitals
export const trackWebVitals = () => {
  // Track Largest Contentful Paint
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === "largest-contentful-paint") {
        window.gtag("event", "web_vitals", {
          event_category: "performance",
          name: "LCP",
          value: Math.round(entry.startTime),
          metric_value: Math.round(entry.startTime),
        });
      }
    }
  });

  if ("PerformanceObserver" in window) {
    try {
      observer.observe({ entryTypes: ["largest-contentful-paint"] });
    } catch (e) {
      console.warn("Performance observer not supported");
    }
  }

  // Track First Input Delay
  const fidObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === "first-input") {
        window.gtag("event", "web_vitals", {
          event_category: "performance",
          name: "FID",
          value: Math.round((entry as any).processingStart - entry.startTime),
          metric_value: Math.round(
            (entry as any).processingStart - entry.startTime,
          ),
        });
      }
    }
  });

  if ("PerformanceObserver" in window) {
    try {
      fidObserver.observe({ entryTypes: ["first-input"] });
    } catch (e) {
      console.warn("First input observer not supported");
    }
  }

  // Track Cumulative Layout Shift
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (
        entry.entryType === "layout-shift" &&
        !(entry as any).hadRecentInput
      ) {
        clsValue += (entry as any).value;
      }
    }
  });

  if ("PerformanceObserver" in window) {
    try {
      clsObserver.observe({ entryTypes: ["layout-shift"] });

      // Report CLS when page is unloaded
      window.addEventListener("beforeunload", () => {
        window.gtag("event", "web_vitals", {
          event_category: "performance",
          name: "CLS",
          value: Math.round(clsValue * 1000),
          metric_value: Math.round(clsValue * 1000),
        });
      });
    } catch (e) {
      console.warn("Layout shift observer not supported");
    }
  }
};

// User engagement tracking
export const trackEngagement = (
  element: string,
  action: "click" | "scroll" | "hover",
  value?: number,
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: "engagement",
      event_label: element,
      value: value,
    });
  }
};

// Scroll depth tracking
export const initScrollTracking = () => {
  let maxScroll = 0;
  const thresholds = [25, 50, 75, 90, 100];
  const trackedThresholds = new Set<number>();

  const trackScrollDepth = () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;

      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          window.gtag("event", "scroll", {
            event_category: "engagement",
            event_label: `${threshold}%`,
            value: threshold,
          });
        }
      });
    }
  };

  window.addEventListener("scroll", trackScrollDepth, { passive: true });
};

// Error tracking
export const trackError = (error: Error, errorInfo?: any) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "exception", {
      description: error.message,
      fatal: false,
      error_name: error.name,
      error_stack: error.stack?.substring(0, 500), // Limit stack trace length
    });
  }
};

// Conversion tracking for developer actions
export const trackConversion = (
  conversionType:
    | "documentation_read"
    | "tool_used"
    | "code_copied"
    | "pattern_downloaded"
    | "newsletter_signup",
  value: number = 1,
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      send_to: GA_MEASUREMENT_ID,
      event_category: "conversions",
      event_label: conversionType,
      value: value,
    });
  }
};

// Social sharing tracking
export const trackSocialShare = (platform: string, url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "share", {
      method: platform,
      content_type: "documentation",
      item_id: url,
    });
  }
};

// External link tracking
export const trackExternalLink = (url: string, linkText: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "click", {
      event_category: "outbound_link",
      event_label: url,
      link_text: linkText,
    });
  }
};
