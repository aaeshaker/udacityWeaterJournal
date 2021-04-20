// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Global Variables */
const apiUrl = "http://api.openweathermap.org/data/2.5/forecast?zip=";
const apiKey = "&appid=7130c3c7cc45085627bea6bbdeac4bd9&units=imperial";

//function to GET API Data
const getWeather = async (apiUrl, zipCode, key) => {
    const resource = await fetch(apiUrl+zipCode+key);
    try{
        const data = await resource.json();
        return data;
    }catch(error){
        console.log("error", error);
    }
}

// function to POST Data
const postData = async ( url = '', data = {}) =>{
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials : 'same-origin',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data)
    });

    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error){
        console.log("error", error);
    }
}

//function to display data
const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const allInfo = await request.json();
        
        const date1 = document.getElementById('date');
        date.innerHTML = `Date: ${allInfo[0].date}`;
        
        const temp = document.getElementById('temp');
        temp.innerHTML = `Temprature: ${allInfo[0].temp}`;

        const content = document.getElementById('content');
        content.innerHTML = `I feel: ${allInfo[0].content}`;
    }catch(err){
        console.log("error", err);
    }
}

//add EventListener
document.getElementById("generate").addEventListener('click', action)

function action(){
    //console.log("clicked");
    const feelings = document.getElementById("feelings").value;
    const newZipCode = document.getElementById("zip").value;

    getWeather(apiUrl, newZipCode, apiKey)
    .then((data) => {
        postData('/add', {date: newDate, temp: data.list[0].main.temp, content: feelings})
        updateUI();
    })
};
