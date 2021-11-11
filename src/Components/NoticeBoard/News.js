import React from 'react'
import { Grid, Typography, Card, Container, CardContent, Image } from '@mui/material'
import image from '../Assets/news.png'

const News = () => {
    return (
        <div className="card-wrapper news">
            <div className="box">
                <Card variant="outlined" className="card" style={{  height: "142.7vh"}} >
                    <div className="title">
                        <h3>News</h3>
                    </div>
                    <CardContent>
                        <Grid container style={{ justifyContent: "center" }} >
                            <Grid item sm={5} xs={5} lg={10}>
                                <img src={image} alt="" style={{ width: "100%", height: "auto" }} />
                            </Grid>
                        </Grid>
                        <Typography variant="p" component="p" color="black" style={{ textAlign: "justify" , }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default News