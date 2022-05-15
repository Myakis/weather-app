import React, { FC } from 'react';
import {
  BsFillCloudSleetFill,
  BsCloudSunFill,
  BsFillCloudsFill,
  BsFillCloudRainFill,
  BsCloudRain,
} from 'react-icons/bs';
import { FaCloudRain } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { AiFillApi } from 'react-icons/ai';
import { WiNightSnowWind, WiDaySunny } from 'react-icons/wi';

interface IPropsType {
  value: string;
}
const ChoiceIcon: FC<IPropsType> = ({ value }) => {
  switch (value) {
    case 'пасмурно':
      return <BsCloudRain />;
    case 'ясно':
      return <WiDaySunny />;
    case 'дождь':
      return <FaCloudRain />;
    case 'небольшой дождь':
      return <BsFillCloudRainFill />;
    case 'переменная облачность':
      return <BsCloudSunFill />;
    case 'небольшая облачность':
      return <BsCloudSunFill />;
    case 'солнечно':
      return <FiSun />;
    case 'облачно':
      return <BsFillCloudsFill />;
    case 'облачно с прояснениями':
      return <BsCloudSunFill />;
    case 'снег':
      return <BsFillCloudSleetFill />;
    case 'небольшой снег':
      return <WiNightSnowWind />;
    default:
      return <AiFillApi />;
  }
};

export default ChoiceIcon;
