const baseUrl = 'http://localhost:8000/api/';

const Get = async url => {
  const result = await fetch(baseUrl + url);
  const data = await result.json();
  return data || null;
};

const Post = async (url, body) => {
  const result = await fetch(baseUrl + url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data = await result.json();
  return data || null;
};

const Put = async (url, body) => {
  const result = await fetch(baseUrl + url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data = await result.json();
  return data || null;
};

export default { Get, Post, Put };
