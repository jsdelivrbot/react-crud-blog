import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
    return { ...state, all: action.payload.data };
    //this is the api response, ...signigies 'whatever was already here'
    default:
    return state;
  }
}
