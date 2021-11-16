import React from 'react'
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import "./Body.css";

const ClockIn = () => {
    return (
        // <Box sx = {{
        //     display: 'flex',
        // }}>
        //     <Button color="secondary" variant="contained" sx={{
        //         fontSize: '25px',
        //         fontWeight: 'medium',
        //         color: '#FFFFFF',
        //         borderRadius: '10px',
        //         p: '10px',
        //         m: '10px',
        //         boxShadow: 8,
        //         // zIndex: 1,
        //     }}>
        //         CLOCK IN
        //     </Button>
        // </Box>

        <Box sx = {{
            borderRadius: '10px',
            bgcolor: 'secondary.main',
            boxShadow: 8,
            m: '9px',
        }}>
            <Box className = "Btn" color="secondary" sx={{
                fontSize: '30px',
                fontWeight: 'medium',
                color: '#FFFFFF',
                maxHeight: '30vh',
                p: '10px',
            }}>
                Clock In
            </Box>
        </Box>
    )
}

export default ClockIn
