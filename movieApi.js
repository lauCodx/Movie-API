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
        const checkMovie = (!findMovie) ? `Sorry! movies not in store!` : {message: `Successful! the movie '${findMovie.movieName}' exist`}
        return checkMovie;
    }

    rentMovie(id){
        const findMovie = this.movies.find(movie => movie.id === id);
        if (!findMovie){
            return 'Sorry! movies not in store'
        }
        if (findMovie.rentedMovie){
            return 'Movie is rented'
        }
        findMovie.rentMovie = true;
        this.rentMovie.push({findMovie})
        return {success: true, message: `You have rented the movie '${findMovie.movieName}'`}

    }



}

const MovieStore = new movieStore();
MovieStore.addMovieToStore(1, 'The Slain')

console.log(MovieStore.displayMovies())
console.log(MovieStore.checkIfMovieExist(1))
console.log(MovieStore.rentMovie(2))