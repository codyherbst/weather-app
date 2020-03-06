zipCode = document.getElementById('enterZip')
zipCodeDet = document.getElementById('inputZipCode')

function getWeath() {
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode.value + ',&APPID=1a837c52f0485b9df3ec8da8398a5e3c')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data);

            if (data.cod === 200) {
                document.getElementById('currCity').innerHTML = data.name;
                document.getElementById('currK').innerHTML = Math.floor(data.main.temp) + ' K';
                document.getElementById('currC').innerHTML = Math.floor(data.main.temp-273.15) + ' C';
                document.getElementById('currF').innerHTML = Math.floor(((data.main.temp-273.15) * (9 / 5) + 32)) + ' F';
                document.getElementById('currCond').innerHTML = data.weather[0].main;
                document.getElementById('currCondPic').setAttribute('src', 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png');
                document.getElementById('humid').innerHTML = data.main.humidity + " %"
                document.getElementById('pressure').innerHTML = data.main.pressure + " mbar"
                document.getElementById('windSpeed').innerHTML = data.wind.speed + ' MPH' 
            } else {
                document.getElementById("alert").style.display = 'block'
                document.getElementById("alertMes").innerHTML = data.message

            }
        }
    )
}