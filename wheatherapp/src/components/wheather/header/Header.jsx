import React from 'react'
import moon from '../../../assets/moon.png'
import sun from "../../../assets/light.png"
function Header({dark,setDark}) {
   const handleDarkMode=()=>{
    setDark((prev)=>(!prev))

    }
  return (
    <header className='flex justify-end p-2  w-screen bg-zinc-800 dark:bg-slate-800'>
        <div className='mr-6'>
            <img onClick={handleDarkMode} className=' bg-white rounded-3xl h-15 w-15' src={ dark ?sun:moon}></img>
            
        </div>
    </header>
  )
}

export default Header
