import React from 'react';
import ReactDom from 'react-dom';
class App extends React.Component {
  
  constructor() {
    super();
    this.state= {
    	red:1,
    	green:1,
    	blue:1
    };
    this.update = this.update.bind(this);
  }

  update(e){
  	this.setState({
  		red: ReactDom.findDOMNode(this.refs.red.refs.inp).value,
  		green: ReactDom.findDOMNode(this.refs.green.refs.inp).value,
  		blue: ReactDom.findDOMNode(this.refs.blue.refs.inp).value

  	})
  }
  componentDidMount(){
    console.log("finding dom node",ReactDom.findDOMNode(document.getElementById('div3')));
  }
  render() {
    
    return (
     	<div>
     		<h3>{this.state.red}</h3>
     		<Widget ref="red" update={this.update}  />
     		<h3>{this.state.green}</h3>     		
     		<Widget ref="green" update={this.update}  />
     		<h3>{this.state.blue}</h3>
     		<Widget ref="blue" update={this.update}  />

     	</div>
    );
  }
}


class Widget extends React.Component {
  
  render() {
    return (
       <div>
      	<input ref="inp" type="range" min="0" max="255" step="5" onChange={this.props.update} />
      </div>
    );
  }
}


export default App;