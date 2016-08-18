import React from 'react';
import CommentActions from '../actions/CommentActions';
import CommentStores from '../stores/CommentStores';
class CommentsApp extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {_comments:{}};
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount(){
   CommentStores.addChangeListener(this.onChange);
  }
  componentDidUnMount(){
    CommentStores.removeChangeListener(this.onChange);
  }
  onChange(){
    this.setState({_comments:CommentStores.getAll()});
  }
  render() {
    return (
      <div> 
      	<CommentForm/>
        <CommentList _comments={this.state._comments}/>
      </div>
    );
  }
}


class CommentForm extends React.Component {
 
  constructor(props) {
    super(props);
  }
  submit (e){
  	if(e.keyCode === 13){
  		CommentActions.add(e.target.value);
  	}
  }

  render() {
    return (
      <div>
      	<input type="text" onKeyDown={this.submit}/>
      </div>
    );
  }
}

const CommentList = (props) => {
    let commentNodes=[];
    for (let key in props._comments){
      commentNodes.push(<CommentItem key={key} comment={props._comments[key]} />);
    }
    return(
      <div>
        {commentNodes};
      </div>
      );
}


class CommentItem extends React.Component {
  deleteItem(event){
    CommentActions.delete(event.target.id);
  }
  render() {
    return (
     <div> {this.props.comment.text}  
     <button onClick={this.deleteItem} id={this.props.comment.id}> Button </button>
      </div>
    );
  }
}


export default CommentsApp;