import { FAQ_ITEMS } from './FaqData.js';

function simulateFaqRequest() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ questions: FAQ_ITEMS }), 250);
  });
}

function isValidFaqData(questions) {
  if (!Array.isArray(questions) || questions.length === 0) {
    return false;
  }

  const ids = new Set();
  return questions.every((item) => {
    if (
      !item ||
      !(Number.isSafeInteger(item.id) && item.id >= 0) ||
      typeof item.question !== 'string' ||
      !item.question.trim() ||
      typeof item.answer !== 'string' ||
      !item.answer.trim() ||
      ids.has(item.id)
    ) {
      return false;
    }
    ids.add(item.id);
    return true;
  });
}

export async function getFaqData(request = simulateFaqRequest) {
  try {
    const response = await request();
    if (isValidFaqData(response?.questions)) {
      return { items: response.questions, usedFallback: false };
    }
  } catch {
    return { items: FAQ_ITEMS, usedFallback: true };
  }

  return { items: FAQ_ITEMS, usedFallback: true };
}
