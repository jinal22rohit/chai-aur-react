import { useState } from 'react';

import viteLogo from '/vite.svg';
import './App.css';

import Chai from  "./chai"

function App(){
  const username = "chaiiiiii"
  return (
    <> 
    <Chai/>
    <h1>chai aur react {username}</h1>
    </>
     )
}

export default App;
