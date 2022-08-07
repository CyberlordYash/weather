let weather = {
  apiKey: "a6c22797611f9b8feb424b36492db321",
  fetchweather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=noida&units=metric&appid=a6c22797611f9b8feb424b36492db321"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};
