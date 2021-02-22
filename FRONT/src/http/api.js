const apiUrl = 'http://localhost:4000';

const requestMethods = { post: 'POST', get: 'GET', delete: 'DELETE' };
const endpoints = { login: '/users/login', userInsert : '/users/insertar' , servicios: '/servicios', deleteservices: '/servicios/borrar/'};

function montandoObxetos(uri,metodo){
  const token = localStorage.getItem('token');
  //let accion = `${endpoints.}`;
  let url = new URL(`${uri}`,`${apiUrl}`);
  const headers = new Headers();
  if(token){
    headers.append('Authorization',token);
  }
  
  const obxeto = {url:url,headers:headers,method: metodo }  
  return obxeto;
}


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
  //console.log(token);
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
 
  for(const valor of Object.values(data.ficheros)){
    body.append('ficheros', valor);
  }

  return await fetchFormData(endpoints.servicios, { method: requestMethods.post, body });
}

export async function enviarDatos(limite,inicioLista,alante,search1,search2){
  console.log('Estoy en api ',search1,search2);
  return (await fetchTravelApi(`${endpoints.servicios}?limite=${limite}&inicioLista=${inicioLista}&alante=${alante}&search1=${search1}&search2=${search2}`,{method: requestMethods.get}));
   
}

export async function deleteService(uri,metodo,condatos,ids){

  const obxRequest = montandoObxetos(uri,metodo);
  let request = new Request(obxRequest.url,{ headers: obxRequest.headers, method: obxRequest.method});
  if(condatos){
    const formu = new FormData();
    formu.append('ids',ids);
    request = new Request(obxRequest.url,{ headers: obxRequest.headers, method: metodo,body:formu});
  }
  const peticion = await fetch(request);
let datos = await peticion.json();
console.log(`Estoy en la funcion delete ${datos}`);
console.log(datos);
return datos;
}
