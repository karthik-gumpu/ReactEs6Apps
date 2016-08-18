import React from 'react';

class CommentsApp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state ={ _comments:{}}
    this.save = this.save.bind(this);
  }
  save(e){
  	if(e.keyCode === 13){
  		let id=(new Date()+Math.floor(Math.random() * 999999)).toString(36);
  		this.state._comments[id]={id:id,text:e.target.value};
  		this.setState({_comments:this.state._comments});
  	}
  }
  render() {
    return (
      <div>
      	<CommentForm onFormSubmit={this.save} val={this.state.val}/>
      	<CommentList _comments={this.state._comments}/>
      </div>
    );
  }
}

const CommentForm = (props) => <div> 
							<h3> Comment Forum</h3>
							<input  type="text" onKeyDown={props.onFormSubmit}/>
							</div>

// class CommentList extends React.Component {
  
//     render() {
//     	var _comments=this.props._comments;
//     	var commentNodes=[]
//     	console.log("commentsss",this.props._comments);
//     	for (var key in _comments){
//     		commentNodes.push(<CommentItem key={key} comment={_comments[key]}/>);
//     	}
// 	    return (
// 	      <div>{commentNodes}</div>
// 	    );
//   }
// }

const CommentList = (props) =>{
	var _comments=props._comments;
    	var commentNodes=[]
    	for (var key in _comments){
    		commentNodes.push(<CommentItem key={key} comment={_comments[key]}/>);
    	}
	    return (
	      <div>{commentNodes}</div>
	    );
}

const CommentItem = (props) => <div>
									<ul>{props.comment.text}</ul>
								</div>

export default CommentsApp;