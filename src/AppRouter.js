import React from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function AppRouter() {
    return (
       <BrowserRouter>
            <Routes>
            <Route path = '/my-react-portfolio' element={<About/>}/>
            <Route path = '/contact' element={<Contact/>}/>
            <Route path = '/portfolio' element={<Portfolio/>}/>
            <Route path = '/resume' element={<Resume/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;