import {Bar} from 'react-chartjs-2';

export default function GraficaRanking(props){

    const ranking = props.valores;
    console.log('Esto es valores ',props.valores);
    console.log('Esto es ranking',ranking);
    console.log('nombre usuario',ranking[0].nom_usu);
    console.log('Valor: ',ranking[0]['sum(puntuacion)'])
    const datos = {
        labels:[ranking[0].nom_usu,ranking[1].nom_usu,ranking[2].nom_usu,ranking[3].nom_usu],
        datasets:[{
            label: 'Ranking usuarios',
            backgroundColor: 'rgba(0,255,0,1)',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor:'rgba(0,255,0,0.2)',
            hoverBorderColor:'#FF0000',
            data: [ranking[0]['sum(puntuacion)'],ranking[1]['sum(puntuacion)'],ranking[2]['sum(puntuacion)'],ranking[3]['sum(puntuacion)']]
        }]
    };

    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }
    return (
    <>
        <h2>Grafica ranking</h2>
        <div width="400" height="900" >
            <Bar data={datos} options={opciones}></Bar>
        </div>
        
    </>
    );
}