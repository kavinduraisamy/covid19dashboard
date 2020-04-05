import React from 'react';
import { Line } from 'react-chartjs-2';
export default class confirmChart extends React.Component {

state={ data : {
  labels: ['07-March-2020', '18-March-2020', '20-March-2020', '21-March-2020', '22-March-2020', '23-March-2020', '24-March-2020'],
  datasets: [
    {
      label: 'Confirmed',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
}}

componentDidMount() {
        fetch('https://raw.githubusercontent.com/kavinduraisamy/covid19tamilnadu-database/master/daily-confirmed-count.json')
        .then((response) => response.json())
        .then(countData => {
var dataProperty = {...this.state.data};
dataProperty.labels = countData.labels;

dataProperty.datasets[0].data = countData.data;
this.setState({data:dataProperty});
        });
    }
    

  
render() {
        return (

 <div class="mt-3">
<Line data={this.state.data} />
</div>

)}

}


