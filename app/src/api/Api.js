const baseUrl = 'http://localhost:8000/api/';

const Get = async url => {
  const result = await fetch(baseUrl+url);
  const data = await result.json();
  return data || null;
};

export default { Get };
