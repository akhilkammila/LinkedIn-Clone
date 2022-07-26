import React from 'react';
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import { selectUser } from './features/counter/userSlice';
import {useSelector} from 'react-redux';
import Login from './Login.js';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">

      <Header />

      {!user ? <Login /> : (
        <div className = "app__body">
        <Sidebar />
        <Feed />
      </div>
      )}

    </div>
  );
}

export default App;