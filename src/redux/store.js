import { 
  applyMiddleware, 
  createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import rootReducer from './root-reducer';

const middleware = [];

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware)
));
