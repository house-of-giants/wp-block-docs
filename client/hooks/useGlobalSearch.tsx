import { useState, useEffect, useCallback } from "react";

export function useGlobalSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  // Global keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K on Mac, Ctrl+K on PC
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        // Don't trigger if user is typing in an input, textarea, or contenteditable
        const target = e.target as HTMLElement;
        const isInputField =
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable;

        if (!isInputField) {
          e.preventDefault();
          openSearch();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openSearch]);

  return {
    isSearchOpen,
    openSearch,
    closeSearch,
  };
}
