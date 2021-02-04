import { RootState } from 'redux';

export const getWeather = (state: RootState) => state.weather.data;
export const getLoading = (state: RootState) => state.weather.loading;
export const getError = (state: RootState) => state.weather.error;
export const getAlertMsg = (state: RootState) => state.alert.message;
