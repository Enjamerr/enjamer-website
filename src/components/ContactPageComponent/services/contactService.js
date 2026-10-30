const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL;

function buildPayload({ name, company, email, phone, service, description, consent, marketing }) {
  return {
    name: name.trim(),
    company: company.trim(),
    email: email.trim(),
    phone: phone.trim(),
    service,
    description: description.trim(),
    consent,
    marketing,
    source: 'website-contact',
  };
}

export async function submitContactRequest(formValues) {
  const payload = buildPayload(formValues);

  // Keep the demo flow until the contact backend exists. Configure
  // VITE_CONTACT_API_URL to enable the real request.
  if (!CONTACT_ENDPOINT) {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 900);
    });
    return { simulated: true };
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`CONTACT_REQUEST_FAILED_${response.status}`);
  }

  if (response.status === 204) {
    return {};
  }

  return response.json().catch(() => ({}));
}
