export default function CreateSidebar() {
  const sidebar = document.createElement('aside');
  sidebar.classList.add('sidebar');

  const umbrellaBox = document.createElement('div');
  umbrellaBox.classList.add('umbrella-box');
  sidebar.appendChild(umbrellaBox);

  const umbrellaIcon = document.createElement('i');
  umbrellaIcon.classList.add('fa-solid', 'fa-umbrella', 'fa-xl');
  umbrellaBox.appendChild(umbrellaIcon);

  const weatherBox = document.createElement('div');
  weatherBox.classList.add('weather-box');
  sidebar.appendChild(weatherBox);

  const weatherIcon = document.createElement('i');
  weatherIcon.classList.add('fa-solid', 'fa-cloud-rain', 'fa-lg');
  weatherBox.appendChild(weatherIcon);

  const weatherTitle = document.createElement('p');
  weatherTitle.textContent = 'Weather';
  weatherBox.appendChild(weatherTitle);

  const citiesBox = document.createElement('div');
  citiesBox.classList.add('cities-box');
  sidebar.appendChild(citiesBox);

  const citisIcon = document.createElement('i');
  citisIcon.classList.add('fa-solid', 'fa-city', 'fa-lg');
  citiesBox.appendChild(citisIcon);

  const citiesTitle = document.createElement('p');
  citiesTitle.textContent = 'Cities';
  citiesBox.appendChild(citiesTitle);

  const mapBox = document.createElement('div');
  mapBox.classList.add('map-box');
  sidebar.appendChild(mapBox);

  const mapIcon = document.createElement('i');
  mapIcon.classList.add('fa-solid', 'fa-location-dot', 'fa-lg');
  mapBox.appendChild(mapIcon);

  const mapTitle = document.createElement('p');
  mapTitle.textContent = 'Map';
  mapBox.appendChild(mapTitle);

  const settingsBox = document.createElement('div');
  settingsBox.classList.add('settings-box');
  sidebar.appendChild(settingsBox);

  const settingsIcon = document.createElement('i');
  settingsIcon.classList.add('fa-solid', 'fa-gear', 'fa-lg');
  settingsBox.appendChild(settingsIcon);

  const settingsTitle = document.createElement('p');
  settingsTitle.textContent = 'Settings';
  settingsBox.appendChild(settingsTitle);

  return sidebar;
}
