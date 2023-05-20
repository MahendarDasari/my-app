import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function UseSelectorSample() {
  const dispatch = useDispatch();
  const joke = useSelector(state => state.joke);

  return (
    <div>
      <p>useSelector : {joke}</p>
      <button onClick={() => dispatch({ type: 'JOKE_FETCH_REQUESTED' })}>
        Fetch new joke
      </button>
    </div>
  );
}

export default UseSelectorSample;
