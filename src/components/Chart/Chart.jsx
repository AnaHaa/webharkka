import React from 'react';
import {Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Charts = ({ data: { data } }) => {
    // Check if data is loaded
    if (!data) {
        return '. . .';
    } else { // Data is loaded, continue
        // Set the chart information and data. This is what the card - item uses to make the chart
        const chartData = {
            labels: ['Confirmed', 'Recovered', 'Currently', 'Deaths'],
            datasets:[
                {
                    label:'Overview of COVID-19 cases',
                    data: [
                        data.cases,
                        data.recovered,
                        (data.cases - data.recovered),
                        data.deaths
                    ],
                    backgroundColor:[
                        'darkgrey',
                        'orange',
                        'red',
                        'black'
                    ]
                }
            ]
        }
        // Return the chart HTML portion, with the data up
        // Set the chart styling in the return portion 
        return(
            <div className={styles.charts}>
                <Bar 
                    data={chartData}
                    options={{
                        title:{
                            display:true,
                            text:'Overview of COVID-19 cases',
                            fontSize:25,
                            fontColor: 'white'
                        },
                        legend:{
                            display:false
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        fontColor: 'white',
                                        callback: function(label, index, labels) {
                                            return label/1000000+' mil.';
                                        }
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }
                            ]
                        },
                        tooltips: { 
                            callbacks: {
                                label: function(tooltipItem, data) {
                                    return Number(tooltipItem.yLabel).toLocaleString('fi');
                                }
                            }
                        }
                    }}
                />
            </div>
        )
    }
}

export default Charts;