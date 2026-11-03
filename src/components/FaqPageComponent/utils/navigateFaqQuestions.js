export function navigateFaqQuestions(event, index, items) {
  const keys = ['ArrowDown', 'ArrowUp', 'Home', 'End'];
  if (!keys.includes(event.key) || items.length === 0) {
    return;
  }
  event.preventDefault();
  const next =
    event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? items.length - 1
        : (index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
  document.getElementById(`faq-question-${items[next].id}`)?.focus();
}
