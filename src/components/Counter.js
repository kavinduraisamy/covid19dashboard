import React from 'react';
class Counter extends React.Component {
    state = {
        count: {
"confirmed":0,
"active":0,
"recovered":0,
"deceased":0,
"delta":{ 
"confirmed":0,
"active":0,
"deceased":0
  
}
}
    }
    
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/kavinduraisamy/covid19tamilnadu-database/master/latest-count.json')
        .then((response) => response.json())
        .then(countData => {
            this.setState({ count: countData });
        });
    }
    
    render() {
        return (


	<div class="row mt-5">
		<div class="col-3">
                <div><p class="text-danger title text-center">CONFIRMED</p></div>
		<div><p class="text-danger count text-center">{this.state.count.confirmed}</p>
		{this.state.count.delta.confirmed ? <p class="text-danger count-secondary text-center">[{this.state.count.delta.confirmed}]</p> : ""}
</div>
		
		</div>

		<div class="col-3">
                <div><p class="text-info title text-center">ACTIVE</p></div>
		<div><p class="text-info count text-center">{this.state.count.active}</p>
		{this.state.count.delta.active ? <p class="text-info count-secondary text-center">[{this.state.count.delta.active}]</p> : ""}

		</div>
		
		</div>

		<div class="col-3">
                <div><p class="text-success title text-center">RECOVERED</p></div>
		<div><p class="text-success count text-center">{this.state.count.recovered}</p>
		{this.state.count.delta.recovered ? <p class="text-success count-secondary text-center">[{this.state.count.delta.recovered}]</p> : ""}
</div>
		
		</div>

		<div class="col-3">
                <div><p class="text-muted title text-center">DECEASED</p></div>
		<div><p class="text-muted count text-center">{this.state.count.deceased}</p>
{this.state.count.delta.deceased ? <p class="text-muted count-secondary text-center">[{this.state.count.delta.deceased}]</p> : ""}
</div>
		
		</div>
	</div>
		
           
        )
    }
} 

export default Counter;
