import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap"
import './instructions.css'

const instructions = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Trigger the modal on page load
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Button trigger modal */}
      {/* <Button variant="primary" onClick={() => setShowModal(true)}>
        Launch Instruction Modal
      </Button> */}

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>To interact with the DApp, please follow these instructions:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Content */}
            <p><b>Connect your Metamask wallet:</b>Please ensure that you have your Metamask wallet installed and set up. If you don't have it yet, you can download it from the <a className="class_2" href ="https://metamask.io/download/">official website</a> and create a new wallet.</p>
            <p><b>Select the Polygon Mumbai Testnet network:</b> Within Metamask, locate the network selection option. Choose "Polygon Mumbai Testnet" from the available networks. This will enable you to interact with the DApp on the test network.</p>
          <p><b>Portfolio Creation:</b>Decentralized Portfolio is a DApp (decentralized application) developed on the Ethereum blockchain. Its purpose is to enable users to create and manage their digital portfolios in a secure, transparent, and censorship-resistant manner. The portfolio data is stored on the Ethereum blockchain, guaranteeing data integrity, immutability, and resistance to censorship.</p>
          <p className='id_brave' style={{ color: "red" }}>It is advisable to refrain from using the Brave Browser due to an issue with its compatibility with IPFS Companion. </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default instructions;
