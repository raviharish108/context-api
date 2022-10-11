import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import {  createContext, useContext, useState } from 'react';
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

 //3.props drilling chenge the color mode
// function App() {
//   const[mode,setmode]=useState("light");
//   const style={
//     background:mode==="light"?"white":"black"
//   }
//   return (
//    <div style={style}>
//       <App1 mode1={mode} setmode1={setmode}/>
//    </div>
//   );
// }

// function App1({mode1,setmode1}){
//   return(
//   <div>
//     <App2 mode2={mode1} setmode2={setmode1}/>
//   </div>
//   )
// }

// function App2({mode2,setmode2}){
//   const buttonstyle={
//     background:mode2==="light" ? "black":"white",
//     color: mode2==="light" ? "white" : "black",
//     margin:"5px",
//     padding:"10px"
//   }
//   return(
//     <div>
//       <ul>
//         <li>
//           <button style={buttonstyle} onClick={()=>setmode2("light")} value={mode2}>light</button>
//         </li>
//         <li>
//           <button style={buttonstyle} onClick={()=>setmode2("dark")} value={mode2}>dark</button>
//         </li>
//       </ul>
//     </div>
//   )
// }

// context change color mode
function App() {
  const[mode,setmode]=useState("light");
  const value1={Mode:mode,Setmode:setmode};
  const style1={
    background:mode==="light" ? "white" : "black"
  }
  return (
    <context.Provider value={value1}>
          <div style={style1}> 
             <App1/>  
          </div> 
     </context.Provider>
  
  );
}
function App1(){
  return(
    <div>
       <App2/>
    </div>
  )
}
const context=createContext();
 function App2(){
  const{Mode,Setmode}=useContext(context)
  const buttonstyle={
      background:Mode==="light" ? "black" : "white",
      color:Mode==="light" ? "white" : "black",
      margin:"5px",
      padding:"10px"
  }
  return(
    <div>
      <ul>
        <li>
          <button style={buttonstyle} onClick={()=>Setmode("light")} >light</button>
        </li>
        <li>
          <button style={buttonstyle} onClick={()=>Setmode("dark")}>dark</button>
        </li>
      </ul>

    </div>
  )
 }

export default App;
