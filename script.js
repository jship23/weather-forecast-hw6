
var APIkey = "0ffcc1aa1c7ff0e151c44cb2f4864c7a";
var queryURL5day = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey;


$("#searchBtn").on("click", function(event){
    event.preventDefault();
    var cityName = $("#city-name").val();
    var queryURLCurrent = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey;

    $.ajax({
        url: queryURLCurrent,
        method: "GET"
    }).then(function(response) {
        
      });
      })

})
