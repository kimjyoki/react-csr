import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import UserExample from '@/components/UserExample';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserExample />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
);
