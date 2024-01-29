class movieStore {
    constructor(rented = false){
        this.rentedMovie = rented;
        this.movies =[];
    }


    addMovieToStore(id, movieName){

        return this.movies.push({id, movieName})
    }

    displayMovies(){
        return this.movies;
    }

    checkIfMovieExist(id){
        const findMovie = this.movies.find(movie => movie.id === id);
        const checkMovie = (!findMovie) ? `Sorry! movies not in store!` : {message: 'Successful', MovieName: `${movie.movieName}` }
    }



}

const MovieStore = new movieStore();
MovieStore.addMovieToStore(1, 'The Slain')

console.log(MovieStore.displayMovies())