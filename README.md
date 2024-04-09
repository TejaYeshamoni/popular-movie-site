# Movie Web Panel

## Introduction
This project is a web panel that consists of four different pages and a global search in the Navbar. The pages are as follows:

1. Home Page / Popular Movie Page
2. Top-Rated Movie Page
3. Upcoming Movie Page
4. Single Movie Detail Page
5. Searched Movie Page (UI will be same as Home Page)

Each page provides a unique view into the movie database.

## API Details
The project uses the API from The Movie DB. You need to generate your own API key.

Here are the API endpoints used:

- Get all movies: `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`
- Get movie detail: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US`
- Get movie cast detail: `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US`
- Get upcoming movies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
- Get top-rated movies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`
- Get search result: `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=1`

For images, you need to add a base domain: `https://image.tmdb.org/t/p/w500`

Example: `https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg`
