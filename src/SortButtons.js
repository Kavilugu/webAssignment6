const SortButtons = props => {
    return (
        <div>
            <input type="submit" className="btn btn-primary mt-3" value="Alfabetisk ordning" onClick={props.sortByAlphabet} />
            <input type="submit" className="btn btn-primary mt-3 mx-3" value="Betygsordning" onClick={props.sortByRating} />
        </div>
    )
}

export default SortButtons;