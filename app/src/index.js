import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/config';
import Routing from './routing/Routing'
import './styles/main.scss';
// import 'semantic-ui-css/semantic.min.css';




const store = configureStore();


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routing />
        </Provider>
	</BrowserRouter>,
	document.getElementById('root')
);