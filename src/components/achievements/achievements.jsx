import { useState,useEffect } from "react";
import './achievements.css'

let achievements =({state})=>
{
    let [achievements_i,set_achievements] =useState("");
    useEffect(()=>
    {   
        let {contract} =state;
        
        let achievements_details = async()=>
        {
            let a = await contract.methods.show_Achievements_array().call();
            set_achievements(a);
        }
        if(contract) //when we have contract instance
        {
            achievements_details();
        }
    },[state]);
    return(
        <section className="exp-section">
            <h1 className="title">Achievements</h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle"></h1>
                    {achievements_i!=="" && achievements_i.map((i)=>
                    {
                        return(   
                                <div className="edu-card">
                                    {/* <p className="card-text1"><SlCalender className='icon' /> {i.date}</p> */}
                                    <h3 className="card-text2">{i.award_rank}</h3>
                                    <p className="card-text4">{i.description}</p>
                                </div>
                              )
                    })}
                </div>
            </div>
                </section>

    );
}
export default achievements;