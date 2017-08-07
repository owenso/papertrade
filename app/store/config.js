import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== 'prod') {  
	const loggerMiddleware = createLogger({
    level:'info'
  });
	middleware.push(loggerMiddleware);
}

export default function configureStore(preloadedState) {
	return createStore(
    reducers,
    preloadedState,
    applyMiddleware(...middleware)
  );
}