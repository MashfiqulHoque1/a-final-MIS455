var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var dynamic = document.querySelector('.image');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=c634bcf2c21f7e1f16a07d36dd5a7f69')
.then(response => response.json())
.then(data => {
    console.log(data);
  var tempValue = data['main']['temp']- 273.15;
  var nameValue = data['name'];
  var descValue = data['weather'][0]['main'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue.toFixed(2) + "°C";
  input.value ="";

  if(descValue == "Clouds"){
      dynamic.innerHTML = `<img src="Pics-final/cloudy.jpg" alt="" height="300px" width="300px">`
  }

  else if(descValue == "Mist"){
    dynamic.innerHTML = `<img src="Pics-final/mist.jpg" alt="" height="300px" width="300px">`
}

else if(descValue == "Sunny"){
    dynamic.innerHTML = `<img src="Pics-final/sunny.jpg" alt="" height="300px" width="300px">`
}

})

.catch(err => alert("Wrong city name!"));
})