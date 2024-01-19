
function updateCurrentTime() {
//London
let londonElement = document.querySelector('#london');
let londonDate = londonElement.querySelector(".date");
londonDate.innerHTML = moment().tz("Europe/London").format("MMMM Do YYYY");
let londonTime = londonElement.querySelector(".time");
londonTime.innerHTML = moment().tz("Europe/London").format("HH:mm:ss [<span>]A[</span]");


//New York
let newyorkElement = document.querySelector('#new-york');
let newyorkDate = newyorkElement.querySelector(".date");
newyorkDate.innerHTML = moment().tz("America/New_York").format("MMMM Do YYYY");
let newyorkTime = newyorkElement.querySelector(".time");
newyorkTime.innerHTML = moment().tz("America/New_York").format("HH:mm:ss [<span>]A[</span]");

//Addis Abeba
let addisElement = document.querySelector('#addis-abeba');
let addisDate = addisElement.querySelector(".date");
addisDate.innerHTML = moment().tz("Africa/Addis_Ababa").format("MMMM Do YYYY");
let addisTime = addisElement.querySelector(".time");
addisTime.innerHTML = moment().tz("Africa/Addis_Ababa").format("HH:mm:ss [<span>]A[</span]");

}

updateCurrentTime()
setInterval(updateCurrentTime)

function updateCity (event) {

    let city = document.querySelector("#city");
    let cityName = event.target.value.replace("_", " ").split("/")[1];
    cityTime = moment().tz(cityName).format("HH:mm:ss [<span>]A[</span>]");
    cityDate = moment.tz(cityName).format("MMMM Do YYYY");
    city.innerHTML = ` <div class="city" id="london">
          <div>
            <div id="city-name">${cityName}</div>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>`
}

let select = document.querySelector("select");
select.addEventListener("change", updateCity)