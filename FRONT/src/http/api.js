const apiUrl = 'http://localhost:4000';

const requestMethods = { post: 'POST', get: 'GET' };
const endpoints = { login: '/users/login' };

/*async function fetchFormData(path, { body, method }) {
  const token = localStorage.getItem('token');
  const headers = new Headers();
  headers.append('Authorization', token);

  return await fetch(`${apiUrl}${path}`, { method, headers, body });
}*/

async function fetchTravelApi(path, { body, method }) {
 
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const request = await fetch(`${apiUrl}${path}`, { headers: headers, method: method, body: JSON.stringify(body) });
  return await request.json();


}

export async function login(mail, pwd) {
  return fetchTravelApi('/users/login', { method: requestMethods.post, body: { mail, pwd } });
}
/*
export async function signUpApi(email, password) {
  return await fetchTravelApi(endpoints.signUp, {
    method: requestMethods.post,
    body: { email, password, invite: 'moduloreact' },
  });
}

export async function getUserInfo(userId) {
  const userData = await fetchTravelApi(`${endpoints.getUserInfo}${userId}`, { method: requestMethods.get });
  return userData.data;
}

export async function newEntry(data) {
  const body = new FormData();
  body.append('place', data.place);
  body.append('description', data.description);
  body.append('foto1', data.foto1[0]);

  return await fetchFormData(endpoints.entries, { method: requestMethods.post, body });
}
*/