import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SnackbarProvider>
        <Navbar/>
        </SnackbarProvider>
         
      
      </header>
    </div>
  );
}

export default App;
