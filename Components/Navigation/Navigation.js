import React, { useEffect, useState } from 'react'
import './Navigation.css'
const Navigation = () => {
    const [secondText, setsecondText] = useState(false)
    const [firstText, setfirstText] = useState(true)


    const handleMouseEnter = () => {
        setsecondText(true)
        setfirstText(false)
    }

    const handleMouseLeave = () => {
        setsecondText(false)
        setfirstText(true)
    }


    return (




        < nav >
            <div className='firstBox'>
                <div className='firstTextBox'>
                    {firstText && <h3 className={` ${firstText ? 'slide-up' : 'slide-down'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  >SIMPLICITY</h3>}
                    {secondText && <h3 className={` ${secondText ? 'slide-up-grand' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  >SPACE</h3>}
                </div>
            </div>
            <div className='secondBox'>

                <li className='top'>Home</li>
                <li className='bottom'>About</li>
                <li className='top'>Blogs</li>
                <li className='bottom'>Contact</li>


            </div>

        </nav >

    )
}

export default Navigation

