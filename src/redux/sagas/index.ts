import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  select,
  put,
  call,
  all,
} from "redux-saga/effects";
import { weatherApi } from "../../api/api";
import { actions } from "../reducer/weather-reducer";
import { watchGetWeather } from "./weather";

// take исполняется один раз
// takeEvery каждый раз при исполнении
// takeLatest запускается только последний раз при множественных вызовах
// takeLeading запускается только первый раз при множественных вызовах
// put добавление данных в стор
// call вызов асинхронной функции (блокирующий)
// fork вызов асинхронной функции (неблокирующий)
// spawn не останавливает работу saga при выпадении ошибки (неблокирующий)
// select аналог useSelector


export default function* rootSaga() {
  yield all([watchGetWeather()]);
}
