const iState = {userName: 'cmchandan', Password: '12345'};
import {Add, deleteData, getData} from '../Action/actionTypes';
const SampleReducer = (state = iState, action) => {
  if (action.type === Add) {
    return {userName: action.payload.uNAme, Password: action.payload.passwrd};
  }
  if (action.type === deleteData) {
    return {userName: action.payload.uNAme, Password: action.payload.passwrd};
  }

  return state;
};
export default SampleReducer;
