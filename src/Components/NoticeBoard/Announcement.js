import React from 'react'
import { Grid, Typography, Card, CardContent, Image } from '@mui/material'
import announce from '../../Assets/announce.png';

const Announcements = () => {
    return (
        <div className="card-wrapper">
            <Card variant="outlined" className="card announcements">
                <div className="title">
                    <Typography sx = {{
                        fontSize: '25px',
                        fontWeight: 'medium',
                        fontFamily: 'Montserrat',
                    }}>
                        Announcement
                    </Typography>
                </div>
                <CardContent>
                    <Grid container style={{ justifyContent: "center", alignItems: "center" }}>
                        <Grid>
                            <img src={announce} alt="" style={{ maxWidth: "50vh", maxHeight: "80vh" }} />
                        </Grid>
                        <Grid item md style={{  textAlign: "justify" }}>
                            <Typography variant="p" sx = {{textAlign: "justify", fontSize: "20px",fontWeight: 'medium', fontFamily: 'Montserrat'}}>
                                Welcome to the Notice Board! where you will see all announcements, events and news within the company.
                                <br />
                                <br />
                                The Official presentation of the 
                                Human Resources Infromation System is Next Week! we invite everyone to participate and watch the presentation. Don't miss it!
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>

    )
}

export default Announcements