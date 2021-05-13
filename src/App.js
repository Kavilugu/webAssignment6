import './App.css';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import AddMovieForm from './AddMovieForm';
import Movies from './Movies';
import SaveMovieButton from './SaveMovieButton';
import Movie from './Movie';
import SortButtons from './SortButtons';


const App = () => {

  const [movies, setMovies] = useState([]);
  const [titleInput, setTitleinput] = useState('');
  const [ratingInput, setRatingInput] = useState(0);


  let handleTitleChange = (e) => {
    setTitleinput(e.target.value);
  }

  let handleRatingChange = (e) => {
    setRatingInput(e.target.value);
  }

  let handleButtonClick = () => {
    if (titleInput && ratingInput) {
      let title = titleInput;
      let rating = ratingInput;
      setMovies([...movies, {
        title: title,
        rating: rating,
      }]);
      setRatingInput(0);
      setTitleinput('');
    }
    else {
      window.alert("Please enter both title and rating")
    }
  }

  let handleSortAlphabetic = () => {
    let tempList = [...movies];
    tempList.sort((a, b) => a.title.localeCompare(b.title));
    setMovies(tempList);
    console.log(tempList)
  }

  let handleSortNumeric = () => {
    let tempList = [...movies];
    tempList.sort((a, b) => parseInt(b.rating) - parseInt(a.rating));
    setMovies(tempList);
    console.log(tempList)
  }


  let handleDeleteClick = (index) => {
    let tempList = [...movies];
    tempList.splice(index, 1)
    setMovies(tempList);
  }

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <AddMovieForm titleCallback={handleTitleChange} ratingCallback={handleRatingChange} title={titleInput} rating={ratingInput} />
      <SaveMovieButton handleClick={handleButtonClick} />
      <Movies>
        {movies && movies.length > 0 ? movies.map((movie, index) =>
          <Movie key={index} id={index} item={movie} title={movie.title} rating={movie.rating} deleteMovie={handleDeleteClick} />
        ) : null}
      </Movies>
      <SortButtons sortByAlphabet={handleSortAlphabetic} sortByRating={handleSortNumeric} />
    </div>
  );
}


export default App;
