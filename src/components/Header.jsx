'use client'
import { Container } from 'react-bootstrap';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Headers = () => {
  return (
    <div className='bg-green flex gap-4 pb-2 pt-3 px-10 items-center '>
      {/* <Navbar bg="success" data-bs-theme="dark" className='px-20' >
        <Container>
          <Navbar.Brand href="/" ><b>SyncTable</b></Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Brand href="/data" className='mx-4'>Contact</Navbar.Brand>
          </Nav>
        </Container>        
      </Navbar> */}
      <Link href='/' style={{textDecoration:'none'}}><h3 className='font-semibold  text-white '>SyncTable</h3></Link>
      <Link href={'/data'} style={{textDecoration:'none'}}><h4 className=' text-white text-xl font-light hover:font-medium'>Contact Us</h4></Link>
    </div>
  );
};

export default Headers;
