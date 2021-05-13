import React from 'react'

const MovieApplication = props => (
    <div className="container">
        <h1>Min filmlista</h1>
        {props.children}
    </div>
)

export default MovieApplication;