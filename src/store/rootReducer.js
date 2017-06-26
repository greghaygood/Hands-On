/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Configure our rootReducer
 */

// Module imports
import { combineReducers } from 'redux';


// Reducer imports
import exampleReducer from './reducers/exampleReducer';


const appReducer = combineReducers({
  example: exampleReducer,
});


export default (state, action) => appReducer(state, action);
