export default function CreateWeatherContainer() {
  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('weather-container');

  const weatherContainerLeft = document.createElement('div');
  weatherContainerLeft.classList.add('weather-container-left');
  weatherContainer.appendChild(weatherContainerLeft);

  const weatherContainerRight = document.createElement('div');
  weatherContainerRight.classList.add('weather-container-right');
  weatherContainer.appendChild(weatherContainerRight);

  const generalInfoContainer = document.createElement('div');
  generalInfoContainer.classList.add('general-info-container');
  weatherContainerLeft.appendChild(generalInfoContainer);

  const todaysForecastContainer = document.createElement('div');
  todaysForecastContainer.classList.add('todays-forecast-container');
  weatherContainerLeft.appendChild(todaysForecastContainer);

  const airConditionContainer = document.createElement('div');
  airConditionContainer.classList.add('air-condition-container');
  weatherContainerLeft.appendChild(airConditionContainer);

  const sevenDayForecastContainer = document.createElement('div');
  sevenDayForecastContainer.classList.add('seven-day-forecast-container');
  weatherContainerRight.appendChild(sevenDayForecastContainer);

  return weatherContainer;
}
