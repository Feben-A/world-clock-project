
function showCurrentTime() {

let londonElement = document.querySelector('#london');
let londonDate = londonElement.querySelector(".date");
londonDate.innerHTML = moment().tz("Europe/London").format("MMMM Do YYYY");
let londonTime = londonElement.querySelector(".time");
londonTime.innerHTML = moment().tz("Europe/London").format("HH:mm:ss [<span>]A[</span]");


let newyorkElement = document.querySelector('#new-york');
let newyorkDate = newyorkElement.querySelector(".date");
newyorkDate.innerHTML = moment().tz("America/New_York").format("MMMM Do YYYY");
let newyorkTime = newyorkElement.querySelector(".time");
newyorkTime.innerHTML = moment().tz("America/New_York").format("HH:mm:ss [<span>]A[</span]");


let addisElement = document.querySelector('#addis-ababa');
let addisDate = addisElement.querySelector(".date");
addisDate.innerHTML = moment().tz("Africa/Addis_Ababa").format("MMMM Do YYYY");
let addisTime = addisElement.querySelector(".time");
addisTime.innerHTML = moment().tz("Africa/Addis_Ababa").format("HH:mm:ss [<span>]A[</span]");

}

showCurrentTime()
setInterval(showCurrentTime)


function updateCity (event) {

    let city = document.querySelector("#city");
    let timeZone = event.target.value;
    if (timeZone === 'current-location') {
        timeZone = moment.tz.guess();
    }

    let cityName = timeZone.replace("_", " ").split("/")[1];
    cityTime = moment().tz(timeZone).format("HH:mm:ss [<span>]A[</span>]");
    cityDate = moment.tz(timeZone).format("MMMM Do YYYY");
    city.innerHTML = ` <div class="city">
          <div>
            <div id="city-name">${cityName}</div>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>`

let returnHome = document.querySelector("#home-page-insert");
returnHome.innerHTML = `
<div class="home">
          <a href="index.html"> Home Page 🏠</a>
        </div>`
};

let select = document.querySelector("select");
select.addEventListener("change",updateCity);