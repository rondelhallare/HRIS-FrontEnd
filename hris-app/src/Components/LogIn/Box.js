import React from 'react'
import { Button } from '@mui/material';
import Header from './Header';
import Form from './Form';

function Box() {
    return (
        <div className="boxLogIn" style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center'}}>
            <div style={{
                minHeight: "75vh", minWidth: "75vh", backgroundColor:
                    "yellow"
            }}>
                <Button color = "pengu" variant = "contained">
                    test 1
                </Button>
                
                <Header />
                <Form />
            </div>
        </div>
    )
}

export default Box
