import React, { useState, useEffect } from 'react';
import Sidebar from '../composants/Sidebar';
import NavBar from '../composants/NavBar';
import { Grid, IconButton, InputBase, Paper } from '@mui/material';
import Movies from '../composants/Movies';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Accueil.css";
import BarSearch from '../composants/BarSearch';
import { Search } from "@material-ui/icons";


function Accueil() {

    const [movies, setMovies] = useState([]);
    const [valueSearch, setValueSearch] = useState('avengers');

    const getMoviesRequest = async (valueSearch) => {
        const url = `http://www.omdbapi.com/?s=${valueSearch}&apikey=9d098067`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }

    useEffect(() => {
        getMoviesRequest(valueSearch);
    }, [valueSearch]);

    return (
        <div className="dashboard">
            <NavBar />
            <Grid container item={true}>
                <Grid sm={2} xs={2} item={true}>
                    <Sidebar />
                </Grid>
                <Grid sm={10} xs={10} item={true} style={{ marginTop: "80px", padding: "10px", backgroundColor: "#efefef" }}>
                    <Grid sm={12} xs={12} item={true}>
                        <div className="container-fluid movie-app" style={{ backgroundColor: "#fff" }}>
                            <div className="col-12 d-flex">
                                <div className="col-8">
                                    <BarSearch heading='Cours' />
                                </div>
                                <div className="col-4">
                                    <Paper
                                        component="form"
                                        onChange={(e) => setValueSearch(e.target.value.toLowerCase())}
                                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 405, marginTop: "15px", marginBottom: "15px" }}
                                    >
                                        <IconButton sx={{ p: '10px' }} aria-label="menu">

                                        </IconButton>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Rechercher..."
                                            inputProps={{ 'aria-label': 'Rechercher...' }}
                                        />
                                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                            <Search />
                                        </IconButton>
                                    </Paper>
                                </div>
                            </div>
                            <div className="row">
                                <Movies
                                    movies={movies}
                                    valueSearch={valueSearch}
                                />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid >
        </div >
    )
}

export default Accueil