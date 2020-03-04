zipCode = document.getElementById('enterZip')
zipCodeDet = document.getElementById('inputZipCode')

function getWeath() {
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode.value + ',&APPID=1a837c52f0485b9df3ec8da8398a5e3c')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            if (data.cod === '404') {
                alert(data.message)
            }

            document.getElementById('currCity').innerHTML = data.name
            document.getElementById('currK').innerHTML = Math.floor(data.main.temp) + ' K'
            document.getElementById('currC').innerHTML = Math.floor(data.main.temp-273.15) + ' C'
            document.getElementById('currF').innerHTML = Math.floor(((data.main.temp-273.15) * (9 / 5) + 32)) + ' F'
            document.getElementById('currCond').innerHTML = data.weather[0].main
        })
}

function getWeathDet() {
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode.value + ',&APPID=1a837c52f0485b9df3ec8da8398a5e3c')
        .then((repsonse) => {
            return respons.json();
        })
        .then((data) => {
            console.log('it worked')
        })  
}