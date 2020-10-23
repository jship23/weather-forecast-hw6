// define api key variable
var apiKey = "0ffcc1aa1c7ff0e151c44cb2f4864c7a";

//Search button click event
$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  var cityName = $("#city-name").val();
  var queryURLCurrent =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    apiKey;
  var queryURL5day =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=" +
    apiKey;

//API call for current weather
  $.ajax({
    url: queryURLCurrent,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var cityName = response.cityName;
    var temp = response.main.temp;
    var humidity = response.main.humidity;
    var windSpeed = response.wind.speed;

    

  });


//API call for 5 day forecast
  $.ajax({
    url: queryURL5day,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
});
