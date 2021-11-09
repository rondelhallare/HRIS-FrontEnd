import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

function TimeLogsTitle() {
    return (
        <Box>
            <Typography sx = {{
                 fontWeight: 'bold',
                 color: 'black',
                 fontSize: '50px',
            }}>
                TIME LOGS
            </Typography>
        </Box>
    )
}

export default TimeLogsTitle
