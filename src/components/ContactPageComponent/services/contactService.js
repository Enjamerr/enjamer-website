import axios from 'axios';

const CONTACT_ENDPOINT = import.meta.env?.VITE_CONTACT_API_URL;
const SUCCESS_MESSAGE = 'Gracias. Revisaremos tu solicitud y te contactaremos pronto.';
const ERROR_MESSAGE = 'No pudimos enviar tu solicitud. Inténtalo de nuevo en unos minutos.';

function buildPayload({ name, company, email, phone, service, description, consent, marketing }) {
  const normalize = (value) => String(value ?? '').trim();
  return {
    name: normalize(name),
    company: normalize(company),
    email: normalize(email),
    phone: normalize(phone),
    service: normalize(service),
    description: normalize(description),
    consent: consent === true,
    marketing: marketing === true,
    source: 'website-contact',
  };
}

export async function submitContactRequest(formValues, endpoint = CONTACT_ENDPOINT) {
  try {
    const payload = buildPayload(formValues);

    if (!endpoint) {
      await new Promise((resolve) => setTimeout(resolve, 900));
      return { ok: true, simulated: true, data: null, message: SUCCESS_MESSAGE };
    }
    const response = await axios.post(endpoint, payload, {
      timeout: 15000,
      responseType: 'json',
      transitional: { silentJSONParsing: false },
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
    return {
      ok: true,
      status: response.status,
      data: response.status === 204 ? null : response.data,
      simulated: false,
      message: SUCCESS_MESSAGE,
    };
  } catch (error) {
    let code = 'request-failed';
    if (axios.isCancel(error)) {
      code = 'aborted';
    } else if (error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT') {
      code = 'timeout';
    } else if (error.response) {
      code = 'http';
    } else if (error.code === 'ERR_BAD_RESPONSE') {
      code = 'invalid-response';
    } else if (error.request) {
      code = 'network';
    }
    return { ok: false, code, status: error.response?.status, message: ERROR_MESSAGE };
  }
}
