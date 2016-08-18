import AppDispatcher from '../dispatcher/AppDispatcher';
import CommentConstants from '../Constants/CommentConstants';
import Events from 'events';

const CHANGE_EVENT = 'change';


class CommentStores extends Events.EventEmitter {
	constructor(props){
		super(props);
		this._comments={};
		this.dispatcherIndex = AppDispatcher.register(this.handleAction.bind(this));

	}

	addComment(text){
		let ID= Date.now();
		this._comments[ID]={
			id:ID,
			text:text
		};
	}
	deleteComment(id){
		delete this._comments[id];
	}
	getAll(){
		return this._comments;
	}
	emitChange(){
		this.emit(CHANGE_EVENT);
	}
	addChangeListener(callback){
		this.on(CHANGE_EVENT,callback)
	}
	remvoeChangeListener(callback){
		this.removeListener(CHANGE_EVENT,callback);
	}
	handleAction(payload){
		let action = payload.action;
		
		switch(action.actionType){
			case CommentConstants.COMMENT_ADD:
				this.addComment(action.text);
				this.emitChange();
				break;
			case CommentConstants.COMMENT_DELETE:
				this.deleteComment(action.id);
				this.emitChange();
				break;

		}
		return true;
	}

}
export default new CommentStores();