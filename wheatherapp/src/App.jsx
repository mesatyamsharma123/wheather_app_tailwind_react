import { useEffect, useState } from 'react'


import './App.css'
import Home from './components/wheather/home'
import Header from './components/wheather/header/Header'

function App() {
 
const [dark,setDark]=useState(JSON.parse(localStorage.getItem('dark'))?? false)

useEffect(()=>{
  if(dark){
    document.documentElement.classList.add("dark")
  }
  else{
    document.documentElement.classList.remove("dark")

  }
  
  localStorage.setItem('dark',JSON.stringify(dark))
},[dark])
  return (
    <>
      <div className='flex h-screen flex-col dark:bg-slate-700'>
      <Header dark={dark} setDark={setDark}/>
        <Home  dark={dark} setDark={setDark}/>
      </div>
    </>
  )
}

export default App
