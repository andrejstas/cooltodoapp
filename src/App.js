import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TodoWrapper from './components/todoList/TodoWrapper';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Header/>
          <TodoWrapper />
          <Footer />
        </div>
      </Provider>
  );
}

export default App;
