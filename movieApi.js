class movieStore {
    constructor(){
        // this.isRented = rented;
        this.movies =[];
        this.moviesRented =[]
    }


    addMovieToStore(id, movieName, director, date_Uploaded = new Date().toLocaleDateString()){

        return this.movies.push({id, movieName, director, date_Uploaded  })
    }

    displayMovies(){
        return this.movies;
    }


    checkIfMovieExist(id){
        const findMovie = this.movies.find(movie => movie.id === id);

        if (!findMovie){
            return `Sorry! movies not in store!` 
        }

        return` Movie ${findMovie.movieName} exist` ;
    }


     checkIfMovieIsRented(id){
        const isRented = this.moviesRented.find(movie => movie.id === movieId)

        if (this.moviesRented[isRented]){
            throw new Error('This movie has already been rented')
        }
        return 'Movie Available for rent'
     }

    rentMovie(id){
        const findMovie = this.movies.find(movie => movie.id === id);
        if (!findMovie ){
            if (this.checkIfMovieIsRented){
                return this.checkIfMovieIsRented();   
            }
            return 'Sorry! movies not in store'
        }
        this.moviesRented.push(findMovie)
        return {success: true, message: `You have rented the movie '${findMovie.movieName}'`}
        
    }

    showRentedMovies(){
        return this.moviesRented;
    }

    // checkIfMovieIsRented(id){
    //     const findMovie = this.moviesRented.find(movie => movie.id === id);
    //     const movieR = (findMovie) ? `The '${findMovie.movieName}' is rented` : `'${findMovie.movieName}' is still available for rent`

    //     return movieR;

    // }

    movieReturn(id){

        const rented = this.moviesRented.find(movie => movie.id === id)
        const findMovie = this.movies.find(movie => movie.id === id);
        if (!rented && !findMovie){
            return `Movie not in the movie store`
        }

        if (!rented) {
            return 'Movie not rented'
        }
        this.moviesRented.filter((movie) => movie.id === id)
        return `'${findMovie.movieName}' was returned Successfully`
    }



}

const MovieStore = new movieStore();
MovieStore.addMovieToStore(1, 'The Slain', 'James')
MovieStore.addMovieToStore(2, 'The wicked', 'Manny')


// console.log(MovieStore.displayMovies())
// console.log(MovieStore.checkIfMovieExist(1))
console.log(MovieStore.rentMovie(1))
console.log(MovieStore.rentMovie(1))
console.log(MovieStore.showRentedMovies())
// console.log(MovieStore.checkIfMovieIsRen ted(1))
console.log(MovieStore.movieReturn())