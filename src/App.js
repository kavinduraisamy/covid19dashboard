import React from 'react';


import './App.css';
import Counter from './components/Counter';
import DistrictTable from './components/DistrictTable';
import ConfirmChart from './components/ConfirmChart';

function App() {




  return (<div class="container">

	<ul class="nav">
  		<li class="nav-item">
    			<a class="nav-link active" href="#">Home</a>
  		</li>
  		<li class="nav-item">
    			<a class="nav-link" href="#">About us</a>
  		</li>
  		<li class="nav-item">
    			<a class="nav-link" href="#">Links</a>
  		</li>
	</ul>
	<div class="row mt-2">
		<div>'
		<span class="heading">TamilNadu COVID-19 Tracker</span>
		<p class="secondary text-muted text-right">[ unofficial site ]</p>
		</div>
	</div>
<div class="row">
<div class="col-sm-12 col-md-6">
	<Counter></Counter>
</div>
<div class="col-sm-12 col-md-6">
<ConfirmChart></ConfirmChart>
</div>
</div>

    
      <DistrictTable></DistrictTable>


<hr/>
<div class="row ">
<div class="col-12 text-center footer"><p>Number of views </p>
<a href="https://www.webfreecounter.com/" target="_blank"><img src="https://www.webfreecounter.com/hit.php?id=gvekqkop&nd=6&style=2" border="0" alt="hit counter" /></a>
</div>
</div>
    </div>
  );
}

export default App;
