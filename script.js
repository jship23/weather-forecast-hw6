// define api key variable
var apiKey = "0ffcc1aa1c7ff0e151c44cb2f4864c7a";

//Search button click event
$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  var cityName = $("#city-name").val();
  console.log(cityName);
  var queryURLCurrent =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName + "&units=imperial" +
    "&appid=" +
    apiKey;
  var queryURL5day =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName + "&units=imperial" +
    "&appid=" +
    apiKey;

//API call for current weather
  $.ajax({
    url: queryURLCurrent,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var cityName = $("<h3>").html("City: " + response.name);
    console.log(cityName);
    var temp = $("<h5>").html("Temperature: " + response.main.temp + "°F");
    console.log(temp);
    var humidity = $("<h5>").html("Humidity: " + response.main.humidity);
    console.log(humidity);
    var windSpeed = $("<h5>").html("Wind Speed: " + response.wind.speed);
    console.log(windSpeed)
    $("#current-weather").append(cityName, temp, humidity, windSpeed);
    
  });


//API call for 5 day forecast
  $.ajax({
    url: queryURL5day,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
});
