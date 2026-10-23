import { useRef, useState } from 'react';
import { validateContactForm } from '../validation/contactValidation';
import { submitContactRequest } from '../services/contactService';
import useMessage from '../../common/MessageComponent/hooks/useMessage';
import useSessionStorageState from './useSessionStorageState';

const INITIAL_VALUES = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  description: '',
  consent: false,
  marketing: false,
};

export default function useContactForm() {
  const [values, setValues] = useSessionStorageState('enjamer:contact-draft', INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const submitting = useRef(false);
  const { message, notify, dismiss } = useMessage();

  const setFieldValue = (field, value) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setResult(null);
    setErrors((previous) => {
      if (!previous[field]) {
        return previous;
      }
      const next = { ...previous };
      delete next[field];
      return next;
    });
  };

  const updateField = (field) => (event) => setFieldValue(field, event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting.current) {
      return;
    }
    const validation = validateContactForm(values, values.consent);
    setErrors(validation.errors);
    setResult(null);
    if (!validation.isValid) {
      notify(Object.values(validation.errors).join('\n'));
      return;
    }
    submitting.current = true;
    setIsSubmitting(true);
    try {
      const response = await submitContactRequest(values);
      setResult(response);
      if (!response.ok) {
        notify(response.message);
      }
      if (response.ok) {
        notify(response.message);
        setValues(INITIAL_VALUES);
      }
    } finally {
      submitting.current = false;
      setIsSubmitting(false);
    }
  };

  return {
    values,
    message,
    dismissMessage: dismiss,
    errors,
    consent: values.consent,
    marketing: values.marketing,
    isSubmitting,
    result,
    setFieldValue,
    updateField,
    handleSubmit,
    handleConsentChange: (event) => setFieldValue('consent', event.target.checked),
    handleMarketingChange: (event) => setFieldValue('marketing', event.target.checked),
  };
}
