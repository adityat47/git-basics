import React, { useState } from 'react'

const Header = () => {
    const [keywords,setKeywords] = useState('')
    const handleChange = (e) =>(
        setKeywords  (e.target.value)
    )

    
  return (
   <>
    <header className='header'>
        <div className='header__container bg-blue-200 p-2 flex justify-between items-center'>
            <div className='header__logo'>
                <img src="https://47billion.com/wp-content/uploads/2025/04/Group-289916-1.png" alt="logo" className='header__logo-img'/>   
            </div>
            <div className='menu'>
                <ul className='flex gap-4'>
                    <li className='menu__item relative group cursor-pointer'>Home
                        <ul className=' absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded-md py-2 z-10 min-w-[200px]'>
                            <li className='menu__sub-item'>Sub Item 1</li>
                            <li className='menu__sub-item'>Sub Item 2</li>
                            <li className='menu__sub-item'>Sub Item 3</li>
                        </ul>
                    </li>
                    <li className='menu__item'>About</li>
                    <li className='menu__item'>Contact</li>
                </ul>
            </div>
            <div className='header__search '>
                <input type="text"  className=' border-2 border-blue-500 rounded-full p-1' placeholder='Search...' value={keywords} onChange={handleChange}/>
            </div>
            
        </div>
    </header>
    
   </>
  )
}

export default Header