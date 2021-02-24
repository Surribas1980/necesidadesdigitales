import {Bar, Line} from 'react-chartjs-2';

function Graficas(){
    const colores = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    const puntos = [12, 19, 3, 5, 2, 3];
    return (<><h1>Estoy en Graficas</h1>
        <Bar 
            data={{
                    labels: colores,
                    datasets: [
                        {
                            label: '# Puntuación',
                            data: puntos,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
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
            
             />
        <Line
          data={{
            labels: colores,
            datasets: [
                {
                    label: '# Puntuación',
                    data: puntos,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
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
        />
    </>);
}

export default Graficas;