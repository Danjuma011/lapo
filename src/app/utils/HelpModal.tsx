import React from "react";
import { COMMON_SHORTCUTS } from "./hooks/useKeyboardShortcuts";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { ...COMMON_SHORTCUTS.SEARCH, keys: "Ctrl + F" },
    { ...COMMON_SHORTCUTS.CLEAR_SEARCH, keys: "Escape" },
    { ...COMMON_SHORTCUTS.SELECT_ALL, keys: "Ctrl + A" },
    { ...COMMON_SHORTCUTS.EXPORT, keys: "Ctrl + E" },
    { ...COMMON_SHORTCUTS.NEXT_PAGE, keys: "→" },
    { ...COMMON_SHORTCUTS.PREV_PAGE, keys: "←" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Keyboard Shortcuts</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close help modal"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {shortcut.description}
              </span>
              <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded">
                {shortcut.keys}
              </kbd>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Tips:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Use status filters to quickly find specific requests</li>
            <li>• Select multiple items for bulk operations</li>
            <li>• Export filtered data for reporting</li>
            <li>• Sort by any column for better organization</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default HelpModal;
