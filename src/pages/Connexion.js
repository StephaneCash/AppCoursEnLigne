import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

function Connexion() {

    let navigate = useNavigate();

    function handle() {
        navigate('/accueil');
    };

    return (
        <div className="connexion">
            Binevenu(e) à vous !

            <br /> <br />  <Button color="primary" variant="contained" onClick={handle}>Cliquer ici</Button>
        </div>
    )
}

export default Connexion