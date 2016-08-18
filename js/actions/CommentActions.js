import AppDispactcher from '../dispatcher/AppDispatcher';
import CommentConstants from'../constants/CommentConstants';

class CommentActions {
	add(text){
		AppDispactcher.handleViewAction({
			actionType: CommentConstants.COMMENT_ADD,  text:text
		});
	}
	delete(id){
		AppDispactcher.handleViewAction({
			actionType:CommentConstants.COMMENT_DELETE, id:id
		});
	}
}

export default new CommentActions();