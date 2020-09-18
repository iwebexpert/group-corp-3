import { Middleware } from 'redux';
import { chatsMarkRead, messagesLoad } from '../actions';
import { LOCATION_CHANGE } from 'connected-react-router';

export const routeMiddleware: Middleware = store => next => action => {
  if (action.type === LOCATION_CHANGE) {
    const activeChatId = store.getState().router.location.pathname.substring(1);
    console.log(activeChatId);


    if (activeChatId) {
      store.dispatch(messagesLoad(activeChatId) as any);
      store.dispatch(chatsMarkRead(activeChatId));
    }
  }

  return next(action);
};