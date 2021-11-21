import React from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system'

function SupportEmail() {
    return (
        <div className="App">

            <Box sx={{
                background: 'linear-gradient(0deg, #0ABAB5, #0ABAB5, #C5FFFD)',
                backgroundColor: 'rgba(0.5, 0.5, 0.5, 0.5)',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* Styles */}
                <Grid>
                    <Box style=
                        {{
                            fontFamily: 'Montserrat',
                            bgolor: 'red',
                            display: 'flex',
                            // alignSelf: 'stretch',
                            minHeight: '100vh',
                            width: 'auto',
                            // padding: "340px",
                            // paddingTop: "300px",
                            // paddingBottom: "500px",
                            margin: "auto",
                            left: '50%',
                            right: '50%',
                            borderRadius: '15px',
                            justifyContent: 'center'
                        }}>

                        <Box>
                            {/* Headline text */}
                            <Typography sx={{
                                fontFamily: 'Montserrat',
                                fontSize: '20px',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}>
                                Send us your concerns!
                            </Typography>
                        </Box>

                        {/* message to customers */}
                        <Typography
                            align="justify"
                        >
                            If you have any concerns and problems, feel free to contact us and leave an email.
                            We would be more than happy to respond to you. Thank you and have a nice day!
                        </Typography>
                    </Box>
                </Grid>
                <form>
                    <Grid container spacing={1}>

                        {/* Name section */}
                        <Grid xs={1} sm={12} item>
                            <TextField
                                placeholder="lastname, firstname, middlename"
                                className="Name"
                                label="Complete Name"
                                variant="outlined"
                                fullWidth required
                            />
                        </Grid>
                    </Grid>

                    {/* Email section */}
                    <Grid item xs={12}>
                        <TextField
                            type="email"
                            className="Email"
                            placeholder="Enter email"
                            label="Email"
                            variant="outlined"
                            fullWidth required
                        />
                    </Grid>

                    {/* Message section */}
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            className="Message"
                            multiline rows={9}
                            placeholder="Enter your message here"
                            variant="outlined"
                            fullWidth required
                        />
                    </Grid>

                    {/* Submit Button section */}
                    <Grid
                        className="ButtonGrid"
                        container item xs={12}
                        justify="flex-end"
                    >

                        <Button
                            className="Button"
                            type="Submit"
                            variant="contained"
                            sx={{
                                bgColor: 'primary.main',
                                fontSize: '20px',
                                fontWeight: 'medium',
                            }}
                        >Send
                        </Button>
                    </Grid>
                </form>
            </Box>
        </div >

    )
}

export default SupportEmail
