import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");



  return (
    <>
      <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 gap-3  inset-x-0 px-2 py-4"> 
            <div className="flex flex-wrap  justify-center gap-3  bg-white px-3  py-2 rounded-full">  <button onClick={()=> setColor("red")} className="outline-none px-7 rounded-full py-2 shadow-md text-white "style={{backgroundColor:"red"}}> Red</button></div> 
            <div className="flex flex-wrap  justify-center gap-3  bg-white px-3  py-2 rounded-full">  <button onClick={()=> setColor("yellow")}  className=" outline-none px-7 rounded-full py-2 shadow-md text-white "style={{backgroundColor:"yellow"}}> Yellow</button></div>
            <div className="flex flex-wrap  justify-center gap-3  bg-white px-3  py-2 rounded-full">  <button  onClick= {()=> setColor("green")} className=" outline-none px-7 rounded-full py-2 shadow-md text-white "style={{backgroundColor:"green"}}> green</button></div>
          </div>  
     </div>
     
    </>
  )
}

export default App;


// inset-X-0  x axis ma left:0px right:0px