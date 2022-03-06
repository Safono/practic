const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("один из последних просмотренных фильмов:", ""),
      b = prompt("на сколько бы го оценили?", ""),
      c = prompt("один из последних просмотренных фильмов:", ""),
      d = prompt("на сколько бы го оценили?", "");

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);