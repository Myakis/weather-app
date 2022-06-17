import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/reducer/weather-reducer";
import { useAppSelector } from "../../types/type";
import ChartWeather from "../ChartWeather/ChartWeather";
import ErrorLoad from "../common/ErrorLoad/ErrorLoad";
import Preloader from "../common/Preloader/Preloader";

import "./Weather.scss";
import WeatherItem from "./WeatherItem/WeatherItem";
import WeatherMain from "./WeatherMain/WeatherMain";

const WeatherContainer = () => {
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  const isPending = useAppSelector(state => state.weather.isPending);
  const days = useAppSelector(state => state.weather.days);
  const weatherCity = useAppSelector(state => state.weather.weather?.city);
  const currentWeather = useAppSelector(
    state => state.weather.currentDayWeather,
  );
  const error = useAppSelector(state => state.weather.error);

  useEffect(() => {
    dispatch(actions.getWeather("new york"));
  }, []);

  useEffect(() => {
    setSelected(0);
  }, [weatherCity]);

  if (isPending || !weatherCity) return <Preloader />;
  if (!days || error) return <ErrorLoad />;
  
  return (
    <div className="weather-container">
      <WeatherMain params={weatherCity!} currentWeather={currentWeather!} />
      <ChartWeather />
      <div className="weather__list-card">
        {days!.map((item, index) => (
          <WeatherItem
            key={index}
            day={index}
            weatherData={item}
            active={selected === index}
            onChangeSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherContainer;
