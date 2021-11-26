import React, { useState, useEffect } from 'react'
import { axiosAPI } from '../Middleware/Axios'
import jwt from 'jsonwebtoken'
import { Box } from '@mui/system';
import "./Body.css";
import { useHistory } from 'react-router';


const ClockIn = () => {
    const history = useHistory();
    const [ClockInvalue, setClockInvalue] = useState(false)
    const [jwtData, setjwtData] = useState({})
    useEffect(() => {
        try {
            if (!localStorage.getItem("Authorization")) {
                throw new Error("")
            }
            let data = jwt.verify(localStorage.getItem("Authorization"), "hris-secret")
            setjwtData(data)
    
        } catch (err) {
            localStorage.removeItem("Authorization")
            history.push("/")
        }
       
    }, [])
    const ClockIn = async () => {
        let ResponseData = await axiosAPI.get(`/attendance/clock-in?user_id=${jwtData.user_id}`)
        setClockInvalue(true)
    }
    const ClockOut = async () => {
        let ResponseData = await axiosAPI.get(`/attendance/clock-out?user_id=${jwtData.user_id}`)
        setClockInvalue(false)
    }
    return (

        <Box sx={{
            borderRadius: '10px',
            bgcolor: 'secondary.main',
            boxShadow: 8,
            m: '9px',
        }}>
            {
                ClockInvalue === true ?
                    <Box className="Btn" color="secondary" sx={{
                        fontSize: '30px',
                        fontWeight: 'medium',
                        color: '#FFFFFF',
                        maxHeight: '30vh',
                        p: '10px',
                    }}
                        onClick={() => { ClockOut() }}
                    >
                        Clock Out
                    </Box> :
                    <Box className="Btn" color="secondary" sx={{
                        fontSize: '30px',
                        fontWeight: 'medium',
                        color: '#FFFFFF',
                        maxHeight: '30vh',
                        p: '10px',
                    }}
                        onClick={() => { ClockIn() }}
                    >
                        Clock In
                    </Box>
            }
        </Box>
    )
}

export default ClockIn
