const API = 'http://localhost:8080';

export const logIn = async (userName, password) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ userName, password }),
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    return await fetch(`${API}/api/userAuth/login`, options).then((res) => {
      return res.json();
    });
  } catch (error) {
    console.log(error);
  }
};

export const register = async (data) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    return await fetch(`${API}/api/register/registerUser`, options)
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
