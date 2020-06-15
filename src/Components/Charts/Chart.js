import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js';
//Estilos
import './Chart.css';

const Chart = ({ id, title, label, color, origin, type, sequence }) => {
    //Constantes
    const DEFAULT_ID     = 'test';
    const DEFAULT_TYPE   = 'bar';
    const DEFAULT_COLOR  = 'rgba(255, 0, 255, 0.5)';
    const DEFAULT_LABEL  = 'Valores';

    //HOOKS
    //Ref
    const chartCanvas = useRef(null);

    useEffect(() => {
        const canvasContext = chartCanvas.current.getContext('2d');
        let progress = {}
        new ChartJS(canvasContext, {
            type: type || DEFAULT_TYPE,
            data: {
                labels: calculateLabels(),
                datasets: [
                    {
                        label: label || DEFAULT_LABEL,
                        data: sequence,
                        borderWidth: 2,
                        borderColor: color ? `rgba(${color}, 1)` : DEFAULT_COLOR,
                        backgroundColor: color ? `rgba(${color}, 0.4)` : DEFAULT_COLOR,
                        
                    }
                ],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero : true
                        },
                    }],
                    xAxes: [{
                        barPercentage: calculateBarWidth(),
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }]
                },
                title: {
                    display: title ? true : false,
                    text: title
                },
                
            },

        });
    }, []);

    const calculateLabels = () => {
        let labels = new Array(sequence.length);
        return Array.from(labels).map((emptyLabel, index) => index - origin)
    }

    const calculateBarWidth = () => {
        return 0.009 * sequence.length; 
    }
    return(
        <div>
            <canvas 
                id = { id || DEFAULT_ID }
                ref = { chartCanvas }

            />
        </div>
    )
}

export default Chart;