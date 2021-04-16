import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather, setLoading } from 'redux/actions/weatherActions';
import { setAlert } from 'redux/actions/alertActions';

interface SearchProps {
  title: string;
}

const Search = ({ title }: SearchProps) => {
  const [city, setCity] = useState<string>('');
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === '') {
      return dispatch(setAlert('City is required!'));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  };

  return (
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form className="py-5" onSubmit={submitHandler}>
            <input
              type="text"
              className="input has-text-centered mb2"
              placeholder="Enter city name"
              value={city}
              onChange={changeHandler}
              style={{ maxWidth: 300, marginBottom: 10 }}
            />
            <button
              className="button is-primary is-fullwidth"
              style={{ maxWidth: 300, margin: '0 auto' }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
