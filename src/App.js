import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TodoWrapper from './components/todoList/TodoWrapper';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoWrapper />
      <Footer />
    </div>
  );
}

export default App;
