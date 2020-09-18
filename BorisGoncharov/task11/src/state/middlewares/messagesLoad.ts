import { Middleware } from 'redux';
import { messagesLoad, messagesShowLoading } from '../actions';
import { LOCATION_CHANGE } from 'connected-react-router';

export const messagesLoadMiddleware: Middleware = store => next => action => {
  if (action.type === LOCATION_CHANGE) {
    const activeChatId = store.getState().router.location.pathname.substring(1);
    console.log(action);

    store.dispatch(messagesShowLoading());
    store.dispatch(messagesLoad(activeChatId) as any);
  }

  return next(action);
};