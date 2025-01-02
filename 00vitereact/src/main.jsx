import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

function MyApp(){
    return(
        <div><h1> custom App</h1></div>
    );
}



// const reactElement ={
//     type:'a',
//     props: {
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
// }


const AnotherElement = ( 
<a href="https://google.com" target='_blank'> visit google </a>);

// React has its own method to create react elemnents 


const anotheruser = "teaaaaaaaaa"

const ReactElement =React.createElement(
    'a',{
         href:'https://google.com',  
         target:'_blank'
        },
         ' visiting google with react methods ',
         anotheruser
);

createRoot(document.getElementById('root')).render(
 
     
    ReactElement
);
