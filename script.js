
let numberOfFilms = +prompt("Qancha film ko'rgansiz?");

if (numberOfFilms  < 10) {
console.log( "Ko'rilgan filmlar soni kam")
}
else if(numberOfFilms < 30) 
{console.log("Siz klassik tomoshabinsiz") 
}
else (numberOfFilms > 30)
{ console.log("Siz kino ishqibozisiz") 
}

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: {}
}


let firstQ = prompt("Oxirgi ko'rgan filmlaringizdan biri?");
let secondQ = prompt("Uni qancha baholagan bo'lardingiz?");


personalMovieDB.movies[firstQ] = secondQ

console.log(personalMovieDB)