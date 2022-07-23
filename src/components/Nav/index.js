import React from 'react'
import {NavLink} from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <ul>
                <NavLink to = '/home'>
                    <li>
                        About Me
                    </li>
                </NavLink>
                <NavLink to = '/contact'>
                    <li>
                        Contact
                    </li>
                </NavLink>
                <NavLink to ='/portfolio'>
                    <li>
                        Portfolio
                    </li>
                </NavLink>
                <NavLink to = '/resume'>
                    <li>
                        Resume
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navigation