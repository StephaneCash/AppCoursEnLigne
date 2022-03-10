import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../composants/NavBar'
import Sidebar from '../composants/Sidebar'
import { useLocation } from 'react-router-dom';

function MovieView() {

    const location = useLocation();

    console.log(location)
    return (
        <div>
            <div className="dashboard">
                <NavBar />
                <Grid container item={true}>
                    <Grid sm={2} xs={2} item={true}>
                        <Sidebar />
                    </Grid>
                    <Grid sm={10} xs={10} item={true} style={{ marginTop: "80px", padding: "10px", backgroundColor: "#efefef" }}>
                        <Grid sm={12} xs={12} item={true}>
                            <div className="container-fluid movie-app" style={{ backgroundColor: "#fff" }}>
                                <p>
                                    Cours
                                </p>


                                {location.state.data.map((movie, index) => {
                                    return (
                                        <>
                                            <div key={index} className="image-container d-flex justify-content-start mt-4">
                                                <Card sx={{ maxWidth: 345 }} className="cardImage">
                                                    <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image={movie.Poster}
                                                        alt="vidéos_cours"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h6" component="div" style={{ fontSize: "16px", height: '7vh' }}>
                                                            {movie.Title}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button size="small">
                                                            Laisser un commentaire
                                                        </Button>
                                                    </CardActions>
                                                </Card>

                                                <div className="overlay d-flex align-items-center justify-content"></div>
                                            </div>
                                        </>
                                    )
                                })}


                            </div>
                        </Grid>
                    </Grid>
                </Grid >
            </div >
        </div>
    )
}

export default MovieView;