import { Favorite } from '@material-ui/icons';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react';
import { useNavigate } from "react-router-dom";

function Movies(props) {

    let valueSearch = props.valueSearch;

    let navigate = useNavigate();

    return (
        <>
            {props.movies.filter((val) => {
                let value = val.Title.toLowerCase();
                return value.includes(valueSearch);
            }).map((movie, index) => {
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
                                    <Button size="small" style={{ color: "red" }}><Favorite /></Button>
                                    <Button size="small" color="primary" variant="contained" onClick={() => navigate('/view', { state: { id: movie.imdbID, data: props.movies } })}>
                                        Regarder</Button>
                                </CardActions>
                            </Card>

                            <div className="overlay d-flex align-items-center justify-content"></div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Movies