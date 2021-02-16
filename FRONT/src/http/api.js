const apiUrl = 'http://localhost:4000';

const requestMethods = { post: 'POST', get: 'GET' };
const endpoints = { login: '/users/login', userInsert : '/users/insertar' , servicios: '/servicios'};

async function fetchFormData(path, { body, method }) {
  const token = localStorage.getItem('token');
  const headers = new Headers();
  headers.append('Authorization', token);

  return await fetch(`${apiUrl}${path}`, { method, headers, body });
}

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
export async function newEntry(data) {
  const body = new FormData();
  
  body.append('eltitulo', data.titulo);
  body.append('explicacion', data.explicacion);
 ;
  for(const valor of Object.values(data.ficheros)){
      console.log(`Estoy en 0 ${valor}`)
      //console.log(`Estoy enn 1 ${valor}`)
    body.append('ficheros', valor);
  }

  //body.append(`${valor}`, data.ficheros[valor],data.ficheros[valor].name);
 
  //console.log(body);
  return await fetchFormData(endpoints.servicios, { method: requestMethods.post, body });
}
