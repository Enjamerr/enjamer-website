import { useEffect, useRef, useState } from 'react';
import {
  findOptionByInitial,
  getNextOptionIndex,
  hasFocusLeft,
  subscribeOutsidePointer,
} from '../utils/dropdownUtils.js';

export default function useSelectionDropdown({ options, value, onChange, id }) {
  const triggerId = id;
  const listId = triggerId ? `${triggerId}-options` : undefined;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef(null);
  const trigger = useRef(null);
  const selectedIndex = options.findIndex((option) => option.id === value);
  const selected = options[selectedIndex];

  useEffect(() => {
    if (!open) {
      return;
    }
    return subscribeOutsidePointer(root, () => setOpen(false));
  }, [open]);

  useEffect(() => {
    if (open) {
      root.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' });
    }
  }, [active, open]);

  const toggle = () => {
    setActive(Math.max(0, selectedIndex));
    setOpen((previous) => !previous);
  };

  const choose = (index) => {
    if (!options[index]) {
      return;
    }
    onChange?.(options[index].id);
    setOpen(false);
    trigger.current?.focus();
  };

  const handleBlur = (event) => {
    if (hasFocusLeft(event)) {
      setOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (!options.length) {
      return;
    }
    if (event.key === 'Tab') {
      setOpen(false);
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      return;
    }
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      setOpen(true);
      setActive((previous) => {
        if (!open && event.key !== 'Home' && event.key !== 'End') {
          return Math.max(0, selectedIndex);
        }
        return getNextOptionIndex(previous, event.key, options.length);
      });
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (open) {
        choose(active);
      } else {
        toggle();
      }
    } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      const index = findOptionByInitial(options, event.key);
      if (index >= 0) {
        event.preventDefault();
        setActive(index);
        setOpen(true);
      }
    }
  };

  return {
    triggerId,
    listId,
    open,
    active,
    root,
    trigger,
    selected,
    toggle,
    choose,
    handleKeyDown,
    handleBlur,
    setActive,
  };
}
