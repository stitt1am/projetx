import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';
import './pieChart.scss';


class PieChart extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:{
                labels: ["1"],
                datasets:[
                    {
                        // label: "Stuff",
                        backgroundColor: "rgba(246, 35, 120)",
                        data:[4,5],
                        // pointRadius:9,
                        // width:600,
                        pointRotation:5,
                        showLine:true,
                        pointHitRadius:12,
                        pointHoverBorderColor:'green'
                    },
                    {
                        // label: "letters",
                         backgroundColor: "pink",
                        data:[0]
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
        gradient.addColorStop(0.50, "rgb(159, 10, 71)");
        gradient.addColorStop(0.25, "blue");
        // rgb(159, 8, 119) 40%, rgb(159, 10, 71

        return gradient;
    }

    getChartData = canvas => {

        const data = this.state.data;
        console.log("data = ", data);

        if (data.datasets) {

            console.log("datasets = ", data.datasets);
            let colors = ["rgba(246, 35, 120)", "blue", "green"];
            data.datasets.map((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
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
          <div className="pie"><Pie data={this.getChartData}/></div>
        );
    }

    }
export default PieChart;
