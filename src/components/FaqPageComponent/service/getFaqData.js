import axios from 'axios';
import { FAQ_ITEMS } from '../utils/FaqData.js';

async function requestFaqData() {
  // Enable once the backend is available; see README.md in this directory.
  // return axios.get('/api/faq');
  return axios.get('/api/faq', {
    adapter: (config) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: FAQ_ITEMS.map((item) => ({ ...item })),
            status: 200,
            statusText: 'OK',
            headers: {},
            config,
          });
        }, 250);
      }),
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

export async function getFaqData(request = requestFaqData) {
  try {
    const response = await request();
    if (isValidFaqData(response?.data)) {
      return { items: response.data, usedFallback: false };
    }
  } catch {
    return { items: FAQ_ITEMS, usedFallback: true };
  }

  return { items: FAQ_ITEMS, usedFallback: true };
}
