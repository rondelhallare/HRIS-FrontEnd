import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import jwt from 'jsonwebtoken'
import { Box } from '@mui/system'
import { useHistory } from 'react-router';

function NavUserDisplay() {
    const history = useHistory();
    const [fullname, setfullname] = useState({
        first_name: "",
        last_name: "",
    })
    useEffect(() => {
        try {
            if(!localStorage.getItem("Authorization")) {
                throw new Error("")
            }
            let data = jwt.verify(localStorage.getItem("Authorization"), "hris-secret")
            console.log(data)
            setfullname({
                first_name: data.first_name,
                last_name: data.last_name,
            })
        } catch (err) {
            localStorage.removeItem("Authorization")
            history.push("/")
        }

    }, [])
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: 'secondary.main',
                borderRadius: '10px',
                maxHeight: '10vh',
                boxShadow: 10,
            }}>

                <Typography sx={{
                    fontSize: '25px',
                    fontWeight: 'medium',
                    color: 'white',
                    p: '5px',
                    m: '5px',
                    fontFamily: 'Montserrat',
                }}>
                    {fullname.first_name} {fullname.last_name}

                </Typography>
            </Box>
        </Box>
    )
}

export default NavUserDisplay
