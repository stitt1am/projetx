import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';


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

    render() {
        return (
          <div><Pie data={this.state.data}/></div>
        );
    }

    }
export default PieChart;
