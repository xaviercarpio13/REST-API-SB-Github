// backend/utils.js
export async function fetchRepositories() {
    const response = await fetch('https://api.github.com/orgs/stackbuilders/repos');
    const data = await response.json();
    return data;
}

export function getRepositoriesWithFiveStars(data){
    return data.filter(repo => repo.stargazers_count >= 5)
}

export function getLastUpdatedRepositories(data,numElements){

    return data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, numElements);
}

export function addStarsOfRepositories(data){
   return data.reduce((acc, repo) => acc + repo.stargazers_count, 0);
}

