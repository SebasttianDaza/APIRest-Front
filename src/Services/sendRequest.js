const sendRequest = async ({ url, method, body }) => {
  const response = await fetch(url, {
    method,
    body,
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
