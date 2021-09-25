import React from 'react'
import { Box } from '@mui/system';
import Header from './Header';
import Form from './Form';

function Back() {
    return (
        <Box sx = {{
            bgcolor: 'green',
            height: 'auto',
        }}
        >
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            textAlign: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
            minWidth: '50vh',
        }
        }
        >
           
                <Header />
                <Form />
        </Box>
    </Box>



    )
}

export default Back
