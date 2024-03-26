var inputvalue = document.querySelector('#city')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var description = document.querySelector('#discription')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "af06777f862db508c7bcad389386fdfe"
function conversion(val)
{
    return (val -273).toFixed(3)
}

btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value+'&appid=' + apik).then(res => res.json())

    .then(data => 
        {
        var nameval =data['name']
        var descrip =data['weather']['0']['descrption']
        var tempature = data['main']['temp']
        var windspeed = data['wind']['speed']

        city.innerHTML = `Weather of <span>${nameval}<span>`
        temp.innerHTML = `Temperature: <span>${ conversion(tempature)} C<span>`
        description.innerHTML = `Sky conditions: <span>${descrip}<span>`
        wind.innerHTML = `wind Speed: <span>${windspeed} km/h<span>`
    })

    .catch(err => alert('You entered wrong city name'))
})