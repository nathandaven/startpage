
    // ----- CHANGE THESE VARIABLES

    // Do you want to show the weather?
    const weather = true;
    // Do you want animations?
    const animated = true;



    // Read the documentation for setting the weather API key
    const apiKey = "904449963dd1c92c21836b8f93e53829";
    const lat = 33.7490;
    const lon = -84.3880;
    const units = "imperial";

    // ----- DON'T TOUCH ANYTHING BELOW THIS UNLESS YOU KNOW WHAT YOU'RE DOING

    var weatherEl = document.getElementById("weatherDesc");
    var tempEl = document.getElementById("temp");

    if (weather) {
        var apiLink =
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lat +
            "&lon=" +
            lon +
            "&units=" +
            units +
            "&appid=" +
            apiKey;
        console.log(apiLink);
        // grabs json data from url, thanks https://stackoverflow.com/a/35970894
        var getJSON = function (url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.responseType = "json";
            xhr.onload = function () {
                var status = xhr.status;
                if (status === 200) {
                    callback(null, xhr.response);
                } else {
                    callback(status, xhr.response);
                }
            };
            xhr.send();
        };

        // gets city name from weather api
        getJSON(apiLink, function (err, data) {
            if (err !== null) {
                weatherEl.innerText = "";
                tempEl.innerText = "";
            } else {
                var city = data.name;
                var temp = data.main.temp;
                var hiTemp = data.main.temp_max;
                var loTemp = data.main.temp_min;
                var weatherDesc = data.weather[0].description;
                weatherEl.innerHTML =
                    weatherDesc + " in " + city;
                tempEl.innerHTML = "h: " + hiTemp + "° / c: " + temp + "° / l: " + loTemp + "°";
            }
        });
    } else {
        weatherEl.innerText = "";
        tempEl.innerText = "";
    }


    if (animated) {
        // hides all elements
        document.querySelectorAll("*").forEach(el => el.style.opacity = 0);

        // anime.js animation function
        function playAnimation() {
            var tl = anime.timeline({
                easing: "easeInOutExpo",
                duration: 400, /*1200*/
            });

            tl.add({
                targets: "#img",
                opacity: [0, 1],
                translateY: [100, 0],
            }) /*
                .add(
                    {
                        targets: "#img",
                        width: ["100%", "60%"],
                    },
                    "-=400"
                )*/
                .add(
                    {
                        targets: "main *",
                        opacity: [0, 1],
                        translateY: [10, 0],
                        delay: anime.stagger(5),
                    },
                    /*"-=1200"*/
                    "-=400"
                );
        }

        window.onload = function () {
            document.querySelectorAll("*").forEach(el => el.style.opacity = 1);
            playAnimation();
        }


    }