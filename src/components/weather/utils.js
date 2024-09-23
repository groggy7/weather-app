/* eslint-disable indent */
export class Utils {
  setWeatherIcon(weather) {
    switch (weather) {
      case 'rain':
        return 'https://ssl.gstatic.com/onebox/weather/64/rain.png';
      case 'partly-cloudy-day':
        return 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png';
      case 'partly-cloudy-night':
        return 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png';
      case 'cloudy':
        return 'https://ssl.gstatic.com/onebox/weather/64/cloudy.png';
      case 'clear-night':
        return 'https://ssl.gstatic.com/onebox/weather/64/sunny.png';
      case 'clear-day':
        return 'https://ssl.gstatic.com/onebox/weather/64/sunny.png';
      case 'snow':
        return 'https://ssl.gstatic.com/onebox/weather/64/snow.png';
      case 'fog':
        return 'https://ssl.gstatic.com/onebox/weather/64/fog.png';
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const hoursInt = parseInt(hours, 10);
    const period = hoursInt >= 12 ? 'PM' : 'AM';
    const formattedHours = hoursInt % 12 || 12;
    return `${formattedHours}:${minutes} ${period}`;
  }

  getDayName(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  roundWeather(degrees) {
    return Math.round(degrees);
  }
}
