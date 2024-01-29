class movieStore {
    constructor(rented = false){
        this.rentedMovie = rented;
        this.movies =[];
        this.moviesRented =[]
    }


    addMovieToStore(id, movieName){

        return this.movies.push({id, movieName})
    }

    displayMovies(){
        return this.movies;
    }

    checkIfMovieExist(id){
        const findMovie = this.movies.find(movie => movie.id === id);
        const present = this.moviesRented

        if (findMovie===present){
            return this.movies.filter((movie)=> movie.id===id)
        }
        if (!findMovie){
            return `Sorry! movies not in store!` 
        }

        // const checkMovie = (!findMovie) ? : {message: `Successful! the movie '${findMovie.movieName}' is available`}
        // this.checkIfMovieExist.rentedMovie = true;
        // const presentMovie = this.moviesRented.filter((movie)=> movie.id===id)

        return {message: `Successful! the movie '${findMovie.movieName}' is available`}  ;
    }

    rentMovie(id){
        const findMovie = this.movies.find(movie => movie.id === id);
        if (!findMovie){
            return 'Sorry! movies not in store'
        }
        if (findMovie.rentedMovie){
            return 'Movie is rented'
        }
        findMovie.rentedMovie = true;
        this.moviesRented.push(findMovie)
        return {success: true, message: `You have rented the movie '${findMovie.movieName}'`}
        
    }

    showRentedMovies(){
        return this.moviesRented;
    }



}

const MovieStore = new movieStore();
MovieStore.addMovieToStore(1, 'The Slain')
MovieStore.addMovieToStore(2, 'The wicked')

console.log(MovieStore.displayMovies())
console.log(MovieStore.checkIfMovieExist(1))
console.log(MovieStore.rentMovie(1))
console.log(MovieStore.showRentedMovies())