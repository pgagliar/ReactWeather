var axios =require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dc97ce13ece540aa735219ed58fcdbdd&units=imperial';

module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message)
      }else{
        debugger;
        return res.data.main.temp;
      }
    },function(res){
      throw new Error(res.data.message);
    });

  }
}
