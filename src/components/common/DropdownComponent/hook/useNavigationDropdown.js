import { useEffect, useId, useRef, useState } from 'react';
import {
  getNextOptionIndex,
  hasFocusLeft,
  subscribeOutsidePointer,
} from '../utils/dropdownUtils.js';

export default function useNavigationDropdown({ inline, onNavigate }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    return subscribeOutsidePointer(root, () => setOpen(false));
  }, [open]);

  const navigate = () => {
    setOpen(false);
    onNavigate?.();
  };
  const handleMouseEnter = () => {
    if (!inline) {
      setOpen(true);
    }
  };
  const handleMouseLeave = () => {
    if (!inline) {
      setOpen(false);
    }
  };
  const handleBlur = (event) => {
    if (hasFocusLeft(event)) {
      setOpen(false);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.stopPropagation();
      toggle.current.focus();
      setOpen(false);
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      const links = [...root.current.querySelectorAll('.dropdown-option')];
      const index = links.indexOf(document.activeElement);
      const next = getNextOptionIndex(index, event.key, links.length);
      requestAnimationFrame(() => links[next]?.focus());
    }
  };
  const toggleOpen = () => setOpen((value) => !value);

  return {
    open,
    id,
    root,
    toggle,
    navigate,
    handleMouseEnter,
    handleMouseLeave,
    handleBlur,
    handleKeyDown,
    toggleOpen,
  };
}
