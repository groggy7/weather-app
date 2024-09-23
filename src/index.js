import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import CreateSidebar from './components/sidebar';
import CreateMain from './components/main';
import CreateSearchBar from './components/searchBar';
import WeatherApp from './components/weather/weather';

const container = document.querySelector('.container');

container.appendChild(CreateSidebar());

let weatherApp = new WeatherApp();
container.appendChild(weatherApp.weatherContainer);

const main = CreateMain(CreateSearchBar(), weatherApp.weatherContainer);
container.appendChild(main);

const searchInput = document.querySelector('.search-bar-input');
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    weatherApp.processWeatherData(searchInput.value);
  }
});
