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
                </Card>
            </Grid>           
        </div>
        
    )
}

export default SupportEmail
