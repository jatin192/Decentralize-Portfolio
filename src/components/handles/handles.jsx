import './handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { useState,useEffect } from "react";

let handles = ({state})=>
{
    // let {contract} =state;
    // return(
    //   <div>
    //       {contract ?  <section className='socials'>
    //       <a href="https://www.linkedin.com/in/jatin-singhal-b666441a6/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
    //       <a href="https://twitter.com/Jatin_192" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a>
    //       <a href="https://github.com/jatin192" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' />
    //       </a>
    //     </section> : "Please connect Metamask"}
    //     </div>
    // );
    
    return(
          <section className='socials'>
          <a href="https://www.linkedin.com/in/jatin-singhal-b666441a6/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
          <a href="https://twitter.com/Jatin_192" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a>
          <a href="https://github.com/jatin192" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' />
          </a>
        </section> 
    );
};
export default handles;