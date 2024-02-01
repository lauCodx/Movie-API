class MovieStore{
    constructor(){
        this.movieShelf =[]

    }

    loadMoviesInShelf(products){
        for (let product of products){
            this.movieShelf.push(product)
        }
    }

    viewSingleMovie(id){
        const movie = this.movieShelf.find(movie => movie.id ===id);
        if (!movie) return 'Movie not in store'

        return movie;

    }

    viewAllMovies(){
        return this.movieShelf;
    }

    updateMovie(id, body){
        const findIndex = this.movieShelf.findIndex((movie) => movie.id === id);

        if(findIndex === -1) return 'Movie not Found'

        const updates = Object.keys(body);

        updates.forEach((update) => (this.movieShelf[findIndex][update] = body[update]));
    }

    addASingleMovie(id, name, quantity){
        this.movieShelf.push({id, name, quantity});
    }

    deleteMovie (id){
        const findIndex = this.movieShelf.findIndex((movie) => movie.id === id);
        if (findIndex === -1) return false;

        this.movieShelf.splice(findIndex, 1)
        
    }

    rentMovie(id){
        const findMovie = this.movieShelf.find((movie) => movie.id === id);

        if (!findMovie) return 'Movie not in Store'

        this.movieShelf.filter((movie) => movie.id === id)

        return `${findMovie.name} movie has been rented out`
    }
}

module.exports = MovieStore;