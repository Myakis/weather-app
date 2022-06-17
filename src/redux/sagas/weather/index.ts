import { takeLeading, put, call } from "redux-saga/effects";
import { weatherApi } from "../../../api/api";
import { actions } from "../../reducer/weather-reducer";
function* getWeather({ city }: any) {
  try {
    yield put(actions.setPending(true));
    yield put(actions.setError(false));
    // @ts-ignore
    const weather = yield call(weatherApi.getWeather, city);
    yield put(actions.setWeather(weather));
    yield put(actions.changeDay(0));
  } catch (e) {
    yield put(actions.setError(true));
  } finally {
    yield put(actions.setPending(false));
  }
}

export function* watchGetWeather() {
  yield takeLeading("GET_WEATHER-SAGA", getWeather);
}
