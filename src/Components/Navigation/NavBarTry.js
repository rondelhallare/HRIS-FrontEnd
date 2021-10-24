import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SidebarData from './SidebarData';
import './NavBarTest.css';
import { Box } from '@mui/system';
import { IconContext } from 'react-icons';
import { Grid, Typography } from '@mui/material';

function NavBarTry() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>

            <IconContext.Provider value={{ color: 'black' }}>
                <Box className='navbar' sx = {{
                    display: 'flex',
                    fontSize: '2rem',
                    bgcolor: '#43D6D1',
                    height: '80px',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}>
                    <Box sx ={{
                        ml: '1rem',
                        fontSize: '2rem',
                        background: 'none',
                    }}>  
                    <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                </Box>

                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '50px',
                    ml: '10px',
                }}>
                    HRIS
                </Typography>
            </Box>
        
        <Box sx = {{
            bgcolor: '#43D6D1',
            width: '250px',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            top: '0',
            left: '-100%',
            transition: '850ms',

        }}>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                
                <Box sx = {{
                    bgColor: '#43D6D1',
                    width: '100px',
                    height: '80px',
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}>
                    <Grid>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose sx = {{fontSize: '2rem', }} />
                        </Link>
                    </li>
                    </Grid>
                </Box>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}

                                    <Box sx = {{
                                        ml: '10px',
                                        fontSize: '20px',
                                        fontWeight: 'medium',
                                        fontFamily: 'Montserrat',
                                    }}>
                                    <span>{item.title}</span>
                                    </Box>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </Box>
        </IconContext.Provider>
        </>
    );
}

export default NavBarTry
