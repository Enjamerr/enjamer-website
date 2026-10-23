import { useCallback, useReducer } from 'react';

export const INITIAL_MESSAGE_STATE = { active: null };

export function messageReducer(state, action) {
  if (action.type === 'notify' && !state.active) {
    return { active: action.message };
  }
  if (action.type === 'dismiss') {
    return INITIAL_MESSAGE_STATE;
  }
  return state;
}

export default function useMessage() {
  const [state, dispatch] = useReducer(messageReducer, INITIAL_MESSAGE_STATE);
  const notify = useCallback((message, type = 'error') => {
    dispatch({ type: 'notify', message: { message, type } });
  }, []);
  const dismiss = useCallback(() => dispatch({ type: 'dismiss' }), []);
  return { message: state.active, notify, dismiss };
}
