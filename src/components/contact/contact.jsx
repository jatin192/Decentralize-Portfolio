import { useState,useEffect } from "react";
import './contact.css'

let contact = ({state})=>
{
    let {contract} =state;
    let [resume_i,setresume]=useState("");
    useEffect(()=>
    {   
        let Resume_link = async()=>
        {
            let a = await contract.methods.show_Pinata_Resume().call();
            setresume(a);
        }
        if(contract) //when we have contract instance
        {
            Resume_link();
        }
    },[state]);
    return(

        <section className="contact-section">
            <h1 className="title">Interested?Let's Get In Touch!</h1>
            <a href={`https://gold-partial-butterfly-977.mypinata.cloud/ipfs/${resume_i}`} target='_blank' rel="noopener noreferrer">
                <button className="downlodeBTN">View Resume</button>
        </a>

    </section>

    );
};
export default contact;