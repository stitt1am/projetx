
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
                labels: ["1", "2","3","4", "5","6"],
                datasets:[
                    {
                        label: "Stuff",
                        // backgroundColor: "white",
                        data:[4,5,1,10,32,2,12]
                    },
                    {
                        label: "letters",
                        // backgroundColor: "pink",
                        data:[14,15,21,0,12,4,22]
                    }

                ]
            }
        };

    }


    setGradientColor = (canvas, color)  =>{
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,0, 600, 500);
        gradient.addColorStop(0,color);
        gradient.addColorStop(0.90, "rgba(0,255,0,0.75)");
        gradient.addColorStop(0.90, "pink");
        // gradient.addColorStop(0.45, "blue");


        return gradient;
    }

    getChartData = canvas => {

        const data = this.state.data;
        console.log("data = ", data);

        if (data.datasets) {

            console.log("datasets = ", data.datasets);
            let colors = ["rgba(255,0,255,0.75)", "rgba(0,255,0,0.75)"];
            data.datasets.map((set, i) => {
                // set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor=this.setGradientColor(canvas, colors[i]);
                set.borderWidth=5;
            });
        }

        return data;
    }

    render() {
        return (


            <div className="lineChart">
                <h3>Chart Sample</h3>


                <Line
                    options={{responsive: true}}
                    data={this.getChartData}
                />



            </div>


        );
    }
}

export default LineChart;
