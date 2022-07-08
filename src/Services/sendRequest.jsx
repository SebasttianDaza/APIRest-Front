const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const sendRequest = async ({ url, method, body }) => {
  const response = await fetch(url, {
    method,
    headers,
    body,
  });

  if (!response.ok) {
    throw new Error(response);
  }

  const json = await response.json();
  return json;
};

export default sendRequest;
