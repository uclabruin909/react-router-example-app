import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
	render() {
		return (<div>Hello</div>);
	}
}

class Goodbye extends React.Component {
	render() {
		return (<div>GoodBye</div>);
	}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
	    	<Route path="/Hello" component={Hello}></Route>
	    	<Route path="/Goodbye" component={Goodbye}></Route>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);


