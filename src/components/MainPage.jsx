'use-client'
import React, { useContext, useState } from 'react'
import { Button} from 'react-bootstrap'
import Modals from './Modal'
import Table from './Table'
import { AppContext } from './AppContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainPage = () => {
  const { selectedRow } = useContext(AppContext);
  const [receiverEmail, setReceiverEmail] = useState('');

  const handleClick = async () => {
    if (selectedRow.length === 0) {
      toast.warn("Please select at least one row to send mail!");
      return;
    }
    if(receiverEmail === ''){
      toast.warn("Please enter email first!");
      return;
    }
    const data = {selectedRow, receiverEmail};
    // console.log("Button Clicked and sleected row data is", selectedRow);
    const postResponse = fetch("https://synctable.onrender.com/api/v1/sendMail", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
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
      <div className='lg:py-32 py-20 lg:px-30 md:px-20 px-10 flex flex-col gap-4 items-center ' style={{background: 'linear-gradient(135deg, #E6F7E4, #FFF7D1, #FFE6D8, #FFEBF0, #F0F8FF)'}}>
        <h2 className='font-semibold text-green '>Sync Table</h2>
        <p className='text-xl text-center w-[80%]'>SyncTable simplifies table data entry with a modal interface, stores entries in a database, and allows users to send specific row data directly to designated emails. Perfect for efficient, organized data management and communication.</p>
      </div>
      {/* modal  */}
      <div className='flex flex-row justify-center m-10'>
        <Modals />
      </div>

      {/* table  */}
      <h3 className='flex  m-10'>Previous Saved Data</h3>
      <div className='m-10'>
        <Table />
      </div>
      
      <div className='m-10 flex gap-4 items-center justify-center flex-wrap'>
      <input type="email" placeholder='Email id' className='px-4 py-2.5 bg-inputbackground placeholder-black border border-grey rounded-md lg:w-fit md:w-fit w-full' onChange={(e)=> setReceiverEmail(e.target.value)}/>
      <Button variant='success' className='flex justify-center py-2' onClick={handleClick}>Send to Email</Button>
      </div>
      <div><ToastContainer/></div>

    </>
  )
}

export default MainPage

