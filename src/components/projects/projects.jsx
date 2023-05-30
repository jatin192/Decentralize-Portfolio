import { useEffect, useState } from "react"
import "./projects.css"
import { FaDonate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap"


let projects = ({state})=>  //as a props we receive state
{
    let [modal, setModal] = useState(false);
    let [projects,setprojects]=useState("");

//_________________________________________________________________________________________________________________
    useEffect(()=>
    {   
        //we can excess contract instance via state 
        let {contract} =state;
        console.log("contract =",{contract})
        //communication with smart contract
        let projects_details = async()=>
        {
            let projects = await contract.methods.show_Project_array().call();
            // console.log(projects);
            setprojects(projects);
        }
        if(contract) //when we have contract instance
        {
            projects_details();
        }
    },[state]) //dependency list ?????????
//_________________________________________________________________________________________________________________
    let donateEth =async(event)=>
    {
        event.preventDefault(); //form submit->page reload to prevent this
        try
        {
            const {web3,contract}=state;
            let eth = document.querySelector("#eth").value;
            let Eth_to_wei = web3.utils.toWei(eth,"ether");  // wei to Eth
            
            let accounts_ = await web3.eth.getAccounts();   // fetching connected accounts
            
            await contract.methods.donate().send({from:accounts_[0],value:Eth_to_wei,gas:480000});
            alert("Transaction Succesful");
        }
        catch(error)
        {
            alert("Transaction not Succesful");
        }
        
    }


//_________________________________________________________________________________________________________________
    return(
        <section className="project-section">
            <h1 className="title">Projects </h1>
            <div className="card-wrapper">
                
                 {projects!=="" && projects.map((project)=>   // 53 
                 {
                    
                    const Github_link=`https://github.com/jatin192/${project.Github_link}`;
                    
                    return ( <a href= {Github_link} className="project-card" target='_blank' rel="noopener noreferrer" >
                        
                    <div className="card-img">
                        <img src={`https://gateway.pinata.cloud/ipfs/${project.image}`} alt="" /></div>
                    <div className="card-text">
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                    </div>
                </a>)

                })} 
           
            </div>

            {/*  =========popup bootstrap==========  */}

            <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                        <ModalHeader toggle={() => setModal(!modal)}>
                            Enter the ETH you want to donate!
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={donateEth}>
                                <Row>
                                    <input id="eth" type="text" />
                                        <Button className='mt-4' >
                                            Send
                                        </Button>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal>
                    {/*  =========popup bootstrap end==========*/} 
                    <p className='donate' onClick={() => setModal(true)}>Liked the project's ? Consider donating Eth's <FaDonate className='icon' /></p> 
        
        </section>
    )


}
export default projects;