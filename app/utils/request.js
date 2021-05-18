import partial from 'lodash/partial';

const requester = (domain, method, mode, headers, relativeUrl, payload) =>
  fetch(`${domain}${relativeUrl}`, {
    method,
    mode,
    headers,
    body: JSON.stringify(payload),
  })
    .then(response => response)
    .catch(error => error);

const apiRequest = partial(requester, window.config.apiRoot);
const getRequest = partial(apiRequest, 'GET', 'cors', {
  'Content-Type': 'application/json',
});

export { getRequest };
