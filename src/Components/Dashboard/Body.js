import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import ClockIn from './ClockIn';
import BodyTitle from './BodyTitle';
import TimeDisplay from './TimeDisplay';



function Body() {
    return (
        <Box>

            <BodyTitle />

            <Box sx={{
                 display: 'flex',
                 alignItems: 'left',
                 textAlign: 'left',
                 justifyContent: 'left',
            }}>

            test

                <ClockIn />
                <TimeDisplay />

            </Box>
        </Box>
        
    )
}

export default Body
