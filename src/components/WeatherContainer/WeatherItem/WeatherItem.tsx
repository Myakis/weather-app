import React, { FC } from 'react';
import { actions } from '../../../redux/reducer/weather-reducer';
import { useAppDispatch } from '../../../types/type';
import ChoiceIcon from '../../../Utils/ChoiceIcon';
import { convertedLocalDate } from '../../../Utils/convertedLocalDate';
import { ResultDaysType } from '../../../Utils/formattedDate';
import { weatherAverage } from '../../../Utils/weatherAverage';

import './WeatherItem.scss';

interface IPropsType {
  onChangeSelected: (val: number) => void;
  active: boolean;
  day: number;
  weatherData: ResultDaysType;
}

const WeatherItem: FC<IPropsType> = ({ onChangeSelected, active, day, weatherData }) => {
  const data = convertedLocalDate(weatherData.weather[0].dt_txt);
  const description = weatherData.weather[0].weather[0].description;
  const temp = weatherAverage(weatherData.weather).toFixed(1);
  const dispatch = useAppDispatch();

  const onHandlerDays = (day: number) => {
    onChangeSelected(day);
    dispatch(actions.changeDay(day));
  };

  return (
    <div
      className={active ? 'weather-card weather-card-active' : 'weather-card'}
      onClick={() => onHandlerDays(day)}>
      <div className='weather-card__day'>{data}</div>
      <div className='weather-card__icon'>
        <ChoiceIcon value={description} />
      </div>
      <div className='weather-card__temp'>
        {temp} <span>°C</span>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default WeatherItem;
