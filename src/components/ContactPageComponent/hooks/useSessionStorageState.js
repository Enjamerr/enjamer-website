import { useEffect, useState } from 'react';

// Restore only known fields with the expected types from the form draft.
export default function useSessionStorageState(key, initialValues) {
  const [values, setValues] = useState(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(key));
      if (!saved || typeof saved !== 'object' || Array.isArray(saved)) {
        return initialValues;
      }
      return Object.fromEntries(
        Object.entries(initialValues).map(([field, fallback]) => [
          field,
          typeof saved[field] === typeof fallback ? saved[field] : fallback,
        ]),
      );
    } catch {
      return initialValues;
    }
  });

  useEffect(() => {
    try {
      const serialized = JSON.stringify(values);
      if (serialized === JSON.stringify(initialValues)) {
        sessionStorage.removeItem(key);
      } else {
        sessionStorage.setItem(key, serialized);
      }
    } catch {
      // Keep the form usable when browser storage is unavailable or full.
    }
  }, [key, values, initialValues]);

  return [values, setValues];
}
