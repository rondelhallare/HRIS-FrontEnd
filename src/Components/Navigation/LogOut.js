import React from 'react'
import { useHistory } from 'react-router'
import { Box } from '@mui/system'
import { Button } from '@mui/material'

function LogOut() {
    const history = useHistory()
    return (
        <Box>
            <Button color="secondary" variant="contained" sx={{
                fontSize: '20px',
                fontWeight: 'medium',
                color: '#FFFFFF',
                boxShadow: 10,
                borderRadius: '10px',
                p: '10px',
                m: '10px',
            }}
            onClick = {
               () => {
                localStorage.removeItem("Authorization")
                history.push("/")
               }
            }
            >
                Log Out
            </Button>
        </Box >
    )
}

export default LogOut
