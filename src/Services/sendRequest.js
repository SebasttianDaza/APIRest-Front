const headers = {
  accept: "application/json",
  "Content-Type": "application/json",
};

const sendRequest = async ({ url, method, body }) => {
  const response = await fetch(url, {
    method,
    headers,
    body,
    mode: "cors",
    credentials: "same-origin",
    referrerPolicy: "no-referrer",
  });

  if (!response.ok) {
    throw new Error(response);
  }

  const json = await response.json();
  return json;
};

export default sendRequest;
