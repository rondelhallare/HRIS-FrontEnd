import { Box } from '@mui/system';
import SupportHeader from './SupportHeader';
import SupportForm from './SupportForm';
import React, { useState, useEffect } from 'react';
import { axiosAPI } from '../Middleware/Axios';

function SupportBack() {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        message:"",
    });
    const [messageData, setmessageData] = useState(1)

    const submitForm = async () => {
        const loginResponse = await axiosAPI.get(`/support/create?full_name=${formData.full_name}&email=${formData.email}&message=${formData.message}`)
        console.log(loginResponse.data)
        setmessageData(0)
        setFormData({
            full_name: "",
            email: "",
            message:"",
        })
    }
    return (
        <Box sx={{
            background: 'linear-gradient(0deg, #0ABAB5, #0ABAB5, #C5FFFD)',
            height: "calc(100vh - 80px)",
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
        }}>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',

            }}
            >
                <Box sx={{
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    minHeight: '80vh',
                    boxShadow: 20,
                    borderRadius: '20px',
                }}>
                    <SupportHeader />
                    <SupportForm data = {{messageData, setFormData, submitForm, formData}} />
                </Box>
            </Box>
        </Box>

    )
}

export default SupportBack
