
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import Hello from './components/Hello';
import mainApp from './components/mainapp';
// import Header from './components/header';
//import app from './app';
import { HashRouter as Router, Route,Link, withRouter } from 'react-router-dom';
//import { Switch, Redirect } from 'react-router';
//import Maincontainer from './components/maincontainer';
import addeventform from './components/Addeventform';
import updateeventform from './components/updateeventform';
declare let module: any;

//const createStoreWithMiddleware = applyMiddleware()(createStore);

const store =createStore(reducers);

ReactDOM.render( 
   
<Provider store={store}>
   <Router><div>
       
    <Route exact path="/" component={mainApp}></Route> 
    <Route  path="/AddEvent" component={addeventform}></Route>
    <Route  path="/update" component={updateeventform}></Route>
    </div>
    </Router>
</Provider>,
document.getElementById('root'));

// if (module.hot) {
//     module.hot.accept();
//     }
