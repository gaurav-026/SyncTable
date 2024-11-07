'use client'
import MainPage from '@/components/MainPage'
import React, { useState } from 'react'
import Vector from '../../../public/Vector.svg'
import illu from '../../../public/illu.svg'
import Image from 'next/image'
import Headers from '@/components/Header'
import Footer from '@/components/Footer'
import { toast, ToastContainer } from 'react-toastify'
const AddData = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = ()=>{
    const object = {
      name: name,
      contact: contact,
      email: email,
      message: message
    };
    console.log(object);
    const response = fetch("http://localhost:4000/api/v1/contactUs", {
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(object)
    }
    );
    toast.promise(
      response,
      {
        pending: 'Sending data...',
        success: 'Data sent successfully!',
        error: 'Failed to send data. Please try again!'
      }
    );

  }
  return (
    <>
      <Headers/>
      <div className='flex flex-col gap-8'>
        <h1 className='text-3xl font-semibold text-center mt-10'>Get In Touch</h1>
        <p className='text-xl  text-center text-grey lg:px-20 px-10'>Have questions or need assistance? Reach out to us today and let our friendly team help you on your journey to better nutrition and wellness!</p>
        <div className='flex flex-row justify-evenly flex-wrap gap-5 lg:px-20 px-10'>
        <Image src={illu} alt='illustration' className='w-fit'></Image>
          <div className='flex flex-col gap-4 w-[340px] '>
            <input type="text" placeholder='Name' className='px-4 py-2.5 bg-inputbackground placeholder-black border border-grey rounded-md w-full' onChange={(e)=> setName(e.target.value)}/>
            <input type="number" placeholder='Contact no' className='px-4 py-2.5 bg-inputbackground placeholder-black border border-grey rounded-md w-full' onChange={(e)=> setContact(e.target.value)}/>
            <input type="email" placeholder='Email id' className='px-4 py-2.5 bg-inputbackground placeholder-black border border-grey rounded-md w-full' onChange={(e)=> setEmail(e.target.value)}/>
            <textarea type="text" placeholder='Message' rows={5} className='px-4 py-2.5 bg-inputbackground placeholder-black border border-grey rounded-md w-full' onChange={(e)=> setMessage(e.target.value)}/>
            <button type='submit' className='bg-green w-full p-2.5 rounded-md text-white font-semibold' onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>
      <Footer/>
      <div><ToastContainer/></div>

    </>
  )
}

export default AddData
