export default function PagGinar(valor){
    const paginacion = [];
    let num = 2;
    let i = 1;
   
	let resto = valor % 2;
	let numPaginacion = valor / 2;

	if(resto === 0){
	  for(let i=1;i<(numPaginacion+1);i++){
		  console.log('Estoy con resto 0');
		  paginacion.push(i);
	  }
	}else{
		console.log('Esto es el redondeo: ',Math.round(numPaginacion));
	  for (let i=1; i< (Math.round(numPaginacion)+1);i++){
		  console.log('Estoy sin resto 0')
		  paginacion.push(i);
	  }

	}
    
    return paginacion;
}
