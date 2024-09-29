import { generateMovieCards } from "./movie.js";
import { handleSearch } from "./search.js";

generateMovieCards();

const searchInput = document.querySelector("#search-input");

searchInput.focus();

// 메뉴 페이지로 이동
function returnMenu() {
  window.location.href = '/menu.html'; 
}

const form = document.querySelector("#search-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSearch(searchInput.value);
});
