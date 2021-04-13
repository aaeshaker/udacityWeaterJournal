/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = '&appind=30e2b42ea2a07b0e979c270fbd0441ba&units=imperial';
const apiUrl = 'http://localhost:4200/';

const zipCodeElement = document.getElementById('zip');
const feelingsCodeElement = document.getElementById('feelings');
const dateElement = document.getElementById('date');
const tempElement = document.getElementById('temp');
const contentElement = document.getElementById('content');

const catchError = (error) => console.log('Some Error Has Been => ', error);

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', onGenerate);

// Post data to API
function onGenerate() {
    // debugger: I used it to test my code
    let data = {
        zipCode: zipCodeElement.value,
        content: feelingsCodeElement.value,
        date: new Date()
    };

    // post data to api to get zip code info
    getZipCodeInformation(data.zipCode).then(zipInfo => {
        // debugger
        // Return and show alert if city is not found
        if (zipInfo.cod != 200) {
            return alert(zipInfo.message);
        }
        // post data to server for saving and display in holder section
        data.temp = zipInfo.list[0].main.temp;
        postDateToServer(data);
    }).catch(catchError);
};

// get zip code info from API
async function getZipCodeInformation(zipCode) {
    return await (await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}${apiKey}`)).json()
}

// Post data to server to save
async function postDateToServer(data) {
    let response = await fetch(`${apiUrl}postData`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
        if (!response.ok) {
            alert('Process Not Successfully');
            return;
        }

        response.json().then(data => {
            if (response.ok)
                updateUI();
            else
                alert('Process Not Successfully');
        }).catch(catchError);

    } catch (error) {
        catchError(error);
    }
}

// updating UI
async function updateUI() {
    let response = await fetch(`${apiUrl}all`);
    try {
        response.json().then(data => {
            dateElement.innerHTML = `Date is: ${data.date}`;
            tempElement.innerHTML = `Temp is: ${data.temp}`;
            contentElement.innerHTML = `My Feelings: ${data.content}`;
        }).catch(catchError);
    } catch (error) {
        catchError(error);
    }
}



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();