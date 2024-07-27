'use-client'

import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Modals from './Modal'
import Table from './Table'
import { AppContext } from './AppContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const MainPage = () => {
  const { selectedRow } = useContext(AppContext);

  const handleClick = async () => {
    if (selectedRow.length === 0) {
      toast.warn("Please select at least one row to send mail!");
      return;
    }
    // console.log("Button Clicked and sleected row data is", selectedRow);
    const postResponse = fetch("https://synctable.onrender.com/api/v1/sendMail", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(selectedRow)
    })

    toast.promise(
      postResponse,
      {
        pending: 'Sending mail...',
        success: 'Mail sent successfully!',
        error: 'Failed to send mail. Please try again.'
      }
    );

  }
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">CRUDS</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

      {/* modal  */}
      <div className='flex flex-row justify-center m-10'>
        <Modals />
      </div>

      {/* table  */}
      <h3 className='flex  m-10'>Previous Saved Data</h3>
      <div className='m-10'>
        <Table />
      </div>

      <Button variant='success' className='m-10 flex justify-center' onClick={handleClick}>Send to Email</Button>
      <ToastContainer/>


    </>
  )
}

export default MainPage
