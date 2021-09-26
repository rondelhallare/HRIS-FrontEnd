import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { Box, spacing } from '@mui/system';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

function Form() {
    return (
        <Box sx={{
            textAlign: 'left',
            bgcolor: 'white',
            mx: 'auto',
            width: '80vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'left',
            direction: 'column',
            p: 0,
            m: 0,
            borderRadius: '0 10px 10px 0',
        }}>
            <Box sx={{
                minWidth: '80%',
            }}>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '35px',


                }}
                >Log in to your account!</Typography>

                <br></br>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '25px',
                    fontFamily: 'Montserrat',
                    pb: '5px',
                }} >

                    Username</Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""

                    sx={{
                        width: '70%',
                        borderRadius: '20px',

                    }}
                />
                {

                }

                <br></br>
                <br></br>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '25px',
                    fontFamily: 'Montserrat',
                    pb: '5px',
                }}>
                    Password</Typography>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""
                    sx={{
                        width: '70%',
                        borderRadius: '20px',
                    }}
                />
                <br></br>
                <br></br>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Button color="secondary" variant="contained" sx={{
                        fontSize: '20px',
                        fontWeight: 'medium',
                    }}>
                        Sign In
                    </Button>
                </Box>
            </Box>

        </Box>
    )
}

export default Form;
