Introduction
Create a web panel consisting of four different pages and a global search in the Navbar.
Home Page / Popular Movie Page
Top Rated Page
Upcoming Movie Page
Single Movie Detail Page
Searched Movie Page (UI will be same as Home Page)
Home Page / Popular Movie Page









Top-Rated Movie Page





Upcoming Movie Page













Single Movie Detail Page

Details of a single movie should look like the image given below



This is the cast of the single movie that should be seen like this on the same page.









API Details
Generate your own api key by visiting
https://www.themoviedb.org/settings/api
Get all movies
https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1

For Image Path: You need to add a base domain which is given below

https://image.tmdb.org/t/p/w500

Eg: For your Reference

https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpgbcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg


From API Get movie detail

https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US


Get movie cast detail

https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US

Get upcoming movies

https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1

Get top-rated movies

https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1




Get search result

https://api.themoviedb.org/3/search/movie?api\_key=${Api\_key}&language=en-US&query=${movie\_name}&page=1


