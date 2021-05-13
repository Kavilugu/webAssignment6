import React from 'react'

const SaveMovieButton = props => (
    <input type="submit" className="btn btn-success mt-3" value="Spara film" onClick={props.handleClick} />
)

export default SaveMovieButton;