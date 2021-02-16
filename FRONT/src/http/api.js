const apiUrl = 'http://localhost:4000';

const requestMethods = { post: 'POST', get: 'GET' };
const endpoints = { login: '/users/login', userInsert : '/users/insertar' };

/*async function fetchFormData(path, { body, method }) {
  const token = localStorage.getItem('token');
  const headers = new Headers();
  headers.append('Authorization', token);

  return await fetch(`${apiUrl}${path}`, { method, headers, body });
}*/

async function fetchTravelApi(path, { body, method }) {
 
  const token = localStorage.getItem('token');
  const headers = new Headers({ 'Content-Type': 'application/json' });
  if(token){
    headers.append('Authorization',token);
  }
  const request = await fetch(`${apiUrl}${path}`, { headers: headers, method: method, body: JSON.stringify(body) });
  return await request.json();
}

export async function login(mail, pwd) {
  //return fetchTravelApi('/users/login', { method: requestMethods.post, body: { mail, pwd } });
  const tokenData = await fetchTravelApi('/users/login', { method: requestMethods.post, body: { mail, pwd } });
  const token = tokenData.data.token;
  console.log(token);
  localStorage.setItem('token', token);
  return token;
}

export async function userLogin(mail, pwd, nomUsuario_usu, nom_usu, ape1_usu, ape2_usu, biografia_usu) {
  return await fetchTravelApi(endpoints.userInsert, {
    method: requestMethods.post,
    body: { mail, pwd, nomUsuario_usu, nom_usu, ape1_usu, ape2_usu, biografia_usu, invite: 'moduloreact' },
  });
}
/*
export async function getUserInfo(userId) {
  const userData = await fetchTravelApi(`${endpoints.getUserInfo}${userId}`, { method: requestMethods.get });
  return userData.data;
}
*/
export async function newEntry(data,idUser) {
  const body = new FormData();
  body.append('usuario',idUser)
  body.append('place', data.place);
  body.append('description', data.description);
  body.append('ficheros', data.ficheros);
  console.log(body);
  //return await fetchFormData(endpoints.entries, { method: requestMethods.post, body });
}
