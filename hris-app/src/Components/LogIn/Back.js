import React from 'react'
import { Box } from '@mui/system';
import Header from './Header';
import Form from './Form';
import Footer from '../footer/Footer'

function Back() {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                bgcolor: 'secondary.main',
                minHeight: '95vh',
                width: 'auto',
            }}
            >
                <Box sx={{
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh',
                }
                }
                >
                    <Header />
                    <Form />
                </Box>
            </Box >

            <Box sx =  {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'primary.main',
                height: '10vh',
            }}>
                <Footer />
            </Box>
        </Box>



    )
}

export default Back
