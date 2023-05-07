const input = document.querySelector("input")
const button = document.querySelector('button')
const img = document.querySelector('img')

const city = document.querySelector('#city')
const degree = document.querySelector('#degree')

const content = document.querySelector(".content")

button.addEventListener('click', () => {
    if(!input.value)return;
    getWeatherData();
});
async function getWeatherData() {
    let urlApi = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={cca7198fc5eb0b143055b5c6a6994d23}`
    try {
        await fetch(urlApi)
        .then((res)=>res.json())
        .then((data)=>{
            if(data?.cod && data.cod === "404"){
                return alert("Cidade não encontrada.");
            }
            loadWeatherInfo(data);
        })
    } catch (error) {
        alert(error);
    }
}

function loadWeatherInfo(data){
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    degree.innerHTML = `Temperatura: ${Math.floor(data.main.temp)}° C`;
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    content.style.display = "flex";

}