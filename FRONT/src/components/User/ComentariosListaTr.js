import ComentarioListaTd from "./ComentarioListaTd";

function ComentarioListaTr(props){

    return (<tr>{
                 props.dato?.map((item,index)=>{
                 return <ComentarioListaTd key={index} elementos={item} />})
    }</tr>)

};

export default ComentarioListaTr;