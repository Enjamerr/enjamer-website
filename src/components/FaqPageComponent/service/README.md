# FAQ service

`getFaqData.js` handles FAQ data access through Axios.
The real request, `return axios.get('/api/faq');`, is commented out because
there is no backend serving this endpoint yet.

For now, an Axios adapter simulates an HTTP 200 response after 250 ms without
making any network requests. The response body (`response.data`) is an array
with the same structure as `FAQ_ITEMS` in `../utils/FaqData.js`:

```json
[
  {
    "id": 0,
    "question": "What kinds of solutions can Enjamer develop?",
    "answer": "The answer to the question."
  }
]
```

When developing the backend:

1. Implement an endpoint that returns this JSON array with unique, nonnegative
   safe integer IDs and nonempty questions and answers.
2. Update `/api/faq` to the final endpoint path and configure the base URL,
   authentication, and CORS or proxy settings for the application environment.
3. Remove the `return axios.get(...)` call that includes the mock adapter and
   uncomment the real request. Do not leave both return statements enabled.
4. Verify question loading, searching, and expansion, as well as network errors
   and invalid responses.

The service validates `response.data` and returns `{ items, usedFallback }` to the
component. If the request fails or the body is invalid (including an empty array),
it uses the local questions and activates the page's existing fallback notice.
