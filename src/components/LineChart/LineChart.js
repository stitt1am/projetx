
import React, {Component} from 'react';
import MediaCard from '../../components/MediaCard/MediaCard';
import petal from '../../image/petals.jpg';
import dots from '../../image/dots.jpg';
import Chart from '../../../node_modules/chart.js/dist/Chart.js';
import {Line,Doughnut, Scatter,Polar, Pie } from 'react-chartjs-2';
import './lineChart.css';


class LineChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:{
                labels: ["1","2","3","4", "5","6","4", "5","6"],
                datasets:[
                    {
                        // label: "Stuff",
                        //  backgroundColor: "white",
                        data:[18,20,25,22,18,22,20,32,35],
                        showLine:true,
                        pointHitRadius:12,
                        pointHoverBorderColor:'white'
                    },
                    {
                        // label: "letters",
                        // backgroundColor: "pink",
                        data:[3,5,2,0,12,4,18,12,15],
                        pointHoverBorderColor:'white',
                        borderDash:[6,6]

                    }

                ]
            }
        };

    }


    setGradientColor = (canvas, color)  =>{
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,0, 400, 400);
        gradient.addColorStop(0,color);
        gradient.addColorStop(0.90, "rgb(159,8,119)");
        gradient.addColorStop(0.90, "rgb(159, 10, 71)");
        // gradient.addColorStop(0.45, "blue");
        // rgb(159, 8, 119) 40%, rgb(159, 10, 71

        return gradient;
    }

    getChartData = canvas => {

        const data = this.state.data;
        console.log("data = ", data);

        if (data.datasets) {

            console.log("datasets = ", data.datasets);
            let colors = ["rgba(246, 35, 120)", "blue"];
            data.datasets.map((set, i) => {
                // set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.pointHoverBackgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor=this.setGradientColor(canvas, colors[i]);
                set.borderWidth=5;
                set.showLine= true;
                set.pointRadius =0;
            });
        }

        return data;
    }

    render() {
        return (


            <div className="lineChart">
                <Line
                    options={
                        {
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        display: true,
                                        color: 'rgba(246, 11, 91,0.3)',
                                        lineWidth: 0.5,
                                        drawTicks: true,
                                        drawBorder: false,

                                        // zeroLineWidth:30,
                                        // zeroLineColor: 'white',
                                        //  tickMarkLength:13,
                                        // zeroLineWidth:300,
                                        // zeroLineBorderDash:50
                                    }
                                    , ticks: {
                                        display: false,

                                    }

                                }],
                                yAxes: [{
                                    gridLines: {
                                        display: false,
                                        drawBorder: false,

                                    }, ticks: {
                                        display: false
                                    }
                                }],
                            },
                            legend: {display: false,},
                            tooltips: {callbacks: {
                                    label: function (tooltipItem, data) {
                                        var label = data.datasets[tooltipItem.datasetIndex].label || 'right he4re';

                                        if (label) {
                                            label += ': ';
                                        }
                                        label += Math.round(tooltipItem.yLabel * 100) / 100;
                                        return label;
                                    }
                                },
                                intersect:true,
                                mode: 'label',  // or 'x-axis'
                                backgroundColor:'rgb(5, 5, 83)',
                                bodyFontFamily: 'Helvetica'

                                },
                        }}
                    data={this.getChartData}
                />
            </div>


        );
    }
}

export default LineChart;
