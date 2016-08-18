import React from 'react'

var CS={'a':['aa','ab','ac','ad'],'b':['bd','be','bg'],'c':['ca','cr','cg','ct','cz','ck']}
class CountryStateSelector extends React.Component {
 	constructor(){
	 	super();
	 	this.state={ countries: Object.keys(CS), countryOptions : [], stateOptions:[] }
	 	
	 	

	 	this.createOptions = this.createOptions.bind(this)
	 	this.onCountrySelect = this.onCountrySelect.bind(this)
	 	this.showSelectedOptions = this.showSelectedOptions.bind(this)
 	}
 	componentDidMount(){
  		var newOptions= this.createOptions(this.state.countries)
  		this.setState({countryOptions:newOptions})
 	}
 	createOptions(options){
 		var newOptions=[]
 		for (var i=0; i< options.length ; i++){
 			newOptions.push(<option value={options[i]} key={i}> {options[i]}</option>)
 		}
 		return newOptions;
 	}
 	onCountrySelect(){
 		var countryList = document.getElementById('countrySelector')
 		document.getElementById('stateSelector').selectedIndex=0
 		var selectedCountry= countryList.value
 		var states= CS[selectedCountry]
 		var newOptions = this.createOptions(states);
 		this.setState({stateOptions:newOptions})
 	}
 	showSelectedOptions(){
 		var countryList = document.getElementById('countrySelector')
 		var stateList = document.getElementById('stateSelector')
 		var textField = document.getElementById('textField')
 		console.log("selected options",textField.value,countryList.value, stateList.value)
 	}
  	render() {
	    return(
		    <div>
		    	<input type="text" placeholder="Enter your name" id="textField"/>
		      	<select id="countrySelector" onChange={this.onCountrySelect}>
		      		<option value="-1">select Country</option>
		      		{this.state.countryOptions}
		      	</select>
		      	<select id="stateSelector">
		      		<option value="-1">Select State</option>
		      		{this.state.stateOptions}
		      	</select>
		      	<button onClick={this.showSelectedOptions}>Submit </button>
		    </div>
	    );
  	}
}


export default CountryStateSelector