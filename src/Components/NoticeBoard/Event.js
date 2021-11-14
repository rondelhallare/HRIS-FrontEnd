import React from 'react'
import { Grid, Typography, Card, Container, CardContent } from '@mui/material'
import event_1 from '../../Assets/event_1.jpg'
import event_2 from '../../Assets/event_2.jpg'
import EventComponent from './EventComponent'

const Events = () => {
    const
        dummyText = "Company event coming soon. We will post and update you shortly!"
    return (
        <div className="card-wrapper events">
            <div className="box">
                <Card className="card" style={{ padding: 0 }}>
                    <div className="title">
                        <Typography sx = {{
                            fontSize: '25px',
                            fontWeight: 'medium',
                            fontFamily: 'Montserrat',
                        }}>
                            Events
                        </Typography>
                    </div>
                    <CardContent style={{ padding: 0 }}>
                        <Grid container spacing={2} >
                            <Grid item sm>
                                <EventComponent image={event_1} text={dummyText} />
                            </Grid>
                            <Grid item sm>
                                <EventComponent image={event_2} text={dummyText} />
                            </Grid>
                            <Grid item sm>
                                <EventComponent image={event_1} text={dummyText} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Events