import axios from 'axios';
import { FETCH_USER } from './types';

const BASE_URL = 'http://woro-api.maxxoto.codes';

export const fetchUser = () => async (dispatch) => {
  try {
    const res = await axios.get(
      process.env.NODE_ENV === 'production'
        ? `${BASE_URL}/api/users/me`
        : '/api/users/me'
    );
    if (res) {
      console.log(res);
    }

    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post(
    process.env.NODE_ENV === 'production'
      ? `${BASE_URL}/api/stripe`
      : '/api/stripe',
    token
  );
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post(
    process.env.NODE_ENV === 'production'
      ? `${BASE_URL}/api/surveys`
      : '/api/surveys',
    values
  );
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};
