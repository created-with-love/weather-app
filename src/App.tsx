import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import Search from './components/Search';
import Alert from './components/Alert';
import Weather from './components/Weather';
import { setAlert } from 'redux/actions/alertActions';
import { setError } from 'redux/actions/weatherActions';
import { getWeather, getAlertMsg, getError, getLoading } from 'redux/selectors';

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(getWeather);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const alertMsg = useSelector(getAlertMsg);

  return (
    <div className="has-text-centered">
      <Search title="Enter city name and press search button" />
      {loading ? (
        <h2 className="is-size-3 py2">Loading...</h2>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}

      {alertMsg && (
        <Alert
          message={alertMsg}
          onClose={() => dispatch(setAlert(alertMsg))}
        />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
};

export default App;
