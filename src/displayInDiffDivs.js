import React from 'react'
import CommentsApp from './CommentsApp'
import MixinApp from './MixinApp'
import BasicApp from './BasicApp'
export default class Hello extends React.Component {
	constructor(){
		super();
		this._onFirstClick = this._onFirstClick.bind(this);
		this._onSecondClick = this._onSecondClick.bind(this);
	}
  _onFirstClick(){
  	ReactDom.render(<CommentsApp />,document.getElementById('div2'));
  }
  _onSecondClick(){
  	  	ReactDom.render(<MixinApp/>,document.getElementById('div3'));

  }
  _onThirdClick(){
  		ReactDom.render(<BasicApp/>,document.getElementById('div4'));
  }
  render() {
  	console.log("main js");
    return (
    	<div>
    	<button onClick={this._onFirstClick}> First</button>
      	<button onClick={this._onSecondClick}> Second </button>
      	<button onClick={this._onThirdClick}> Third </button>
      <div id="div1"  style={{width: 1500 ,overflow:'hidden'}}> 
      	
      	<div id="div2" style={{width: 500, float: 'left'}}> First Area  </div>
      	<div id="div3" style={{width: 500,float: 'left'}}> Second Area </div> 
      	<div id="div4" style={{width: 500, float: 'right'}}> Third Area </div> 
      </div></div>
    );
  }
}