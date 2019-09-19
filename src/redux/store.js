import {createStore,applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistStore} from 'redux-persist'


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));

const persistor = persistStore(store)

export {persistor,store}