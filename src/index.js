import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import CreateSidebar from './components/sidebar';
import CreateMain from './components/main';
import CreateSearchBar from './components/searchBar';
import CreateWeatherContainer from './components/weather';

const container = document.querySelector('.container');

const sidebar = CreateSidebar();
container.appendChild(sidebar);

const searchBar = CreateSearchBar();
container.appendChild(searchBar);

const weatherContainer = CreateWeatherContainer();
container.appendChild(weatherContainer);

const main = CreateMain(searchBar, weatherContainer);
container.appendChild(main);
