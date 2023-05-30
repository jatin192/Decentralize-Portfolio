import { useEffect, useState } from "react";
import { Modal, ModalBody, Row } from "reactstrap"
import './personal_information.css';

let personal_information = ({state})=>
{
    let [modal, setModal] = useState(false);
    let [description_i,setdescription]=useState("");
    let [image_i,setimage]=useState("");
//______________________________________________________________________________________________________________________________
    // useEffect use for automatically fetching
    useEffect(()=>
    {
        let {contract} =state;
        
        let description_ = async()=>
        {
            let a = await contract.methods.show_Description().call();
            setdescription(a);
        }
        
        if(contract)
        {
            description_();
        }

    },[state]);
//______________________________________________________________________________________________________________________________
    useEffect(()=>
    {
        let {contract} =state;
        
        let Image_cid = async()=>
        {
            let a = await contract.methods.show_Pinata_Image().call();
            setimage(a);
        }
        
        if(contract)
        {
            Image_cid();
        }

    },[state])

    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">

                <p><span>Jatin </span>is a Full-Stack Blockchain Developer From India.</p>
                <h1>I develop decentralised apps in web3 space.</h1>
                
                <h3>{description_i}</h3>
                

                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - singhal.3@iitj.ac.in
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>
                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                </div>
               
                {/*  =========popup bootstrap end==========  */}

                <div className="hero-img">
                    <div className="img-container">
                        <img src={`https://gold-partial-butterfly-977.mypinata.cloud/ipfs/${image_i}`} alt="profilePhoto" />
                    </div>
                </div>
        </div>
        </section>

    )
}
export default personal_information;

