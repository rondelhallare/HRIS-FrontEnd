import React from 'react'
import { Grid, Typography, Card, Container, CardContent } from '@mui/material'

const EventComponent = ({ image, text }) => {
    return (
        <Card>
            <CardContent>
                <Grid container style={{ justifyContent: "center" }}>
                    <Grid item sm={5} xs={5} lg={12}>
                        <img src={image} alt="" style={{ width: "100%", height: "auto" }} />
                    </Grid>
                </Grid>
                <Typography variant="p" component="p" style={{ textAlign: "justify" }}>
                    {text}
                </Typography>
            </CardContent>
        </Card>

    )
}

export default EventComponent