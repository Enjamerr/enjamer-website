export function getNextOptionIndex(current, key, count) {
  if (!count || key === 'Home') {
    return 0;
  }
  if (key === 'End') {
    return count - 1;
  }
  if (current < 0) {
    return key === 'ArrowDown' ? 0 : count - 1;
  }
  return (current + (key === 'ArrowDown' ? 1 : -1) + count) % count;
}

export function findOptionByInitial(options, key) {
  return options.findIndex((option) =>
    option.label.toLocaleLowerCase().startsWith(key.toLocaleLowerCase()),
  );
}

export function hasFocusLeft(event) {
  return !event.currentTarget.contains(event.relatedTarget);
}

export function subscribeOutsidePointer(root, close) {
  const handlePointerDown = (event) => {
    if (!root.current?.contains(event.target)) {
      close();
    }
  };
  document.addEventListener('pointerdown', handlePointerDown);
  return () => document.removeEventListener('pointerdown', handlePointerDown);
}
