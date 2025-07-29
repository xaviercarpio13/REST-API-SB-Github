import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [fiveStarRepos, setFiveStarRepos] = useState([]);
  const [lastUpdatedRepos, setLastUpdatedRepos] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  const [numLastUpdated, setNumLastUpdated] = useState(3);

  useEffect(() => {
    // Traer todos los repos
    fetch('http://localhost:3001/repositories')
      .then(res => res.json())
      .then(setRepos)
      .catch(err => console.error("Error al obtener repositorios:", err));

    // Traer repos con 5+ estrellas
    fetch('http://localhost:3001/repositories/five-stars')
      .then(res => res.json())
      .then(setFiveStarRepos)
      .catch(err => console.error("Error al obtener repos de 5 estrellas:", err));

    // Traer total de estrellas
    fetch('http://localhost:3001/repositories/stars/total')
      .then(res => res.json())
      .then(data => setTotalStars(data.totalStars))
      .catch(err => console.error("Error al obtener total de estrellas:", err));
  }, []);

  useEffect(() => {
    // Repos actualizados recientemente (se actualiza si cambia `numLastUpdated`)
    fetch(`http://localhost:3001/repositories/last-updated/${numLastUpdated}`)
      .then(res => res.json())
      .then(setLastUpdatedRepos)
      .catch(err => console.error("Error al obtener últimos repos actualizados:", err));
  }, [numLastUpdated]);

  
  return (
    <div className="app-container">
      <h1>Repositorios de StackBuilders</h1>

      <div className="section">
        <h2>Todos los Repositorios ({repos.length})</h2>
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <span className="repo-name">{repo.name}</span> ⭐ {repo.stargazers_count}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Repositorios con 5+ estrellas ({fiveStarRepos.length})</h2>
        <ul>
          {fiveStarRepos.map(repo => (
            <li key={repo.id}>
              <span className="repo-name">{repo.name}</span> ⭐ {repo.stargazers_count}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Últimos Repos Actualizados</h2>
        <label className="input-inline">
          Mostrar últimos:
          <input
            type="number"
            value={numLastUpdated}
            onChange={e => setNumLastUpdated(e.target.value)}
            min={1}
            max={20}
          />
        </label>
        <ul>
          {lastUpdatedRepos.map(repo => (
            <li key={repo.id}>
              <span className="repo-name">{repo.name}</span> (actualizado: {new Date(repo.updated_at).toLocaleString()})
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Total de estrellas: ⭐ {totalStars}</h2>
      </div>
    </div>
  );
}

export default App;
