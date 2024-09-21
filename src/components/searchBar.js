export default function CreateSearchBar() {
  const searchBar = document.createElement('div');
  searchBar.classList.add('search-bar');

  const searchBarInput = document.createElement('input');
  searchBarInput.classList.add('search-bar-input');
  searchBarInput.type = 'text';
  searchBarInput.placeholder = 'Search for cities';
  searchBar.appendChild(searchBarInput);

  return searchBar;
}
