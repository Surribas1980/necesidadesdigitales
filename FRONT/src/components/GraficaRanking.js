import { useState, useEffect} from 'react';
import {Bar, Line} from 'react-chartjs-2';

export default function GraficaRanking(props){
    //const [datos, setDatos] = useState({});
    const puntu = [];
    const ranking1 = props.valores;
    console.log('lo que entra',ranking1)

  /*  const chart = () => {
        
        
    };*/
    for(let i=0; i< props.valores.length;i++){
        puntu.push(ranking1[i]['sum(puntuacion)']);
        
    }
    console.log('esto es puntuacion en: ',puntu);
    const nombres = ranking1.map((usuario)=> usuario.nom_usu);

    /*const colores = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    const puntos = [12, 19, 3, 5, 2, 3];*/
    return (<><h1>Ranking</h1>
        <Bar 
            data={{
                    labels: nombres,
                    datasets: [
                        {
                            label: '# Puntuación',
                            data: puntu,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            borderWidth: 1,
                        },
                        /*{
                            label: 'Quantity',
                            data: [10, 14, 67, 58, 30, 50],
                            backgroundColor: 'orange',
                            borderColor: 'red',
                        }*/
                    ]
                   }}
            height={100}
            width={600} 
            options={{
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                }
            }}
            
             />
        {/*<Line
          data={{
                labels: nombres,
                datasets: [
                    {
                        label: '# Puntuación',
                        data: puntu,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1,
                    },
                    {
                        label: 'Quantity',
                        data: [10, 14, 67, 58, 30, 50],
                        backgroundColor: 'orange',
                        borderColor: 'red',
                    }
                ]
            }}
            height={100}
            width={600} 
            options={{
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                }
            }}
        />*/}
    </>);
   
}