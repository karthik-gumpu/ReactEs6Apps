import React from 'react';

let Mixin = InnerComponent => class extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={ name: "Button", val:0};
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState({val: this.state.val+1});
  }
  render(){
    return (<InnerComponent update={this.update} {...this.state} {...this.props}/>);
  }
}

const Button = (props) => <button onClick={props.update}> {props.name}-{props.val}</button>
const Label = (props) => <label onMouseOver={props.update}> {props.name}-{props.val}</label>

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class MixinApp extends React.Component {
  
  render() {
    return (
      <div>
      	 <ButtonMixed name="Button"/>
         <LabelMixed name="label"/>
      </div>
    );
  }
}

export default MixinApp;