import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMeddleware from 'redux-thunk';
import weatherReducer from './reducer/weather-reducer';

let rootReducer = combineReducers({
  weather: weatherReducer,
});

type AppRootReducer = typeof rootReducer;

export type RootStateType = ReturnType<AppRootReducer>;

//Для работоспособности расширения redux devtools
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMeddleware)));

export default store;
