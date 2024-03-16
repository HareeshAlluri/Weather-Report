function weatherReport(){
    var city = document.getElementById("city").value

    let today = new Date()
    let dayOfWeek = today.getDay()

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let todayDay = days[dayOfWeek]
    let hours = today.getHours()
    let minutes = today.getMinutes()
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    let timeString = hours + ':' + minutes

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`)
        .then((response) => {
            return response.json()
            
        }).then((jsonData) => {
            // console.log(jsonData);
            document.getElementById("temperature").textContent = `${jsonData.days[0].temp}°C`
            document.getElementById("dayTime").textContent = `${todayDay} ${timeString}`
            document.getElementById("location").textContent = `${jsonData.resolvedAddress}`
            document.getElementById("cloud").textContent = `${jsonData.currentConditions.conditions}`
            document.getElementById("zero").textContent = `${jsonData.days[0].hours[0].temp}°C`
            document.getElementById("one").textContent = `${jsonData.days[0].hours[1].temp}°C`
            document.getElementById("two").textContent = `${jsonData.days[0].hours[2].temp}°C`
            document.getElementById("three").textContent = `${jsonData.days[0].hours[3].temp}°C`
            document.getElementById("four").textContent = `${jsonData.days[0].hours[4].temp}°C`
            document.getElementById("five").textContent = `${jsonData.days[0].hours[5].temp}°C`
            document.getElementById("six").textContent = `${jsonData.days[0].hours[6].temp}°C`
            document.getElementById("seven").textContent = `${jsonData.days[0].hours[7].temp}°C`
            document.getElementById("eight").textContent = `${jsonData.days[0].hours[8].temp}°C`
            document.getElementById("nine").textContent = `${jsonData.days[0].hours[9].temp}°C`
            document.getElementById("ten").textContent = `${jsonData.days[0].hours[10].temp}°C` 
            document.getElementById("eleven").textContent = `${jsonData.days[0].hours[11].temp}°C`
            document.getElementById("twelve").textContent = `${jsonData.days[0].hours[12].temp}°C`
            document.getElementById("thirteen").textContent = `${jsonData.days[0].hours[13].temp}°C`
            document.getElementById("fourteen").textContent = `${jsonData.days[0].hours[14].temp}°C`
            document.getElementById("fifteen").textContent = `${jsonData.days[0].hours[15].temp}°C`
            document.getElementById("sixteen").textContent = `${jsonData.days[0].hours[16].temp}°C`
            document.getElementById("seventeen").textContent = `${jsonData.days[0].hours[17].temp}°C`
            document.getElementById("eighteen").textContent = `${jsonData.days[0].hours[18].temp}°C`
            document.getElementById("ninteen").textContent = `${jsonData.days[0].hours[19].temp}°C`
            document.getElementById("twenty").textContent = `${jsonData.days[0].hours[20].temp}°C`
            document.getElementById("twentyOne").textContent = `${jsonData.days[0].hours[21].temp}°C`
            document.getElementById("twentyTwo").textContent = `${jsonData.days[0].hours[22].temp}°C`
            document.getElementById("twentyThree").textContent = `${jsonData.days[0].hours[23].temp}°C`


            document.getElementById("cloud").textContent = `${jsonData.days[0].conditions}`
            document.getElementById("precp").textContent = `Perc - ${jsonData.days[0].precip}%`

            document.getElementById("uvIndex").textContent = `${jsonData.days[0].uvindex}`

            if (jsonData.days[0].uvindex === 1 || jsonData.days[0].uvindex === 2) {
                document.getElementById("uvvalue").textContent = "Low"
            } else if (jsonData.days[0].uvindex === 3 || jsonData.days[0].uvindex === 4 || jsonData.days[0].uvindex === 5) {
                document.getElementById("uvvalue").textContent = "Moderate"
            } else if (jsonData.days[0].uvindex === 6 || jsonData.days[0].uvindex === 7) {
                document.getElementById("uvvalue").textContent = "High"
            } else if (jsonData.days[0].uvindex === 8 || jsonData.days[0].uvindex === 11 || jsonData.days[0].uvindex === 10) {
                document.getElementById("uvvalue").textContent = "Very high"
            } else {
                document.getElementById("uvvalue").textContent = "Extreme"
            }

            document.getElementById("windStatus").textContent = `${jsonData.days[0].windspeed}`

            document.getElementById("sunrise").textContent = `${jsonData.days[0].sunrise} Am`

            document.getElementById("sunset").textContent = `${jsonData.days[0].sunset} Pm`

            document.getElementById("humidity").textContent = `${jsonData.days[0].humidity}%`

            if (jsonData.days[0].humidity < 30) {
                document.getElementById("humidityValue").textContent = "Low"
            } else if (jsonData.days[0].humidity >= 30 && jsonData.days[0].humidity < 60) {
                document.getElementById("humidityValue").textContent = "Moderate"
            } else if (jsonData.days[0].humidity >= 60) {
                document.getElementById("humidityValue").textContent = "High"
            }

            document.getElementById("visibility").textContent = `${jsonData.days[0].visibility}`


            if (jsonData.days[0].visibility <= 0.03) {
                document.getElementById("visibilityValue").textContent = "Dense Fog"
            } else if (jsonData.days[0].visibility >= 0.04 && jsonData.days[0].visibility <= 0.16) {
                document.getElementById("visibilityValue").textContent = "Moderate Fog"
            } else if (jsonData.days[0].visibility >= 0.17 && jsonData.days[0].visibility <= 0.35) {
                document.getElementById("visibilityValue").textContent = "light Fog"
            } else if (jsonData.days[0].visibility >= 0.36 && jsonData.days[0].visibility <= 1.13) {
                document.getElementById("visibilityValue").textContent = "Very light Fog"
            } else if (jsonData.days[0].visibility >= 1.14 && jsonData.days[0].visibility <= 2.16) {
                document.getElementById("visibilityValue").textContent = "light Mist"
            } else if (jsonData.days[0].visibility >= 2.17 && jsonData.days[0].visibility <= 5.4) {
                document.getElementById("visibilityValue").textContent = "Very light Mist"
            } else if (jsonData.days[0].visibility >= 5.41 && jsonData.days[0].visibility <= 10.8) {
                document.getElementById("visibilityValue").textContent = "Clear Air"
            } else if (jsonData.days[0].visibility >= 10.81) {
                document.getElementById("visibilityValue").textContent = "Very Clear Air"
            }

            document.getElementById("airquality").textContent = `${jsonData.days[0].severerisk}`

            let backimg = ["https://i.ibb.co/qNv7NxZ/pc.webp", "https://i.ibb.co/RDfPqXz/pcn.jpg", "https://i.ibb.co/h2p6Yhd/rain.webp", "https://i.ibb.co/WGry01m/cd.jpg", "https://i.ibb.co/kqtZ1Gx/cn.jpg"]

            if (jsonData.days[0].icon === "partly-cloudy-day") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backimg[0]})`
            } else if (jsonData.days[0].icon === "partly-cloudy-night") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backimg[1]})`
            } else if (jsonData.days[0].icon === "rain") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backimg[2]})`
            } else if (jsonData.days[0].icon === "clear-day") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backimg[3]})`
            } else if (jsonData.days[0].icon === "clear-night") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backimg[4]})`
            }
        })
    }
    