import { Middleware } from "redux";
import { LOCATION_CHANGE } from "connected-react-router";
import { matchPath } from "react-router-dom";

export const chatMiddleware: Middleware = store => next => action => {
    const result = next(action);

    if (action.type === LOCATION_CHANGE) {
        const chatLocation = matchPath(action.payload.location.pathname, { path: '/chat/:id' });
        if (chatLocation) {
            
        }
    }

    return result;
};