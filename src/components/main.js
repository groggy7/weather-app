export default function CreateMain(searchBar, weatherContainer) {
  const main = document.createElement('main');
  main.classList.add('main');

  main.appendChild(searchBar);
  main.appendChild(weatherContainer);

  return main;
}
