import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';
import '../css/index.css';
import { AuthProvider } from '../hooks/auth';
import 'react-virtualized/styles.css';

class MyApp extends App {
  render()  {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <Provider store={store}>
          <Component {...pageProps}></Component>
        </Provider>
      </AuthProvider>
    )
  }
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);