import React from 'react'
import Chart from 'react-apexcharts'
import { useAppSelector } from '../../types/type'
import { convertedLocalDate } from '../../Utils/convertedLocalDate'

const ChartWeather = () => {
  const weatherTemp = useAppSelector((state) => state.weather.weatherOnHours!.temp)
  const timezone = useAppSelector((state) => state.weather.weather!.city?.timezone)

  const hours = useAppSelector((state) => state.weather.weatherOnHours!.date).map((hour: string) =>
    convertedLocalDate(hour, true, timezone)
  )

  const data: any = {
    series: [
      {
        name: 't °C',
        data: weatherTemp,
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 'auto',
        parentHeightOffset: 0,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      fill: {
        colors: ['#fff'],
        type: 'gradient',
      },

      dataLabels: {
        enabled: true,
        textAnchor: 'middle',
        offsetY: -5,
        style: {
          fontSize: '12px',
          colors: ['#333', '#999'],
        },
        background: {
          enabled: false,
        },
      },
      stroke: {
        curve: 'smooth',
        colors: ['#46c2ff'],
        width: 2,
      },

      legend: {
        show: false,
      },
      grid: {
        show: true,
      },
      tooltip: {
        x: {
          show: false,
        },

        fixed: {
          enabled: true,
        },
      },
      xaxis: {
        type: 'numeric ',
        categories: hours,
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        show: true,
        max: (weatherTemp: number) => {
          return weatherTemp + 5
        },
        min: (weatherTemp: number) => {
          return weatherTemp - 1
        },
        labels: {
          offsetX: -10,
        },
      },
    },
  }
  return (
    <div className='ChartWeather'>
      <h3>Температура °C</h3>
      <Chart options={data.options} series={data.series} type='area' height={350} />
    </div>
  )
}

export default ChartWeather
