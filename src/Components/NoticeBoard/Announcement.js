import React from 'react'
import { Grid, Typography, Card, CardContent, Image } from '@mui/material'
import announce from '../../Assets/announce.png';

const Announcements = () => {
    return (
        <div className="card-wrapper">
            <Card variant="outlined" className="card announcements">
                <div className="title">
                    <h3>Announcement</h3>
                </div>
                <CardContent>
                    <Grid container style={{ justifyContent: "center", alignItems: "center" }}>
                        <Grid item sm={10} md={10} xs={10} lg={8}>
                            <img src={announce} alt="" style={{ width: "80%", height: "auto" }} />
                        </Grid>
                        <Grid item md style={{ padding: "50px 20px 20px", textAlign: "justify" }}>
                            <Typography variant="p" component="p" style={{ textAlign: "justify", fontSize: "1.2rem" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>

    )
}

export default Announcements