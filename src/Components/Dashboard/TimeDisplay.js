import Clock from 'react-live-clock';
import React from 'react'
import { bgcolor, Box } from '@mui/system';

const TimeDisplay = () => {
    return (
        <Box sx = {{
            borderRadius: '10px',
            bgcolor: 'secondary.main',
            boxShadow: 8,

        }}>
            <Box color="secondary" sx={{
                fontSize: '30px',
                fontWeight: 'medium',
                color: '#FFFFFF',
                maxHeight: '30vh',
                p: '10px',
                m: '9px',
            }}>
                TIME: <Clock format={'h:mm:ssa'} ticking= {true} />
            </Box>
        </Box>

    )
}

export default TimeDisplay
