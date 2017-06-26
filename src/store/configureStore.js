/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This is where we configure a Redux store
 */


// Module imports
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';


// Custom imports
import rootReducer from './rootReducer';


/**
 * @exports The created Redux Store
 */
export default createStore(rootReducer, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));
