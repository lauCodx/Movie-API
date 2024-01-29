class movieStore {
    constructor(){
        this.movies =[];
    }


    addMovieToStore(id, movieName){

        return this.movies.push({id, movieName})
    }

    displayMovies(){
        return this.movies;
    }



}

const MovieStore = new movieStore();
MovieStore.addMovieToStore(1, 'The Slain')

console.log(MovieStore.displayMovies())