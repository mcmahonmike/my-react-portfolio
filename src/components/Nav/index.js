import React from 'react'
import {NavLink} from 'react-router-dom'
import { Box } from 'grommet'

export const Nav = () => {
    return (
        <Box>
            <ul className='nav'>
                <NavLink to = '/about'>
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
        </Box>
    )
}
