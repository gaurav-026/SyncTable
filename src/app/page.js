'use client'

import AppContextProvider from "./components/AppContext";
import MainPage from "./components/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  return (
    <div>
      <AppContextProvider>
      <MainPage/>
      <ToastContainer/>
      </AppContextProvider>
    </div>
  );
}
