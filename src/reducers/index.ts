import { ADD_ARTICLE } from '../constants/action-constants';
import IAction from '../ts/IAction';

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action: IAction) => {
  switch(action.type) {
    case ADD_ARTICLE:
      return {...state, articles: [...state.articles, action.payload]};
    default:
      return state;
  }
  return state;
};
export default rootReducer;