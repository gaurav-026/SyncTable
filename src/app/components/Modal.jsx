'use client';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AppContext } from './AppContext';


const Modals = () => {
    const [show, setShow] = useState(false);
    //to stor form entry
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [hobbies, setHobbies] = useState('');


    //import from appcontext to send modal data
    const { setModalData, formData, setFormData } = useContext(AppContext);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = () => {

        if (!name || !phone || !email || !hobbies) {
            alert("Alert! Please fill all the fields first!");
            return;
        }
        const newObject = {
            id: formData.length + 1,
            name: name,
            phone: phone,
            email: email,
            hobbies: hobbies
        };
        setFormData([...formData, newObject]);
        // console.log("New Object is:", newObject);
        //send this data to appcontext
        setModalData(newObject);
        //store the form data in db
        const postResponse = fetch("https://synctable.onrender.com//api/v1/postFormData", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ data: newObject })

        })
        // toast.success("Data added successfully!");
        // console.log("DAta is posted successfully:", postResponse);

        //initialize the previous values
        setName('');
        setPhone('');
        setEmail('');
        setHobbies('');
        handleClose();
    }

    useEffect(() => {
        // console.log("UPdated data is", formData);
    }, [formData]);

    return (
        <>
            <Button variant="success" onClick={handleShow} >
                Add New Data
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="eg: Ed Sheeran" required={true} value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="eg: 1234567891" required={true} value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Hobbies</Form.Label>
                            <Form.Control as="textarea" rows={2} value={hobbies} required={true} onChange={(e) => setHobbies(e.target.value)} />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleSave}>
                        Save Details
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modals
