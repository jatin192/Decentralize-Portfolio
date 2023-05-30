import { useState,useEffect } from "react";
import "./education.css"
import { SlCalender } from "react-icons/sl"

let education = ({state})=>
{
    let [education_i,seteducation]=useState("");
    let [experience_i,setexperience]=useState("");
    useEffect(()=>
    {   
        let {contract} =state;
        
        let education_details = async()=>
        {
            let a = await contract.methods.show_Education_array().call();
            seteducation(a);
        }
        if(contract) //when we have contract instance
        {
            education_details();
        }
    },[state]);

    useEffect(()=>
    {   
        let {contract} =state;
        
        let experience_details = async()=>
        {
            let a = await contract.methods.show_Experience_array().call();
            setexperience(a);
        }
        if(contract) //when we have contract instance
        {
            experience_details();
        }
    },[state]);

    return(
        <section className="exp-section">
            <h1 className="title"> Education & Experience </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    {education_i!=="" && education_i.map((i)=>
                    {
                        return(   
                                <div className="edu-card">
                                    <p className="card-text1"><SlCalender className='icon' /> {i.date}</p>
                                    <h3 className="card-text2">{i.Institute_name}</h3>
                                    <p className="card-text4">{i.degree}</p>
                                </div>
                              )
                    })}
                   </div>

                   <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    {experience_i!=="" && experience_i.map((i)=>
                    {
                        return(   
                                <div className="edu-card">
                                    <p className="card-text1"><SlCalender className='icon' /> {i.timeperiod}</p>
                                    <h3 className="card-text2">{i.post}</h3>
                                    <p className="card-text3">{i.knowledgeAcquired}</p>
                                    <p className="card-text4">{i.company_name}</p>
                                </div>
                              )
                    })}
                 
                   </div>

                </div>
        </section>
    );
}
export default education;