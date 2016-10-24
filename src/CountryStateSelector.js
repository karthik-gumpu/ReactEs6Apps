import React from 'react'

var CS={'a':['aa','ab','ac','ad'],'b':['bd','be','bg'],'c':['ca','cr','cg','ct','cz','ck']}
class CountryStateSelector extends React.Component {
	constructor(props){
		super(props)
		this.state ={flag:true}
	}
	onChange(){
		this.setState({flag:!this.state.flag})
	}
  	render() {
	    return(
		    <div>
				    	
		<input type="checkbox" name="vehicle" value="Bike"/> I have a bike<br/>
		<input type="checkbox" name="vehicle" value="Car" checked={this.state.flag} onChange={this.onChange.bind(this)}/> I have a car<br/>
		<input type="submit" value="Submit"/>
		    </div>
	    );
  	}
}


export default CountryStateSelector