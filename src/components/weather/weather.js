/* eslint-disable indent */
import { fetchWeatherData } from './api';
import { Utils } from './utils';

const utils = new Utils();

export class WeatherApp {
  constructor() {
    this.init('New York');
  }

  async init(location) {
    this.createWeatherContainer();
    await this.processWeatherData(location);
  }

  createWeatherContainer() {
    this.weatherContainer = document.createElement('div');
    this.weatherContainer.classList.add('weather-container');

    const containers = [
      {
        name: 'left',
        class: 'weather-container-left',
        children: ['general-info', 'todays-forecast', 'air-condition'],
      },
      {
        name: 'right',
        class: 'weather-container-right',
        children: ['seven-day-forecast'],
      },
    ];

    containers.forEach((container) => {
      const containerElement = document.createElement('div');
      containerElement.classList.add(container.class);

      container.children.forEach((childName) => {
        const childElement = document.createElement('div');
        childElement.classList.add(`${childName}-container`);
        containerElement.appendChild(childElement);
      });

      this.weatherContainer.appendChild(containerElement);
    });

    document.body.appendChild(this.weatherContainer);
  }

  deleteWeatherContainer() {
    this.weatherContainer.remove();
  }

  async processWeatherData(location) {
    const weatherData = await fetchWeatherData(location);
    this.updateWeatherContainers(weatherData);
  }

  updateWeatherContainers(weatherData) {
    this.updateGeneralInfo(weatherData);
    this.updateTodaysForecast(weatherData);
    this.updateAirCondition(weatherData);
    this.updateSevenDayForecast(weatherData);
  }

  updateGeneralInfo(weatherData) {
    const container = this.weatherContainer.querySelector(
      '.general-info-container',
    );
    container.innerHTML = `
      <div>
        <h1>${utils.capitalizeFirstLetter(weatherData.address)}</h1>
        <p>${weatherData.days[0].conditions}</p>
        <span>${utils.roundWeather(weatherData.days[0].temp)}°</span>
      </div>
      <div>
        <img src="${utils.setWeatherIcon(weatherData.days[0].icon)}" alt="${weatherData.days[0].conditions}">
      </div>
    `;
  }

  updateTodaysForecast(weatherData) {
    const container = this.weatherContainer.querySelector(
      '.todays-forecast-container',
    );
    container.innerHTML = `
      <h1 class="box-title">TODAY'S FORECAST</h1>
      <div class="todays-forecast">
        ${[6, 9, 12, 15, 18, 21]
          .map(
            (hour) => `
          <div class="${hour !== 21 ? 'border-right' : ''}">
            <h2>${utils.formatTime(weatherData.days[0].hours[hour].datetime)}</h2>
            <img src="${utils.setWeatherIcon(weatherData.days[0].hours[hour].icon)}" alt="${weatherData.days[0].hours[hour].conditions}">
            <p>${utils.roundWeather(weatherData.days[0].hours[hour].temp)}°</p>
          </div>
        `,
          )
          .join('')}
      </div>
    `;
  }

  updateAirCondition(weatherData) {
    const container = this.weatherContainer.querySelector(
      '.air-condition-container',
    );
    container.innerHTML = `
      <h1 class="box-title">AIR CONDITIONS</h1>
      <div class="air-conditions">
        ${this.createAirConditionItem('real-feel', 'fa-temperature-three-quarters', 'Real Feel', `${utils.roundWeather(weatherData.days[0].feelslike)}°`)}
        ${this.createAirConditionItem('wind', 'fa-wind', 'Wind', `${weatherData.days[0].windspeed} km/h`)}
        ${this.createAirConditionItem('humidity', 'fa-droplet', 'Humidity', `${weatherData.days[0].humidity}%`)}
        ${this.createAirConditionItem('uv-index', 'fa-sun', 'UV Index', weatherData.days[0].uvindex)}
      </div>
    `;
  }

  createAirConditionItem(className, iconClass, title, value) {
    return `
      <div class="${className}">
        <i class="fa-solid ${iconClass} fa-xl"></i>
        <div>
          <h2>${title}</h2>
          <p>${value}</p>
        </div>
      </div>
    `;
  }

  updateSevenDayForecast(weatherData) {
    const container = this.weatherContainer.querySelector(
      '.seven-day-forecast-container',
    );
    container.innerHTML = `
      <h1 class="box-title">7-DAY FORECAST</h1>
      ${weatherData.days
        .slice(0, 7)
        .map(
          (day, index) => `
        <div class="seven-day-forecast ${index !== 6 ? 'seven-day-forecast-border' : ''}">
          <h2>${index === 0 ? 'Today' : utils.getDayName(day.datetime)}</h2>
          <img src="${utils.setWeatherIcon(day.icon)}" alt="${day.conditions}">
          <p>${utils.roundWeather(day.tempmax)}/${utils.roundWeather(day.tempmin)}</p>
        </div>
      `,
        )
        .join('')}
    `;
  }
}

export default WeatherApp;
