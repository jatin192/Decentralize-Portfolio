import './wallet.css';
import ABI from "./ABI.json";
import { useState } from 'react';
import Web3 from 'web3';
import metamask_icon from './metamask.svg'
import polygon_icon from './polygon-matic-icon.svg'
let wallet = ({i})=>
{
    
    const isAndroid = /android/i.test(navigator.userAgent);  //checking for android phone
    let[connected,setConnected]=useState(false);
    let a = async()=>
    {
        try
        {
            let web3 = new Web3(window.ethereum); //checking
            await window.ethereum.request({method:'eth_requestAccounts'});
            // checking completed

            let contract_address = "0x22B7e0c8E27bF6e1D2ab2F52e1395c087c63c02E";
            let contract_instance = new web3.eth.Contract(ABI,contract_address);
            // console.log(contract_instance); //check in inspect section all contract information shown there
            
            setConnected(true);
            i({web3:web3,contract:contract_instance});
 
        }catch(error)
        {
            alert("Please install Metamask");
        }
        //we can also use if else rather than using try catch but that will not catch error
    }

    
    return<>
            <div className='header'>
                {isAndroid  && <button className="connectBTN">
                    <a href="https://metamask.app.link/dapp/sriche.netlify.app/">Click For Mobile</a>
                </button>  }
                <button className='connectBTN' onClick={a} disabled={connected}>
                    {!connected ? <div><b>Connect Metamask <img src = {metamask_icon} style={{ width: '36px', height: 'auto' }}></img></b></div> : <b>Metamask Connected</b>}
                </button>       
                <em><img src = {polygon_icon} style={{ width: '30px', height: 'auto' }}></img><p className='class_polygon'><b>Polygon Mumbai Test Network</b></p></em>
            </div>
        </>
}
export default wallet;