export default function PagGinar(valor){
    const paginacion = [];
    let num = 2;
    let i = 1;
   
    while(num*i<valor){
        
        let division = valor/(num*i);
        paginacion.push(division);
        i++;
    }
    return paginacion;
}