/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Example reducer to use for our Redux tests
 */


// initialState
const initialState = {
  name: 'Mitch',
  company: 'TalkRise',
  exercise: 'learning about testing with Jest',
  counter: 0,
};


export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case 'UPDATE_NAME':
      return {
        ...reduxState,
        name: payload.name,
      };
    case 'UPDATE_COMPANY':
      return {
        ...reduxState,
        company: payload.company,
      };
    case 'UPDATE_EXERCISE':
      return {
        ...reduxState,
        exercise: payload.exercise,
      };
    case 'COUNT':
      return {
        ...reduxState,
        counter: reduxState.counter + 1,
      };
    default:
      return reduxState;
  }
};
