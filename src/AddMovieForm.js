import React from 'react';

const AddMovieForm = props => (
    <form id="add-movie">
        <fieldset>
            <legend>Lägg till en film</legend>
            <label htmlFor="title"></label>
            <input value={props.title} type="text" id="title" className="form-control" onChange={props.titleCallback} />
            <label htmlFor="rating">Betyg:</label>

            <select value={props.rating} type="text" id="rating" className="form-control" onChange={props.ratingCallback}>
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

        </fieldset>
    </form>

)

export default AddMovieForm;