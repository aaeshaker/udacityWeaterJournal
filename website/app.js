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
    let data = {
        zipCode: zipCodeElement.value,
        content: feelingsCodeElement.value,
        date: new Date()
    }
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();