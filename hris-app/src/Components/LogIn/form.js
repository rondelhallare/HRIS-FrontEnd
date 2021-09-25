import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { Box } from '@mui/system';

function Form() {
    return (
        <Box sx = {{
            bgcolor: 'white',

        }}>
            <label className="user">Username</label><br></br>
            <input type="text" name="Username" id="userN" className="userName"></input>

            <br></br>
            <label className="userPass">Password</label><br></br>
            <input type="Password" name="Password" id="Password" className="pass"></input>

            <br></br>
            <br></br>
            <Button color="secondary" variant="contained">
                    Sign In
                </Button>
        </Box>
    )
}

export default Form;
