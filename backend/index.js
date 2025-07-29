import { fetchRepositories, getRepositoriesWithFiveStars, 
    getLastUpdatedRepositories, 
    addStarsOfRepositories } from './utils.js';

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

let data;
app.use(cors());



app.get('/repositories', async (req, res) => {
    try {
        data = await fetchRepositories();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching repositories');
    }
});

app.get('/repositories/five-stars', async (req, res) => {
    try {
        data = await fetchRepositories();
        const fiveStarRepos = getRepositoriesWithFiveStars(data);
        res.json(fiveStarRepos);
    } catch (error) {
        res.status(500).send('Error fetching repositories with five stars');
    }
}); 

app.get('/repositories/last-updated/:numElements', async (req, res) => {
    const numElements = parseInt(req.params.numElements, 10);
    if (isNaN(numElements) || numElements <= 0) {
        return res.status(400).send('Invalid number of elements');
    }
    
    try {
        data = await fetchRepositories();
        const lastUpdatedRepos = getLastUpdatedRepositories(data, numElements);
        res.json(lastUpdatedRepos);
    } catch (error) {
        res.status(500).send('Error fetching last updated repositories');
    }
});

app.get('/repositories/stars/total', async (req, res) => {
    try {
        data = await fetchRepositories();
        const totalStars = addStarsOfRepositories(data);
        res.json({ totalStars });
    } catch (error) {
        res.status(500).send('Error fetching total stars of repositories');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});