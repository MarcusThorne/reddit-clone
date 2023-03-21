import React from 'react';
import './App.css';
import Navbar from './features/navbar/Navbar';
import Posts from './features/posts/Posts'
import Users from './features/topics/Topics'

function App() {
  return (
    <div className="App">
        <Navbar className='navbar' />
        <div className='appContent'>
            <Posts className='post' />
            <Users className='user' />
        </div>
    </div>
  );
}

export default App;
