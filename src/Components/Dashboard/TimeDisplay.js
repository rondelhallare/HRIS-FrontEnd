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
                fontSize: '25px',
                fontWeight: 'medium',
                color: '#FFFFFF',
                p: '12px',
                m: '12px',
            }}>
                TIME: 8:20:45
            </Box>
        </Box>

    )
}

export default TimeDisplay
