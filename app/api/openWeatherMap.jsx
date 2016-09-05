var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=ce1ed9b6c1eab3ffacc633f9728d204f&units=imperial';

//ce1ed9b6c1eab3ffacc633f9728d204f
module.exports={

  getTemp:function(location){
    var encodedLocation=encodeURIComponent(location);
    var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.code && res.data.message){
        throw new error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    },function(res){
      throw new error(res.data.message);
    });
  }
}
