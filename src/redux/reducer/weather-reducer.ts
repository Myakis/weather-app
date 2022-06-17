// import { getWeather } from "./weather-reducer";
import { weatherApi } from "../../api/api";
import { ResponseType } from "../../types/api";
import { ActionsTypes, ThunkType } from "../../types/type";
import { formattedData, ResultDaysType } from "../../Utils/formattedDate";

let initialState = {
  weather: null as null | ResponseType,
  weatherOnHours: null as null | { temp: number[]; date: string[] },
  isPending: true,
  error: false,
  days: null as null | Array<ResultDaysType>,
  currentDayWeather: null as null | ResultDaysType,
};
export type initialStateType = typeof initialState;

const weatherReducer = (
  state = initialState,
  action: ActionsTypes<typeof actions>,
): initialStateType => {
  switch (action.type) {
    case "SET_WEATHER":
      return {
        ...state,
        weather: action.weather,
        days: action.days,
      };
    case "SET_PENDING":
      return { ...state, isPending: action.isPending };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "CHANGE_DAY":
      return {
        ...state,
        currentDayWeather: state.days![action.payload],
        weatherOnHours: {
          temp: state.days![action.payload].weather.map(temp =>
            Math.round(+temp.main.temp),
          ),
          date: state.days![action.payload].weather.map(temp => temp.dt_txt),
        },
      };

    default: {
      return state;
    }
  }
};

export const actions = {
  setWeather: (data: ResponseType) =>
    ({
      type: "SET_WEATHER",
      weather: data,
      days: formattedData(data.list),
    } as const),
  setPending: (load: boolean) =>
    ({
      type: "SET_PENDING",
      isPending: load,
    } as const),
  changeDay: (day: number) =>
    ({
      type: "CHANGE_DAY",
      payload: day,
    } as const),
  setError: (error: boolean) =>
    ({
      type: "SET_ERROR",
      error,
    } as const),
  getWeather: (city: string) =>
    ({
      type: "GET_WEATHER",
      city,
    } as const),
};

// export const getWeather =
//   (city: string): ThunkType<ActionsTypes<typeof actions>> =>
//   async dispatch => {
//     try {
//       dispatch(actions.setPending(true));
//       dispatch(actions.setError(false));
//       const weather = await weatherApi.getWeather(city);
//       dispatch(actions.setWeather(weather));
//       dispatch(actions.changeDay(0));
//     } catch (e) {
//       dispatch(actions.setError(true));
//     } finally {
//       dispatch(actions.setPending(false));
//     }
//   };

export default weatherReducer;
