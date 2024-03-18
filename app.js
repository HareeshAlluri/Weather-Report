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
    let timeString = hours + ':' + minutes;

    
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`)
        .then((response) => {
            return response.json()
            
        }).then((jsonData) => {
            // console.log(jsonData);
            document.getElementById("temperature").textContent = `${(jsonData.days[0].temp)}°C`
            document.getElementById("dayTime").textContent = `${todayDay} ${timeString}`
            document.getElementById("location").textContent = `${jsonData.resolvedAddress}`
            document.getElementById("cloud").textContent = `${jsonData.currentConditions.conditions}`
            document.getElementById("zero").textContent = `${(jsonData.days[0].hours[0].temp)}°C`
            document.getElementById("zero").style.fontWeight="bold"
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
            // function airqualityCheck(airquality) {
            //     if (airquality < 50) {
            //         document.getElementById("airvalue").textContent = `Good👌`
            //     } else if (airquality >= 50 || airquality < 100) {
            //         document.getElementById("airvalue").textContent = `Moderate😐`
            //     } else if (airquality >= 100 || airquality < 150) {
            //         document.getElementById("airvalue").textContent = `Unhealthy😷`
            //     } else if (airquality >= 150 || airquality < 200) {
            //         document.getElementById("airvalue").textContent = `Very Unhealthy😨`
            //     } else if (airquality >= 200) {
            //         document.getElementById("airvalue").textContent = `Hazardous😱`
            //     }
            // }


            let backImg = ["https://i.ibb.co/qNv7NxZ/pc.webp", "https://i.ibb.co/RDfPqXz/pcn.jpg", "https://i.ibb.co/h2p6Yhd/rain.webp", "https://i.ibb.co/WGry01m/cd.jpg", "https://i.ibb.co/kqtZ1Gx/cn.jpg"]

            if (jsonData.days[0].icon === "partly-cloudy-day") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backImg[0]})`
            } else if (jsonData.days[0].icon === "partly-cloudy-night") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backImg[1]})`
            } else if (jsonData.days[0].icon === "rain") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backImg[2]})`
            } else if (jsonData.days[0].icon === "clear-day") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backImg[3]})`
            } else if (jsonData.days[0].icon === "clear-night") {
                document.getElementById("bgImage").style.backgroundImage = `url(${backImg[4]})`
            }

            let dayImage = ["https://i.ibb.co/PZQXH8V/27.png", "https://i.ibb.co/Kzkk59k/15.png", "https://i.ibb.co/kBd2NTS/39.png",  "https://i.ibb.co/rb4rrJL/26.png", "https://i.ibb.co/1nxNGHL/10.png"];


            if(jsonData.days[0].hours[0].icon === "partly-cloudy-day")
            {
            document.getElementById("zerothImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[0].icon === "partly-cloudy-night"){
                document.getElementById("zerothImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[0].icon === "rain"){
                document.getElementById("zerothImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[0].icon === "clear-day"){ 
                document.getElementById("zerothImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[0].icon === "clear-night"){
                document.getElementById("zerothImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[1].icon === "partly-cloudy-day")
            {
            document.getElementById("firstImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[1].icon === "partly-cloudy-night"){
                document.getElementById("firstImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[1].icon === "rain"){
                document.getElementById("firstImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[1].icon === "clear-day"){ 
                document.getElementById("firstImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[1].icon === "clear-night"){
                document.getElementById("firstImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[2].icon === "partly-cloudy-day")
            {
            document.getElementById("secondImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[2].icon === "partly-cloudy-night"){
                document.getElementById("secondImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[2].icon === "rain"){
                document.getElementById("secondImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[2].icon === "clear-day"){ 
                document.getElementById("secondImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[2].icon === "clear-night"){
                document.getElementById("secondImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[3].icon === "partly-cloudy-day")
            {
            document.getElementById("thirdImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[3].icon === "partly-cloudy-night"){
                document.getElementById("thirdImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[3].icon === "rain"){
                document.getElementById("thirdImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[3].icon === "clear-day"){ 
                document.getElementById("thirdImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[3].icon === "clear-night"){
                document.getElementById("thirdImage").src=`${dayImage[4]}`
            }

            
            if(jsonData.days[0].hours[4].icon === "partly-cloudy-day")
            {
            document.getElementById("fourthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[4].icon === "partly-cloudy-night"){
                document.getElementById("fourthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[4].icon === "rain"){
                document.getElementById("fourthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[4].icon === "clear-day"){ 
                document.getElementById("fourthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[4].icon === "clear-night"){
                document.getElementById("fourthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[5].icon === "partly-cloudy-day")
            {
            document.getElementById("fifthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[5].icon === "partly-cloudy-night"){
                document.getElementById("fifthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[5].icon === "rain"){
                document.getElementById("fifthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[5].icon === "clear-day"){ 
                document.getElementById("fifthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[5].icon === "clear-night"){
                document.getElementById("fifthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[6].icon === "partly-cloudy-day")
            {
            document.getElementById("sixthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[6].icon === "partly-cloudy-night"){
                document.getElementById("sixthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[6].icon === "rain"){
                document.getElementById("sixthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[6].icon === "clear-day"){ 
                document.getElementById("sixthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[6].icon === "clear-night"){
                document.getElementById("sixthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[7].icon === "partly-cloudy-day")
            {
            document.getElementById("seventhImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[7].icon === "partly-cloudy-night"){
                document.getElementById("seventhImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[7].icon === "rain"){
                document.getElementById("seventhImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[7].icon === "clear-day"){ 
                document.getElementById("seventhImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[7].icon === "clear-night"){
                document.getElementById("seventhImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[8].icon === "partly-cloudy-day")
            {
            document.getElementById("eighthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[8].icon === "partly-cloudy-night"){
                document.getElementById("eighthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[8].icon === "rain"){
                document.getElementById("eighthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[8].icon === "clear-day"){ 
                document.getElementById("eighthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[8].icon === "clear-night"){
                document.getElementById("eighthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[9].icon === "partly-cloudy-day")
            {
            document.getElementById("ninthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[9].icon === "partly-cloudy-night"){
                document.getElementById("ninthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[9].icon === "rain"){
                document.getElementById("ninthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[9].icon === "clear-day"){ 
                document.getElementById("ninthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[9].icon === "clear-night"){
                document.getElementById("ninthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[10].icon === "partly-cloudy-day")
            {
            document.getElementById("tenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[10].icon === "partly-cloudy-night"){
                document.getElementById("tenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[10].icon === "rain"){
                document.getElementById("tenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[10].icon === "clear-day"){ 
                document.getElementById("tenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[10].icon === "clear-night"){
                document.getElementById("tenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[11].icon === "partly-cloudy-day")
            {
            document.getElementById("eleventhImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[11].icon === "partly-cloudy-night"){
                document.getElementById("eleventhImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[11].icon === "rain"){
                document.getElementById("eleventhImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[11].icon === "clear-day"){ 
                document.getElementById("eleventhImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[11].icon === "clear-night"){
                document.getElementById("eleventhImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[12].icon === "partly-cloudy-day")
            {
            document.getElementById("twelthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[12].icon === "partly-cloudy-night"){
                document.getElementById("twelthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[12].icon === "rain"){
                document.getElementById("twelthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[12].icon === "clear-day"){ 
                document.getElementById("twelthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[12].icon === "clear-night"){
                document.getElementById("twelthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[13].icon === "partly-cloudy-day")
            {
            document.getElementById("thirteenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[13].icon === "partly-cloudy-night"){
                document.getElementById("thirteenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[13].icon === "rain"){
                document.getElementById("thirteenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[13].icon === "clear-day"){ 
                document.getElementById("thirteenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[13].icon === "clear-night"){
                document.getElementById("thirteenthImage").src=`${dayImage[4]}`
            }

            
            if(jsonData.days[0].hours[14].icon === "partly-cloudy-day")
            {
            document.getElementById("fourteenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[14].icon === "partly-cloudy-night"){
                document.getElementById("fourteenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[14].icon === "rain"){
                document.getElementById("fourteenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[14].icon === "clear-day"){ 
                document.getElementById("fourteenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[14].icon === "clear-night"){
                document.getElementById("fourteenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[15].icon === "partly-cloudy-day")
            {
            document.getElementById("fifteenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[15].icon === "partly-cloudy-night"){
                document.getElementById("fifteenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[15].icon === "rain"){
                document.getElementById("fifteenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[15].icon === "clear-day"){ 
                document.getElementById("fifteenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[15].icon === "clear-night"){
                document.getElementById("fifteenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[16].icon === "partly-cloudy-day")
            {
            document.getElementById("sixteenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[16].icon === "partly-cloudy-night"){
                document.getElementById("sixteenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[16].icon === "rain"){
                document.getElementById("sixteenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[16].icon === "clear-day"){ 
                document.getElementById("sixteenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[16].icon === "clear-night"){
                document.getElementById("sixteenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[17].icon === "partly-cloudy-day")
            {
            document.getElementById("seventeenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[17].icon === "partly-cloudy-night"){
                document.getElementById("seventeenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[17].icon === "rain"){
                document.getElementById("seventeenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[17].icon === "clear-day"){ 
                document.getElementById("seventeenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[17].icon === "clear-night"){
                document.getElementById("seventeenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[18].icon === "partly-cloudy-day")
            {
            document.getElementById("eighteenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[18].icon === "partly-cloudy-night"){
                document.getElementById("eighteenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[18].icon === "rain"){
                document.getElementById("eighteenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[18].icon === "clear-day"){ 
                document.getElementById("eighteenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[18].icon === "clear-night"){
                document.getElementById("eighteenthImage").src=`${dayImage[4]}`
            }

            
            if(jsonData.days[0].hours[19].icon === "partly-cloudy-day")
            {
            document.getElementById("ninteenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[19].icon === "partly-cloudy-night"){
                document.getElementById("ninteenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[19].icon === "rain"){
                document.getElementById("ninteenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[19].icon === "clear-day"){ 
                document.getElementById("ninteenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[19].icon === "clear-night"){
                document.getElementById("ninteenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[20].icon === "partly-cloudy-day")
            {
            document.getElementById("twenthImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[20].icon === "partly-cloudy-night"){
                document.getElementById("twenthImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[20].icon === "rain"){
                document.getElementById("twenthImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[20].icon === "clear-day"){ 
                document.getElementById("twenthImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[20].icon === "clear-night"){
                document.getElementById("twenthImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[21].icon === "partly-cloudy-day")
            {
            document.getElementById("twentyOneImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[21].icon === "partly-cloudy-night"){
                document.getElementById("twentyOneImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[21].icon === "rain"){
                document.getElementById("twentyOneImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[21].icon === "clear-day"){ 
                document.getElementById("twentyOneImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[21].icon === "clear-night"){
                document.getElementById("twentyOneImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[22].icon === "partly-cloudy-day")
            {
            document.getElementById("twentyTwoImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[22].icon === "partly-cloudy-night"){
                document.getElementById("twentyTwoImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[22].icon === "rain"){
                document.getElementById("twentyTwoImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[22].icon === "clear-day"){ 
                document.getElementById("twentyTwoImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[22].icon === "clear-night"){
                document.getElementById("twentyTwoImage").src=`${dayImage[4]}`
            }

            if(jsonData.days[0].hours[23].icon === "partly-cloudy-day")
            {
            document.getElementById("twentyThreeImage").src=`${dayImage[0]}`
            }
            else if(jsonData.days[0].hours[23].icon === "partly-cloudy-night"){
                document.getElementById("twentyThreeImage").src=`${dayImage[1]}`
            }
            else if(jsonData.days[0].hours[23].icon === "rain"){
                document.getElementById("twentyThreeImage").src=`${dayImage[2]}`
            }
            else if(jsonData.days[0].hours[23].icon === "clear-day"){ 
                document.getElementById("twentyThreeImage").src=`${dayImage[3]}`
            }
            else if(jsonData.days[0].hours[23].icon === "clear-night"){
                document.getElementById("twentyThreeImage").src=`${dayImage[4]}`
            }
       

          function convertToFahrenheit(celsius) {
                return ((celsius * 9 / 5) + 32).toFixed(1);  
}

document.getElementById("fButton").addEventListener("click", function() {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`)
        .then((response) => {
            return response.json()
        }).then((jsonData) => {
            document.getElementById("temperature").textContent = `${convertToFahrenheit(jsonData.days[0].temp)}°F`;
            document.getElementById("zero").textContent = `${convertToFahrenheit(jsonData.days[0].hours[0].temp)}°F`;
            document.getElementById("one").textContent = `${convertToFahrenheit(jsonData.days[0].hours[1].temp)}°F`;
            document.getElementById("two").textContent = `${convertToFahrenheit(jsonData.days[0].hours[2].temp)}°F`;
            document.getElementById("three").textContent = `${convertToFahrenheit(jsonData.days[0].hours[3].temp)}°F`;
            document.getElementById("four").textContent = `${convertToFahrenheit(jsonData.days[0].hours[4].temp)}°F`;
            document.getElementById("five").textContent = `${convertToFahrenheit(jsonData.days[0].hours[5].temp)}°F`;
            document.getElementById("six").textContent = `${convertToFahrenheit(jsonData.days[0].hours[6].temp)}°F`;
            document.getElementById("seven").textContent = `${convertToFahrenheit(jsonData.days[0].hours[7].temp)}°F`;
            document.getElementById("eight").textContent = `${convertToFahrenheit(jsonData.days[0].hours[8].temp)}°F`;
            document.getElementById("nine").textContent = `${convertToFahrenheit(jsonData.days[0].hours[9].temp)}°F`;
            document.getElementById("ten").textContent = `${convertToFahrenheit(jsonData.days[0].hours[10].temp)}°F`;
            document.getElementById("eleven").textContent = `${convertToFahrenheit(jsonData.days[0].hours[11].temp)}°F`;
            document.getElementById("twelve").textContent = `${convertToFahrenheit(jsonData.days[0].hours[12].temp)}°F`;
            document.getElementById("thirteen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[13].temp)}°F`;
            document.getElementById("fourteen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[14].temp)}°F`;
            document.getElementById("fifteen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[15].temp)}°F`;
            document.getElementById("sixteen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[16].temp)}°F`;
            document.getElementById("seventeen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[17].temp)}°F`;
            document.getElementById("eighteen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[18].temp)}°F`;
            document.getElementById("ninteen").textContent = `${convertToFahrenheit(jsonData.days[0].hours[19].temp)}°F`;
            document.getElementById("twenty").textContent = `${convertToFahrenheit(jsonData.days[0].hours[20].temp)}°F`;
            document.getElementById("twentyOne").textContent = `${convertToFahrenheit(jsonData.days[0].hours[21].temp)}°F`;
            document.getElementById("twentyTwo").textContent = `${convertToFahrenheit(jsonData.days[0].hours[22].temp)}°F`;
            document.getElementById("twentyThree").textContent = `${convertToFahrenheit(jsonData.days[0].hours[23].temp)}°F`;
            
        }) 
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });

    })


            
        })
    }
    





    
    