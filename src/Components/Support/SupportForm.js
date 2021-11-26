import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

import React from 'react'

function SupportForm({data}) {
    console.log(data)
    return (
        <Box sx={{
            Display: 'flex',
            alignItems: 'right',
            bgcolor: 'white',
            borderRadius: '0 20px 20px 0',
            pr: '15px',

        }}>

            <Box sx={{
                textAlign: 'left',
                mx: 'auto',
                width: '80vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'left',
                direction: 'column',
                p: 0,
                m: 0,
            }}>

                <Box sx={{
                    minWidth: '80%',
                }}>
                    <Typography sx={{
                        mt:'50px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '40px',
                    }}
                    >{
                        data.messageData === 1?
                        "Send Us Your Concern!":
                        "Message has been Sent!"
                    }</Typography>

                    <br></br>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '25px',
                        fontFamily: 'Montserrat',
                        pb: '8px',
                    }} >

                        Complete Name</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue=""

                        sx={{
                            width: '100%',
                            borderRadius: '20px',
                        }}
                        onChange={
                            (e) => {
                                data.setFormData((prevData) => {
                                    return {
                                        ...prevData,
                                        full_name: e.target.value
                                    }
                                })
                            }
                        }
                        value = {
                            data.formData.full_name
                        }
                    />

                    <br></br>
                    <br></br>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '25px',
                        fontFamily: 'Montserrat',
                        pb: '8px',
                    }}>
                        Email</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue=""
                        sx={{
                            width: '100%',
                            borderRadius: '20px',
                        }}
                        onChange={
                            (e) => {
                                data.setFormData((prevData) => {
                                    return {
                                        ...prevData,
                                        email: e.target.value
                                    }
                                })
                            }
                        }
                        value = {
                            data.formData.email
                        }
                    />
                    <br></br>
                    <br></br>
                    
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '25px',
                        fontFamily: 'Montserrat',
                        pb: '8px',
                    }}>
                        Message</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        defaultValue=""
                        sx={{
                            width: '100%',
                            borderRadius: '20px',
                        }}
                        onChange={
                            (e) => {
                                data.setFormData((prevData) => {
                                    return {
                                        ...prevData,
                                        message: e.target.value
                                    }
                                })
                            }
                        }
                        value = {
                            data.formData.message
                        }
                    />
                    <br></br>
                    <br></br>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Button color="secondary" variant="contained" sx={{
                            fontSize: '25px',
                            fontWeight: 'medium',
                            color: '#FFFFFF',
                            borderRadius: '10px'
                        }}onClick={() => { data.submitForm() }}>
                            Submit
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default SupportForm
