import React, { FC } from 'react';

import { IResponseCity } from '../../../types/api';
import ChoiceIcon from '../../../Utils/ChoiceIcon';
import { convertedLocalDate } from '../../../Utils/convertedLocalDate';
import { ResultDaysType } from '../../../Utils/formattedDate';
import { weatherAverage } from '../../../Utils/weatherAverage';

interface IPropsType {
  params: IResponseCity;
  currentWeather: ResultDaysType;
}

const WeatherMain: FC<IPropsType> = ({ params, currentWeather }) => {
  const date = convertedLocalDate(currentWeather.weather[0].dt_txt);
  const population = params.population.toLocaleString();
  const description = currentWeather.weather[0].weather[0].description;
  const pop = (currentWeather.weather[0].pop * 100).toFixed(0);
  const humidity = currentWeather.weather[0].main.humidity.toFixed(0);
  const windSpeed = currentWeather.weather[0].wind.speed.toFixed(2);
  const temp = weatherAverage(currentWeather.weather).toFixed(1);

  return (
    <div className='weather-main'>
      <div className='weather__data'>
        <div className='weather__more'>
          <div className='weather__icon'>
            <ChoiceIcon value={description} />
          </div>
          <div className='weather__temp'>
            <span>Среднесуточная t°</span>
            <div>
              {temp} <span>°C</span>
            </div>
          </div>
          <ul className='weather__list'>
            <li className='weather__item'>
              Вероятность осадков:
              <span> {pop}%</span>
            </li>
            <li className='weather__item'>
              Влажность:
              <span> {humidity}%</span>
            </li>
            <li className='weather__item'>
              Ветер:
              <span> {windSpeed}</span> м/c
            </li>
          </ul>
        </div>
        <div className='weather__info'>
          <div className='weather__city'>
            {params.name}
            {params.country && ','} <span>{params.country}</span>
          </div>
          <div>Население: {population}</div>
          <div>{date}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherMain;
