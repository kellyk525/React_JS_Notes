import React from 'react';

class MovieSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: "",
            movies: []
        }
    }

    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies() {
        fetch(`https://api.themoviedb.org/3/search/company?api_key=5c6b735c72a1275ef96246b067f039e1&query=${this.state.query}&page=1`)
          .then(response => response.json())
          .then(movies => this.setState({ movies: movies.results}))
          .catch(error => console.log(error));
    }

    handleQuery() {
        return (e) => {
            e.preventDefault();
            this.setState({ query: e.target.value }, console.log(this.state))
        }
    }

    render() {

        const { movies } = this.state;

        if (!movies) {
            return 'Loading';
        }

        return (
            <div>
                <input type="text" onChange={ this.handleQuery() } />
                <ul>
                    {movies.map(movie => {
                        return (
                            <li key={ movie.id }>{ movie.name }</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default MovieSearch;