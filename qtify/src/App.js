import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { SnackbarProvider } from 'notistack';
import Section from './components/Albumcard/Section';
import Hero from './components/Herocomp/Hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SnackbarProvider>
        <Navbar/>
        <Hero/>
        
        <div> 
         <Section title={"Topalbum"} apiUrl={"https://qtify-backend-labs.crio.do/albums/top"}/>
         <Section title={"Newalbum"} apiUrl={"https://qtify-backend-labs.crio.do/albums/new"}/>
          </div>       
        </SnackbarProvider>
         
      
      </header>
    </div>
  );
}

export default App;
