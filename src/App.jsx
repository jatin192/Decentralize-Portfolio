import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import INSTRUCTIONS from './components/instructions/instructions'
import WALLET from './components/wallet/wallet'
import PROJECTS from './components/projects/projects'
import PERSONAL_INFORMATION from   './components/personal_information/personal_information'
import Handles from './components/handles/handles'
import SKILLS from './components/skills/skills'
import EDUCATION from './components/education/education'
import CONTACT from './components/contact/contact'
import ACHIEVEMENTS from './components/achievements/achievements'

function App() {
  let obj =
  {
    web3:null,
    contract:null
  }
  
  //const [state, setState] = useState(initialValue);
  let[i,setstate]=useState(obj);

  let save_state = (j)=>
  {
    console.log("i=",j);
    setstate(j);
  }
  return (
    <>
      <INSTRUCTIONS></INSTRUCTIONS>
      <WALLET i={save_state} ></WALLET>
      <PERSONAL_INFORMATION state ={i}></PERSONAL_INFORMATION>
      <PROJECTS state ={i}></PROJECTS>
      <SKILLS></SKILLS>
      <EDUCATION state ={i}></EDUCATION>
      <ACHIEVEMENTS state ={i}></ACHIEVEMENTS>
      <CONTACT state ={i}></CONTACT>
      <Handles state ={i} ></Handles>
      
    </>
  );
}

export default App;
// child component function can call parent function so -> u need to pass savestate to wallet component
