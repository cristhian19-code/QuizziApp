export const fetchSinToken = async (method = "POST", body, url) => {
  const resp = await fetch(`https://quizzi-app-api.herokuapp.com/api/${url}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await resp.json();

  return data;
};

export const fetchConToken = async (method = "GET", url) => {
  const token = localStorage.getItem("x-token");

  if (!token) return;

  const resp = await fetch(`https://quizzi-app-api.herokuapp.com/api/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
  });

  const data = await resp.json();

  return data;
};
