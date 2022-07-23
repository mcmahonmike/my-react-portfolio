import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <ul>
                <li> <a href="https://github.com/mcmahonmike"> < FaGithub  /> </a> </li>
                <li> <a href="https://www.linkedin.com/in/michael-mcmahon-57637113b/"> < FaLinkedin /></a></li>
                <li> <a href="https://stackoverflow.com/users/18238657/michael-mcmahon">< FaStackOverflow /></a>  </li>
            </ul>
        </footer>
    )
}

export default Footer;