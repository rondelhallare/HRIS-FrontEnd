import React from 'react'
import { Box } from '@mui/system';
import Header from './Header';
import Form from './Form';
import loginBG from '../../Assets/loginBG.png';

function Back() {
    return (
        <Box sx = {{
            height: "calc(100vh)",
            backgroundImage: `url(${loginBG})`,
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                width: 'auto',

            }}
            >
                <Box sx={{
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh',
                    boxShadow: 10,
                    borderRadius: '20px',
                }}>
                    <Header />
                    <Form />
                </Box>
            </Box >
        </Box>



    )
}

export default Back
