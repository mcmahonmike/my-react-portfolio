import React from 'react'
import { Sidebar, Button, Avatar, Nav } from 'grommet'
import { Help, Projects, Clock, } from 'grommet-icons';
import Contact from '../Contact';

export const NavSide = (props) => {
    return (
          <Sidebar alignContent='center' width='100%' background="brand">
            <Contact/>
          </Sidebar>
    );
  };
