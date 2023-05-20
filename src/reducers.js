const initialState = {
    joke: '',
  };
  
  function jokeReducer(state = initialState, action) {
    switch (action.type) {
      case 'JOKE_FETCH_SUCCEEDED':
        return {
          ...state,
          joke: action.joke,
        };
      default:
        return state;
    }
  }
  
  export default jokeReducer;
  