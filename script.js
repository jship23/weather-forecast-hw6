// define api key variable
var apiKey = "0ffcc1aa1c7ff0e151c44cb2f4864c7a";

//Search button click event
$("#searchBtn").on("click", function (event) {
  $("#current-weather").empty();
  $("#5day-weather").empty();

  var cityName = $("#city-name").val();
  console.log(cityName);
  var queryURLCurrent =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=imperial" +
    "&appid=" +
    apiKey;
  var queryURL5day =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&units=imperial" +
    "&appid=" +
    apiKey;
    //API call for current weather
    $.ajax({
      url: queryURLCurrent,
      method: "GET",
    }).then(function (response) {
      var fiveDayDate = $("<h4>").text(
        new Date(response.dt * 1000).toDateString()
      );
    console.log(response);
    var cityName = $("<h3>").html(response.name);
    console.log(cityName);
    var temp = $("<h5>").html("Temperature: " + response.main.temp +"°F");
    console.log(temp);
    var humidity = $("<h5>").html("Humidity: " + response.main.humidity+"%");
    console.log(humidity);
    var windSpeed = $("<h5>").html("Wind Speed: " + response.wind.speed + "mph");
    console.log(windSpeed);
    $("#current-weather").append(cityName, temp, humidity, windSpeed);

    //API call for 5 day forecast
    $.ajax({
      url: queryURL5day,
      method: "GET",
    }).then(function (fiveDayResponse) {
      console.log(fiveDayResponse);
      var cityName = $("<h3>").html(response.name);
      //5day array
      var dayArr = [0, 8, 16, 24, 32]
      dayArr.forEach(function (i) {
        
        var cardDate = fiveDayResponse.list;
        var fiveDayDate = $("<h4>").text(
          new Date(cardDate[i].dt * 1000).toDateString()
        );
        console.log(fiveDayDate)
        console.log(cityName);
        var temp = $("<h5>").text("Temperature: " + cardDate[i].main.temp +"°F");
        console.log(temp);
        var humidity = $("<h5>").text("Humidity: " + cardDate[i].main.humidity+"%");
        console.log(humidity);
        var windSpeed = $("<h5>").text("Wind Speed: " + cardDate[i].wind.speed + "mph");
        console.log(windSpeed);
        $("#5day-weather").append(fiveDayDate, temp, humidity, windSpeed);
      })
    });

    
  });
});
