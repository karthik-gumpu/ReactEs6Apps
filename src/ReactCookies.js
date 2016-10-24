import React from 'react';
import cookie from 'react-cookie'
export default class ReactCookies extends React.Component {
  
  constructor(props) {
    super(props);
    cookie.save('name','karthik')
    document.cookie='company=Netenrich'
    this.onbuttonclick = this.onbuttonclick.bind(this)
  }
  onbuttonclick(){
  	console.log('asdfasdf');
  	// var div=document.getElementById('hai');
  	//   	console.log('asdfasdf',div);

    // if (div.style.display !== 'none') {
    //     div.style.display = 'none';
    // }
    // else {
    //     div.style.display = 'block';
    // }
  }
  render() {
    return(
      <div> ReactCookies { cookie.load('name')}
      	<div id="hai" >
      		this is hidden div
      	</div>
      	<button onClick={this.onbuttonclick}> click me </button>
      </div>
    );
  }
}
