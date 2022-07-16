import logo from './logo.svg';
import './App.css';
import { createContext, useContext, useState } from 'react';
//props drilling example....
// function App() {
//   let[like,setlike]=useState(0);
//   return (
//    <div>
//     <Son like1={like} setlike1={setlike}/>
//    </div>
//   );
// }

// function Son({like1,setlike1}){
//   return(
//    <div>
//     <Mygrandchild like2={like1} setlike2={setlike1}/>
//    </div>
//   )
// }

// function Mygrandchild({like2,setlike2}){
//   return(
// <div>
//   <button onClick={()=>setlike2(like2+1)}>like{like2}</button>
// </div>
//   )
// }


// 2.to avoid props drilling we are going to use context//
// function App() {
//   const[state,setstate]=useState(0);
//   const obj={state1:state,setstate1:setstate};
//   return (
//     <context.Provider value={obj}>
//    <div>
//     <App1/>
//    </div>
//    </context.Provider>
//   );
// }

// function App1(){
//   return(
//     <div>
//       <App2/>
//     </div>
//   )
// }

// const context=createContext();
// function App2(){
//   const{state1,setstate1}=useContext(context)
//   return(
//  <div>
//   <button onClick={()=>setstate1(state1+1)}>like{state1}</button>
//  </div>
//   )
// }

function App() {
    const[state,setstate]=useState("light");
    const styless={
        background:state === "light" ? "white" : "black",
        hight:"500px",
        width:"500px",
        border:"1px solid black"
    }
    const buttonstyle={
        background:state === "light" ? "black" : "white",
        color:state === "light" ? "white" : "black",
        margin:"10px"
    
    }
    return (
      <div  style={styless}>
        <ul>
        <li> <button style={buttonstyle} onClick={()=>setstate("light")} value={state}> light mode</button></li>
        <li> <button style={buttonstyle} onClick={()=>setstate("dark")} value={state}> dark mode</button></li>
         </ul>
      </div>
          );
                }
export default App;
