import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setcounter] = useState(15)

//  let  counter = 15;
   const action = () => {
    console.log("clicked",counter);
    counter = counter+1 ;
    setcounter(counter);

   }

   let removevalue = () =>{
     counter = counter-1;
    setcounter(counter);
   }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value:{counter}</h2>
     <button
      onClick={action}>Add value{counter}</button>
     <br />
     <button onClick={removevalue}>remove value{counter}</button>
     <p >footer:{counter}</p>
    </>
  )
}

export default App
