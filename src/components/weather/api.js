export async function fetchWeatherData(location) {
  const apiKey = process.env.API_KEY;

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=hours&key=${apiKey}&contentType=json`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  return data;
}
