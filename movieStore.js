const moviesAPI = require("./movieApi.js");

const api = new moviesAPI();

const product = [
	{
		id: 1,
		name: "Crat",
		quantity: 3
	},
	{
		id: 2,
		name: "Lovers",
		quantity: 3
	},
	{
		id: 3,
		name: "A man",
		quantity: 3
	},
	{
		id: 4,
		name: "In the midst",
		quantity: 5
	},
	{
		id: 5,
		name: "Death",
		quantity: 3
	},
	{
		id: 6,
		name: "All the men",
		quantity: 3
	}
];


api.loadMoviesInShelf(product);

const viewMovies = api.viewAllMovies();
api.updateMovie(4, {name: 'By my side', quantity: 2});
api.addASingleMovie(7, 'My King', 7);
api.deleteMovie(6);

if (api.rentMovie()){
    api.deleteMovie()
}

const RentMovie = api.rentMovie(10)



console.log({ viewMovies })
console.log({ RentMovie })
console.log({ viewMovies })





