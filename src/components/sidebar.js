export default function CreateSidebar() {
  const sidebar = document.createElement('aside');
  sidebar.classList.add('sidebar');

  const umbrellaContainer = document.createElement('div');
  umbrellaContainer.classList.add('umbrella-container');
  sidebar.appendChild(umbrellaContainer);

  const umbrellaIcon = document.createElement('i');
  umbrellaIcon.classList.add('fa-solid', 'fa-umbrella', 'fa-xl');
  umbrellaContainer.appendChild(umbrellaIcon);

  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('weather-container');
  sidebar.appendChild(weatherContainer);

  const weatherIcon = document.createElement('i');
  weatherIcon.classList.add('fa-solid', 'fa-cloud-rain', 'fa-lg');
  weatherContainer.appendChild(weatherIcon);

  const weatherTitle = document.createElement('p');
  weatherTitle.textContent = 'Weather';
  weatherContainer.appendChild(weatherTitle);

  const citiesContainer = document.createElement('div');
  citiesContainer.classList.add('cities-container');
  sidebar.appendChild(citiesContainer);

  const citisIcon = document.createElement('i');
  citisIcon.classList.add('fa-solid', 'fa-city', 'fa-lg');
  citiesContainer.appendChild(citisIcon);

  const citiesTitle = document.createElement('p');
  citiesTitle.textContent = 'Cities';
  citiesContainer.appendChild(citiesTitle);

  const mapContainer = document.createElement('div');
  mapContainer.classList.add('map-container');
  sidebar.appendChild(mapContainer);

  const mapIcon = document.createElement('i');
  mapIcon.classList.add('fa-solid', 'fa-location-dot', 'fa-lg');
  mapContainer.appendChild(mapIcon);

  const mapTitle = document.createElement('p');
  mapTitle.textContent = 'Map';
  mapContainer.appendChild(mapTitle);

  const settingsContainer = document.createElement('div');
  settingsContainer.classList.add('settings-container');
  sidebar.appendChild(settingsContainer);

  const settingsIcon = document.createElement('i');
  settingsIcon.classList.add('fa-solid', 'fa-gear', 'fa-lg');
  settingsContainer.appendChild(settingsIcon);

  const settingsTitle = document.createElement('p');
  settingsTitle.textContent = 'Settings';
  settingsContainer.appendChild(settingsTitle);

  return sidebar;
}
