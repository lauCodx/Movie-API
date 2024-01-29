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
        const present = this.moviesRented.find(movie => movie.id === id)

        if (findMovie===present){
            return this.movies.forEach(movie => { movie.filter((movies) => movies.id === id)
                
            });
        }
        if (!findMovie){
            return `Sorry! movies not in store!` 
        }

        // const checkMovie = (!findMovie) ? : {message: `Successful! the movie '${findMovie.movieName}' is available`}
        // this.checkIfMovieExist.isRented = true;
        // const presentMovie = this.moviesRented.filter((movie)=> movie.id===id)

        return {message: `Successful! the movie '${findMovie.movieName}' is available`}  ;
    }

    rentMovie(id){
        const findMovie = this.movies.find(movie => movie.id === id);
        const isRented = this.moviesRented.find(movie => movie.id === id)
        if (!findMovie ){
            return 'Sorry! movies not in store'
        }
        if (isRented){
            return 'Movie is rented'
        }
        this.moviesRented.push(findMovie)
        return {success: true, message: `You have rented the movie '${findMovie.movieName}'`}
        
    }

    showRentedMovies(){
        return this.moviesRented;
    }

    checkIfMovieIsRented(id){
        const findMovie = this.moviesRented.find(movie => movie.id === id);
        const movieR = (findMovie) ? `The '${findMovie.movieName}' is rented` : `'${findMovie.movieName}' is still available for rent`

        return movieR;

    }

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


console.log(MovieStore.displayMovies())
console.log(MovieStore.checkIfMovieExist(1))
console.log(MovieStore.rentMovie(1))
console.log(MovieStore.rentMovie(1))
console.log(MovieStore.showRentedMovies())
console.log(MovieStore.checkIfMovieIsRented(1))
console.log(MovieStore.movieReturn(5))