let weather = {
  apiKey: "a6c22797611f9b8feb424b36492db321",
  fetchweather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data;
    console.log("yash");
    document.querySelector(".city").textContent = "weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").textContent=description;
    document.querySelector(".temp")=temp+" °C";
    document.querySelector(".humidity").textContent="Humidity "+humidity+"%";
    document.querySelector(".wind").textContent="Wind speed: "+speed+"km/hr";

    document.querySelector(".weather").classList.remove("loading");
  },
  search:function(){
    this.fetchweather(document.querySelector(".search-bar").value);
  }
};

document.querySelector(".search button").addEventListener("click",function(){
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
  if(event.key=="Enter"){
weather.search();
  }

});
weather.fetchweather("noida");
console.log(temp);