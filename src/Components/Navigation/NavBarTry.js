import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SidebarData from './SidebarData';
import './NavBarTest.css';
import { Box } from '@mui/system';
import { IconContext } from 'react-icons';
import { Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Body from '../Dashboard/Body'
import TimeBody from "../TimeLogs/TimeBody";
import UserProf from "../UserProfile/UserProf";
import Back from "../LogIn/Back";

function NavBarTry() {

    const location = useLocation()
    console.log(location)
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            {
                location.pathname !== "/LogIn" ?


                    <IconContext.Provider value={{ color: 'black' }}>
                        <Box className='navbar' sx={{
                            display: 'flex',
                            fontSize: '2rem',
                            bgcolor: '#43D6D1',
                            height: '80px',
                            justifyContent: 'start',
                            alignItems: 'center',
                        }}>
                            <Box sx={{
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
                                mt: '-5px',
                            }}>
                                HRIS
                            </Typography>
                        </Box>

                        <Box sx={{
                            zIndex: 999,
                        }}>
                            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                                <ul className='nav-menu-items' onClick={showSidebar}>

                                    <Box>
                                        <Grid>
                                            <li className='navbar-toggle'>
                                                <Link to='#' className='menu-bars'>
                                                    <AiIcons.AiOutlineClose sx={{ fontSize: '2rem', }} />
                                                </Link>

                                                <Typography sx = {{
                                                    fontWeight: 'bold',
                                                    fontSize: '50px',
                                                     ml: '10px',
                                                     mt: '-5px',
                                                }}>
                                                    HRIS
                                                </Typography>

                                            </li>
                                        </Grid>
                                    </Box>
                                    {SidebarData.map((item, index) => {
                                        return (
                                            <li key={index} className={item.cName}>
                                                <Link to={item.path}>
                                                    {item.icon}

                                                    <Box sx={{
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


                        {
                            location.pathname === "/LogIn" ?
                                <Back />
                                :
                                location.pathname === "/Dashboard" ?
                                    <Body />
                                    :
                                    location.pathname === "/UserProfile" ?
                                        <UserProf />
                                        :
                                        location.pathname === "/TimeLogs" ?
                                            <TimeBody />
                                            :
                                            ""
                        }
                    </IconContext.Provider>
                    :
                    <Back />
            }
        </>
    );
}

export default NavBarTry
