// Create a new date instance dynamically with JS
let day = new Date();
let newDate = (day.getMonth() + 1) + '/' + day.getDate() + '/' + day.getFullYear();

/* Global Variables */
const apiUrl = "http://api.openweathermap.org/data/2.5/forecast?zip=";
const apiKey = "&appid=83af79aadf896b70eee432bbcb104b0d";

//add EventListener
document.getElementById("generate").addEventListener('click', action);

function action() {

    const feelings = document.getElementById("feelings").value;
    const newZipCode = document.getElementById("zip").value;

    getWeather(apiUrl, newZipCode, apiKey)

        // Step 1: get data (temprature) from API
        .then((data) => {

            // Step 2: post data (date, temprature & feelings ) to server
            postData('/add', {
                date: newDate,
                temp: data.list[0].main.temp,
                feeling: feelings
            });

            // Step 3: get data (date, temprature & feelings ) from server to update UI
            updateUI();
        })

};

//function to GET API Data
const getWeather = async (apiUrl, zipCode, key) => {

    const resource = await fetch(apiUrl + zipCode + key);

    try {

        const data = await resource.json(); // convert data to JSON
        return data;

    } catch (error) {

        console.log("error", error);

    }

}

// function to POST Data
const postData = async (url = '', data = {}) => {

    console.log(data);

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {

        const newData = await response.json();
        console.log(newData);
        return newData;

    } catch (error) {

        console.log("the request failed");

    }
}

//function to display data in UI
const updateUI = async () => {

    const request = await fetch('/all');

    try {

        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerHTML = `Date:${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature:${allData.temp}`;
        document.getElementById('content').innerHTML = `I feel:${allData.feeling}`;

    } catch (err) {

        console.log('error', err);

    }
}