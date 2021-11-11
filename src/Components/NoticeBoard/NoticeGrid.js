import React from 'react'
import './NoticeGrid.css'
import { Grid, Typography, Container, IconButton } from '@mui/material'
import { ArrowLeft } from '@material-ui/icons'
import Announcements from './Components/Announcements'
import Events from './Components/Events'
import News from './Components/News'

const App = () => {
    return (
        <div className="App">
            <Container style={{ marginTop: "10px" }} variant="fluid">
                <Grid container style={{alignItems:"center"}}>
                    <Grid item>
                        <IconButton aria-label="back">
                            <ArrowLeft style={{fontSize:"40px"}} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" component="p" color="dark" style={{ textAlign: 'left', margin:0 }}>
                            Notice Board
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item lg sx={{ mb: 1.5 }}>
                        <Announcements />
                        <Events />
                    </Grid>
                    <Grid item component="aside" lg={3}>
                        <News />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default App