import isEqual from 'lodash/isEqual';
import { useReducer, useCallback } from 'react';

const SET = 'SET';
const RESET = 'RESET';
const CLEAR = 'CLEAR';

const formReducer = (state, action) => {
  if (action.type === RESET) {
    return action.initialState;
  }
  if (action.type === CLEAR) {
    return {};
  }
  if (action.type === SET) {
    return { ...state, [action.field]: action.payload };
  }
  return state;
};

// memoize prior initial state
let priorInitialState = {};

/**
 * @param { object } initialState
 * @returns {object} useForm helpers
 */
function useForm(initialState = {}) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const updateField = useCallback(
    ({ target }) => dispatch({ type: SET, field: target.name, payload: target.value }),
    []
  );

  const initialStateDidNotChange = isEqual(priorInitialState, initialState);

  priorInitialState = initialState;

  // resets form to initialState
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resetForm = useCallback(() => dispatch({ type: RESET, initialState }), [
    // initialState obj requires deep compare
    initialStateDidNotChange,
  ]);

  // clears form of all data
  const clearForm = useCallback(() => dispatch({ type: CLEAR }), []);

  return { formData: state, updateField, resetForm, clearForm };
}

export default useForm;
