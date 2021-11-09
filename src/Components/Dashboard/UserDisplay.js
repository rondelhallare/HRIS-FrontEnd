import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function UserDisplay() {
    return (
        <Box>
            <Box sx={{
                bgcolor: 'primary.main',
                borderRadius: '10px',
                maxHeight: '10vh',
                boxShadow: 10,
            }}>


                <Typography sx={{
                    fontSize: '30px',
                    fontWeight: 'medium',
                    color: 'Black',
                    p: '10px',
                    m: '10px',
                    fontFamily: 'Montserrat',
                }}>
                    Rondel Hallare
                </Typography>
            </Box>
        </Box>
    )
}

export default UserDisplay
