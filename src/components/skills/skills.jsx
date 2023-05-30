import React from 'react'
import react from "./icons/react.svg";
import btc from "./icons/btc.png";
import eth from "./icons/eth.png";
import truffle from "./icons/truffle.png";
import gns from "./icons/gns.png";
import polygon from "./icons/polygon.png";
import node from "./icons/node.svg";
import './skills.css'

let skills = ()=>
{
    return (
        <section className="skills-section">
    
            <img src={react} alt="react-icon" />
            <img src={btc} alt="btc-icon" />
            <img src={eth} alt="eth-icon" />
            <img src={truffle} alt="truffle-icon" />
            <img src={gns} alt="gns-icon" />
            <img src={polygon} alt="polygon-icon" />
            <img src={node} alt="node-icon" />
            
        </section>
      )
};
export default skills;