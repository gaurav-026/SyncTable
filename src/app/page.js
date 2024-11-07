'use client'
import React from 'react'
import AppContextProvider, { AppContext } from "../components/AppContext";
import MainPage from "../components/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Headers from '@/components/Header';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div>
      <Headers/>
      <AppContextProvider>
      
      <MainPage/>
      
      </AppContextProvider>
      <Footer/>
    </div>
  );
}
