import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  select,
  put,
  call,
} from "redux-saga/effects";
import { weatherApi } from "../../api/api";
import { actions } from "../reducer/weather-reducer";

// take исполняется один раз
// takeEvery каждый раз при исполнении
// takeLatest запускается только последний раз при множественных вызовах
// takeLeading запускается только первый раз при множественных вызовах
// put добавление данных в стор
// call вызов асинхронной функции (блокирующий)
// fork вызов асинхронной функции (неблокирующий)
// spawn не останавливает работу saga при выпадении ошибки (неблокирующий)
// select аналог useSelector

export function* workerSaga({ city }: any) {
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

export function* watchClickSaga() {
  // while (true) {
  //   yield take("CLICK");
  //   yield workerSaga();
  // }

  yield takeLeading("GET_WEATHER", workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
