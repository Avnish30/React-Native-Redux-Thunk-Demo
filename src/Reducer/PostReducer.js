const iState = [];
import {getData} from '../Action/actionTypes';
const PostReducer = (state = iState, action) => {
  if (action.type === getData) {
    return action.payload;
  }
  return state;
};
export default PostReducer;
