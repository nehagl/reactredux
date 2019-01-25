
import {combineReducers} from 'redux';
import reducerevent from './reducerevent';
import reducerdate from './reducerdate';
import reducervaluetime from './reducervaluetime';
const rootReducer=combineReducers({
eventList:reducerevent,todaysdate:reducerdate,valueList:reducervaluetime});
export default rootReducer;