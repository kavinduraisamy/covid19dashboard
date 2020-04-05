import React from 'react';
class DistrictTable extends React.Component {
    state = {
        districts:[]
}
    
    
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/kavinduraisamy/covid19tamilnadu-database/master/district-wise.json')
        .then((response) => response.json())
        .then(districtData => {
            this.setState({ districts : districtData });
        });
    }
    
    render() {

return (
       <div class="row m-5">
	<table class="table table-borderless col-md-6 col-sm-12">
    <thead>
      <tr>
        <th>DISTRICT</th>
        <th class="text-center">CONFIRMED</th>
      </tr>
    </thead>
            <tbody>
               {this.state.districts.map((district) => (
<tr>
        <td>{district.name}</td>
        <td class="text-center">{district.count}</td>
      </tr>
                    
                ))}
            </tbody>
  </table></div>
        )


        
    }
}

export default DistrictTable; 
