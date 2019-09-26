window.addEventListener('load', () => {
        let long;
        let lat;
        let temperatureDescription = document.querrySelector('.temperature-description');
        let temperatureDegree = document.querrySelector('.temperature-degree');
        let locatioTimeZone = document.querrySelector('.location-timezone');

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(navigator);
                long = position.coords.longitude;
                lat = position.coords.latitude;
                const proxy = "https://cors-anywhere.herokuapp.com/";
                const api = `${proxy}https://api.darksky.net/forecast/c3470da1f5a69c266fd0d8f8e0b6bb3d/${lat},${long}`;

                fetch(api)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        const { temperature, summary } = data.currently;
                        //set Dom Elements from API
                        temperatureDegree.textContent = temperature;
                    })
            });


        } else {
            h1.textContent = "Please allow location access for the app to work"
        }
    })
    //adding a comment to see if this thing actually works
console.log("Testing remote repository sync");