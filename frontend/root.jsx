import React from 'react';
import MovieSearch from './components/movie_search';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MovieSearch />
            </div>
        )
    }
}

export default Root;
