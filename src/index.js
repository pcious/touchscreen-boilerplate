import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers';
import { LanguageProvider } from './hoc/multilanguage';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './App.css';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const config = {
  defaultLanguage: 'en',
  allLanguages: ['en', 'th', 'zh']
};

ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider {...config}>
      <App />
    </LanguageProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
