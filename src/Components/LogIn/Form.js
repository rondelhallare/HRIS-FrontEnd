import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { axiosAPI } from '../Middleware/Axios'
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MiniLogo from "./MiniLogo";



function Form() {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    useEffect(() => {
        if (localStorage.getItem("Authorization")) {
            history.push("/Dashboard")
        }
    }, []);
    const submitCredentials = async () => {
        console.log(formData)
        console.log(`/login?password=${formData.username}&email=${formData.password}`)
        const loginResponse = await axiosAPI.get(`/login?password=${formData.password}&email=${formData.username}`)
        console.log(loginResponse.data)
        localStorage.setItem("Authorization", loginResponse.data.Data)
        history.push("/Dashboard")
    }

    return (
        <Box sx={{
            Display: 'flex',
            alignItems: 'right',
            bgcolor: 'white',
            borderRadius: '0 20px 20px 0',
            pr: '15px',

        }}>

            <MiniLogo />

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
                        fontWeight: 'bold',
                        fontSize: '40px',
                    }}
                    >Log in to your account!</Typography>

                    <br></br>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '25px',
                        fontFamily: 'Montserrat',
                        pb: '8px',
                    }} >
                        Email
                    </Typography>
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
                                console.log(e.target.value)
                                setFormData((prevData) => {
                                    return {
                                        ...prevData,
                                        username: e.target.value
                                    }
                                })
                            }
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
                        Password</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue=""
                        type="password"
                        sx={{
                            width: '100%',
                            borderRadius: '20px',
                        }}
                        onChange={
                            (e) => {
                                setFormData((prevData) => {
                                    return {
                                        ...prevData,
                                        password: e.target.value
                                    }
                                })
                            }
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
                        }} onClick={() => { submitCredentials() }}>
                            Sign In
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Form;
