import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Cours from './pages/Cours.js';
import Lecons from './pages/Lecons';
import Prevision from './pages/Prevision';
import Professeurs from './pages/Professeurs';
import Chat from './pages/Chat';
import Connexion from './pages/Connexion';
import MovieView from './composants/MovieView';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Connexion />} />
                <Route path="/accueil" element={<Accueil />} />
                <Route path="/cours" element={<Cours />} />
                <Route path="/lecons" element={<Lecons />} />
                <Route path="/prevision" element={<Prevision />} />
                <Route path="/professeur" element={<Professeurs />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/view" element={<MovieView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp