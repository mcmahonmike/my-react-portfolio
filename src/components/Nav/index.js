import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <ul className='nav'>
                <NavLink to = '/home'>
                    <li className='navItem'>
                        About Me
                    </li>
                </NavLink>
                <NavLink to = '/contact'>
                    <li className='navItem'>
                        Contact
                    </li>
                </NavLink>
                <NavLink to ='/portfolio'>
                    <li className='navItem'>
                        Portfolio
                    </li>
                </NavLink>
                <NavLink to = '/resume'>
                    <li className='navItem'>
                        Resume
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Nav