import React from 'react'
import classes from './Movie.module.css'

function getStars(rating) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<img src="star.png" alt="Star" className={classes.star} />);
    }
    return stars;
}

const Movie = props => {
    return (
        <li data-grade={props.rating} data-title={props.title} className={classes.title}>
            {props.title}
            <img src="delete.png" alt="Delete Movie" className={classes.star} onClick={() => props.deleteMovie(props.id)} />
            {getStars(props.rating)}
        </li>
    )
}

export default Movie;