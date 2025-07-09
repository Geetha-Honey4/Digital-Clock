function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    let day = now.getDate().toString().padStart(2, '0');
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let year = now.getFullYear();

    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monOfYr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dayOfWeek = daysOfWeek[now.getDay()];
    let mon = monOfYr[now.getMonth()];

    document.getElementById("clock").innerText =` Time: ${hours}:${minutes}:${seconds}`;
    document.getElementById("date").innerText = `Today's Date: ${day}-${mon}-${year}`;
    document.getElementById("day").innerText =` Day: ${dayOfWeek}`;

    getTemperature();
}

function getTemperature() {
    let apikey = "9171a4dfd014d8cab49d7c46f46cdfe3";
    let city = "Eluru";
    let url =` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let temp = data.main.temp;
            document.getElementById("temperature").innerText = `Temperature: ${temp}℃`;
            document.getElementById("cityName").innerText = `City Name: ${city}`;
        })
        .catch(error => console.error("Error fetching Temperature:", error));
}

setInterval(updateClock, 1000);
updateClock();