class movieStore {
    constructor(id, movieName, movieRented){
        this.id = id;
        this.aMovie = movieName;
        this.movieRented = movieRented;

        this.movies =[];
    }


    addMovieToStore(id, movieName){
        return this.movies.push(id, movieName)
    }


}