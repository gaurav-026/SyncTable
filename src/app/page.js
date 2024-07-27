'use client'

import AppContextProvider from "./components/AppContext";
import MainPage from "./components/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <AppContextProvider>
      <MainPage/>
      </AppContextProvider>
    </div>
  );
}
