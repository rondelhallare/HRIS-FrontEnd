import React from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

function SupportEmail() {
    return (
        <div className="App">

            {/* Styles */}
            <Grid>
                <Card style=
                    {{
                        fontFamily: 'monserrat',
                        display: 'flex',
                        background: 'linear-gradient(0deg, #0ABAB5, #0ABAB5, #C5FFFD)',
                        backgroundColor: 'rgba(0.5, 0.5, 0.5, 0.5)',
                        alignSelf: 'stretch',
                        width: 935,
                        height: 200,
                        padding: "340px",
                        paddingTop: "300px",
                        paddingBottom: "500px",
                        margin: "auto",
                        left: '50%',
                        right: '50%',
                        borderRadius: '15px',
                        justifyContent: 'center'
                    }}>

                    <CardContent>
                        {/* Headline text */}
                        <Typography gutterBottom variant="h3" fontFamily="monserrat"
                            align="center">
                            Send us your concerns!
                        </Typography>
                    </CardContent>

                    {/* message to customers */}
                    <Typography variant="h4"
                        classname="Message"
                        color="textPrimary"
                        component="p"
                        align="justify"
                        gutterBottom>
                        If you have any concerns and problems, feel free to contact us and leave an email.
                        We would be more than happy to respond to you. Thank you and have a nice day!
                </Typography>
                </Card>
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
            </form>


        </div>

    )
}

export default SupportEmail
