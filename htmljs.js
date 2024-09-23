const API_KEY = '609d96fd9ad77dc5f8d4e2f536aece54';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

// 받아온 데이터로 카드 생성 및 DOM에 추가
fetch(URL)
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        const movieContainer = document.getElementById('movie-container');
        movies.forEach(movie => {
            const card = createMovieCard(movie);
            movieContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error:', error));

const searchInput = document.querySelector("#search-input");
searchInput.focus();

// 영화 카드 ui 구현
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <span>Rating: ${movie.vote_average}</span>
        `;
    card.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));
    return card;
}

// 검색기능 구현하는법을 이해하지 못하고 알아내지 못했습니다.
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card'); movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            carsd.style.display = 'none';
        }
    });
});

const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach((card) => {
    const title = card.querySelector(".movie-title").textContent.toLowerCase();
    if (title.includes(searchKeyword)) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
});

const movies = [{ title: "제목1" }, { title: "제목2" }, { title: "제목3" }]
const movieTitles = movies.map(movie => `<h1>${movie.title}</h1>`);