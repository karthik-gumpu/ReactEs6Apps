import React from 'react'

var CS={'a':['aa','ab','ac','ad'],'b':['bd','be','bg'],'c':['ca','cr','cg','ct','cz','ck']}
class CountryStateSelector extends React.Component {
 	constructor(){
	 	super();
	 	this.state={ countries: Object.keys(CS), countryOptions : [], states:[], matchedStates:[] }
	 	
	 	

	 	this.createOptions = this.createOptions.bind(this)
	 	this.onCountrySelect = this.onCountrySelect.bind(this)
	 	// this.showSelectedOptions = this.showSelectedOptions.bind(this)
	 	this.onSearchState = this.onSearchState.bind(this)
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
 		var selectedCountry= countryList.value
 		var states= CS[selectedCountry]
 		this.setState({states:states})
 	}
 	onSearchState(e){
 		console.log('entered text',e.target.value)
 		var searchText = e.target.value.toLowerCase()
 		var states = this.state.states
 		var matchedStates=[]
 		for( var i=0; i<states.length;i++){
 			if(states[i].toLowerCase().search(searchText) !== -1){
 				matchedStates.push(<option key={i}> {states[i]}</option>)
 			}
 		}
 		this.setState({matchedStates:matchedStates})

 	}
 	// showSelectedOptions(){
 	// 	var countryList = document.getElementById('countrySelector')
 	// 	var stateList = document.getElementById('stateSelector')
 	// 	var textField = document.getElementById('textField')
 	// 	console.log("selected options",textField.value,countryList.value, stateList.value)
 	// }
  	render() {
	    return(
		    <div>
		    	<input type="text" placeholder="Enter your name" id="textField"/>
		      	<select id="countrySelector" onChange={this.onCountrySelect}>
		      		<option value="-1">select Country</option>
		      		{this.state.countryOptions}
		      	</select>
		      	<input id="stateSelector" onChange={this.onSearchState} list="statesDataList"/>
		      	<datalist id="statesDataList">{this.state.matchedStates}</datalist>
		      	
		      	<input type="text" id="default" list="languages" placeholder="e.g. JavaScript"/>
  
			 	<datalist id="languages">
				    <option value="HTML"/>
				    <option value="CSS"/>
				    <option value="JavaScript"/>
				    <option value="Java"/>
				    <option value="Ruby"/>
				    <option value="PHP"/>
				    <option value="Go"/>
				    <option value="Erlang"/>
				    <option value="Python"/>
				    <option value="C"/>
				    <option value="C#"/>
				    <option value="C++"/>
			  	</datalist>
		    </div>
	    );
  	}
}


export default CountryStateSelector