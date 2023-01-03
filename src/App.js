import React from 'react';
import { Routes, Route } from "react-router";
import LobbyPage from './pages/lobbyPage/lobbyPage';
import CodeBlockPage from './pages/codeBlockPage/codeBlockPage';
import NewCodeBlockPage from './pages/codeBlockPage/newCodeBlockPage';
import './App.css';

function App() {
  return (
      <div className = "App">
          <h1>Moveo Task</h1>
          <Routes>
              <Route path='/' element = { <LobbyPage/> }/>
              <Route path= '/codeBlock/:id' element={ <CodeBlockPage/> }/>
              <Route path='/newCodeBlock' element = { <NewCodeBlockPage/> }/>
          </Routes> 
      </div>
    );
  }

export default App;
