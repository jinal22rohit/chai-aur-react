import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'
import  Card from './components/Card';

function App() {

  // object aavi rite pass thay 
  let myobj = {
    name:"hitesh",
    age:21
  }

  //jo object aavi rite pass thay toh array bi pass thay sake che. let's try 

  let newArr = [1,2,3];
  
  return (
    <>
      <h1 className='bg-green-500  p-20 rounded-xl mb-10' >tailwind testing </h1>
      <Card  Username='Krish patel'  text='computer engineer at Sunfarama.pvt.limited' />
      <Card  Username='Anand patel'  />
    </>
  );
}

export default App;
