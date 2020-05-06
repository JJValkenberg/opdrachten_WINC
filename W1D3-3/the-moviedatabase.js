//DEEL 2

let favoriteMovie = {
    title: 'La Meglio Gioventu',
    durationInMinutes: 366,
    stars: ['Luigi lo Cascio', 'Alessio Boni', 'Jasmine Trinca']
}

const bestMovie = (movie) => {
    console.log(movie.title + ' lasts for ' + movie.durationInMinutes + ' minutes. Stars' + movie.stars + '.');

}

console.log(bestMovie(favoriteMovie));

