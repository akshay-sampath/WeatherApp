const TextInput = document.querySelector(".input")
const SearchButton = document.querySelector(".btn")
const ShowData = document.querySelector(".report")
const error = document.querySelector(".box-error")

const ApiKey = "f6dc38956b4ebe164220e9c4dd33fa8b"

SearchButton.addEventListener("click",() =>{
    const InputData = TextInput.value
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${InputData}&appid=${ApiKey}`)
    .then(res => res.json())
    .then(data => {
       console.log(data)
       TextInput.value = ""
       if(data.cod == "404"){
           error.innerHTML = `<span class="error">City not Found</span>`
           ShowData.innerHTML =``
       }
       else{
        error.innerHTML = ``
       ShowData.innerHTML =`
      
      <div class="report-image">
      <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      <span class="description" >${data.weather[0].description}</span>
      <span class="fa fa-globe" aria-hidden="true"><span class="city">${data.name},${data.sys.country}</span></span>
</div>
<div class="weather-data">
    <div class="Temperature">
        <div class="temp-head">
            <span class="fa fa-thermometer-full"><span class="temp">TEMPERATURE</span></span>

        </div>
        <div class="max-min">
            <div class="max-temp">
                <span>MAX-TEMP</span>
                <span class="temp1">${Math.round(data.main.temp_max - 273.15)}°C</span>
            </div>
            <div class="min-temp"> 
                <span>MIN-TEMP</span>
                <span class="temp2">${Math.round(data.main.temp_min - 273.15)}°C</span>
            </div>
        </div>
    </div>
    <div class="other-data">
        <div  class="wind">
            <div> 
                <img src="icons8-wind-96.png">
                <span>Wind</span>
            </div>
            <span>${data.wind.speed}mps</span>
        </div>
        <div  class="Humidity">
            <div>
                <i class="fa fa-tint" aria-hidden="true"></i>
                <span>Humidity</span>
            </div>
            <span>${data.main.humidity}%</span>
        </div>
    </div>
</div>
</div>
</div> `
       }
    })
})




