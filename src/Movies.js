import React from 'react';

const Movies = props => (
    <div>
        <hr />
        <h2>Filmer</h2>
        <ul id="movie-list">
            {props.children}
        </ul>
    </div>
)

export default Movies;
