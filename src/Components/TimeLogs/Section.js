import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react'
import { axiosAPI } from '../Middleware/Axios'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));


function Section() {
    const history = useHistory();
    const [attendanceData, setattendanceData] = useState([])
    useEffect(async () => {
        try {
            if (!localStorage.getItem("Authorization")) {
                throw new Error("")
            }
            let data = jwt.verify(localStorage.getItem("Authorization"), "hris-secret")
            let getattendanceData = await axiosAPI.get(`/user/attendance?user_id=${data.user_id}`)
            setattendanceData(getattendanceData.data.Data)
        } catch (err) {
            localStorage.removeItem("Authorization")
            history.push("/")
        }

    }, [])
    // // const ClockIn = async () => {
    // //     let ResponseData = await axiosAPI.get(`/attendance/clock-in?user_id=${jwtData.user_id}`)
    // //     setClockInvalue(true)
    // }
    return (
        <Box sx={{ flexGrow: 1, }}>
            <Grid container spacing={1}>

                {/* First Section of Attendance */}
                <Grid item xs>
                    <Item sx={{
                        borderRadius: '10px',
                        bgcolor: 'primary.main',
                        minHeight: '75vh',
                        boxShadow: 3,
                        borderRadius: '10px',
                        mt: '3px',
                    }}>
                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat',
                            color: '#FFFFFF',
                        }}>
                            Date
                        </Typography>
                        {
                            attendanceData.map((currentData, key) => {
                                return (
                                    <Box
                                        key={key}
                                        sx={{
                                            borderRadius: '5px',
                                            bgcolor: 'secondary.main',
                                            boxShadow: 2,
                                            borderRadius: '10px',
                                            mb: '10px',
                                        }}
                                    >
                                        <Typography sx={{
                                            fontSize: '20px',
                                            fontWeight: 'medium',
                                            fontFamily: 'Montserrat',
                                            color: '#FFFFFF',
                                        }}>
                                            {currentData.date_created}
                                        </Typography>
                                    </Box>
                                )
                            })
                        }
                    </Item>

                </Grid>

                {/* Second Section of Attendance */}
                <Grid item xs>
                    <Item sx={{
                        borderRadius: '10px',
                        bgcolor: 'primary.main',
                        minHeight: '75vh',
                        boxShadow: 3,
                        borderRadius: '10px',
                        mt: '3px',
                    }}>
                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat',
                            color: '#FFFFFF',
                        }}>
                            Status
                        </Typography>
                        {
                            attendanceData.map((currentData, key) => {
                                return (
                                    <Box key={key} sx={{
                                        borderRadius: '5px',
                                        bgcolor: 'secondary.main',
                                        boxShadow: 2,
                                        borderRadius: '10px',
                                    }}>
                                        <Typography sx={{
                                            fontSize: '20px',
                                            fontWeight: 'medium',
                                            fontFamily: 'Montserrat',
                                            color: '#FFFFFF',
                                            mb: '10px',
                                        }}>
                                            Present
                                        </Typography>
                                    </Box>
                                )
                            })
                        }
                    </Item>
                </Grid>


                {/* Third Section of Attendance */}
                <Grid item xs>
                    <Item sx={{
                        borderRadius: '10px',
                        bgcolor: 'primary.main',
                        minHeight: '75vh',
                        boxShadow: 3,
                        borderRadius: '10px',
                        mt: '3px',
                    }}>
                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat',
                            color: '#FFFFFF',
                        }}>
                            Time In
                        </Typography>


                        {
                            attendanceData.map((currentData, key) => {
                                return (
                                    <Box
                                        key={key}
                                        sx={{
                                            borderRadius: '5px',
                                            bgcolor: 'secondary.main',
                                            boxShadow: 2,
                                            borderRadius: '10px',
                                        }}
                                    >
                                        <Typography sx={{
                                            fontSize: '20px',
                                            fontWeight: 'medium',
                                            fontFamily: 'Montserrat',
                                            color: '#FFFFFF',
                                            mb: '10px',
                                        }}>
                                            {currentData.clock_in}
                                        </Typography>
                                    </Box>
                                )
                            })
                        }
                    </Item>
                </Grid>

                {/* Fourth Section of Attendance */}
                <Grid item xs>
                    <Item sx={{
                        borderRadius: '10px',
                        bgcolor: 'primary.main',
                        minHeight: '75vh',
                        boxShadow: 3,
                        borderRadius: '10px',
                        mt: '3px',
                    }}>
                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat',
                            color: '#FFFFFF',
                        }}>
                            Time Out
                        </Typography>
                        {
                            attendanceData.map((currentData, key) => {
                                return (
                                    <Box
                                        key={key}
                                        sx={{
                                            borderRadius: '5px',
                                            bgcolor: 'secondary.main',
                                            boxShadow: 2,
                                            borderRadius: '10px',
                                        }}
                                    >
                                        <Typography sx={{
                                            fontSize: '20px',
                                            fontWeight: 'medium',
                                            fontFamily: 'Montserrat',
                                            color: '#FFFFFF',
                                            mb: '10px',
                                        }}>
                                            {currentData.clock_out}
                                        </Typography>
                                    </Box>
                                )
                            })
                        }
                    </Item>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Section
