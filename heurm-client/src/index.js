import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import configureStore from 'redux/configureStore';
import { AppContainer } from 'react-hot-loader';
const store = configureStore();
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store}/>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(Root);

if(module.hot) {
    module.hot.accept('./Root', () => render(Root));
}

serviceWorker.unregister();
