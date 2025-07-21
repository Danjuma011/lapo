import { useEffect } from "react";

interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  action: () => void;
  description: string;
}

export const useKeyboardShortcuts = (shortcuts: KeyboardShortcut[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const shortcut = shortcuts.find(
        (s) =>
          s.key.toLowerCase() === event.key.toLowerCase() &&
          !!s.ctrlKey === event.ctrlKey &&
          !!s.shiftKey === event.shiftKey &&
          !!s.altKey === event.altKey
      );

      if (shortcut) {
        event.preventDefault();
        shortcut.action();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts]);
};

// Common keyboard shortcuts
export const COMMON_SHORTCUTS = {
  SEARCH: { key: "f", ctrlKey: true, description: "Focus search" },
  CLEAR_SEARCH: { key: "Escape", description: "Clear search" },
  SELECT_ALL: { key: "a", ctrlKey: true, description: "Select all" },
  EXPORT: { key: "e", ctrlKey: true, description: "Export data" },
  NEXT_PAGE: { key: "ArrowRight", description: "Next page" },
  PREV_PAGE: { key: "ArrowLeft", description: "Previous page" },
} as const;
