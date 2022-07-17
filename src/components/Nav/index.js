import React from "react";
import AppRouter from "../../AppRouter";

function Nav() {
    return (
            <div>
            <a href="http://localhost:3000/about"> About Me</a>
            <a href="http://localhost:3000/portfolio"> Portfolio</a>
            <a href="http://localhost:3000/contact"> Contact</a>
            <a href="http://localhost:3000/resume"> Resume</a>
            <AppRouter/>
            </div>
    );
}

export default Nav;