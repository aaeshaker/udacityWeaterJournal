// Create a new date instance dynamically with JS
<<<<<<< HEAD
let day = new Date();
let newDate = (day.getMonth() + 1) + '/'+ day.getDate()+'/'+ day.getFullYear();
=======
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
>>>>>>> 688d7d91c9ee8df53b57023236fccf1bd5b51478

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
<<<<<<< HEAD
        console.log("the request failed");
=======
        console.log("error", error);
>>>>>>> 688d7d91c9ee8df53b57023236fccf1bd5b51478
    }
}

//function to display data
<<<<<<< HEAD
const updateUI = async()=>{
    const request = await fetch('/all')
    try{
    const allData = await request.json();
    console.log(allData)
    document.getElementById('date').innerHTML = `Date:${allData.date}`;
    document.getElementById('temp').innerHTML = `Temperature:${allData.temp}`;
    document.getElementById('content').innerHTML = `I feel:${allData.feel}`;
    }catch(err){
    console.log('error',err);
    }
=======
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
>>>>>>> 688d7d91c9ee8df53b57023236fccf1bd5b51478
    }

//add EventListener
document.getElementById("generate").addEventListener('click', action)

function action(){
<<<<<<< HEAD
=======
    //console.log("clicked");
>>>>>>> 688d7d91c9ee8df53b57023236fccf1bd5b51478
    const feelings = document.getElementById("feelings").value;
    const newZipCode = document.getElementById("zip").value;

    getWeather(apiUrl, newZipCode, apiKey)
    .then((data) => {
<<<<<<< HEAD
        postData('/add', {date: newDate, temp: data.list[0].main.temp, feeling: feelings})
=======
        postData('/add', {date: newDate, temp: data.list[0].main.temp, content: feelings})
>>>>>>> 688d7d91c9ee8df53b57023236fccf1bd5b51478
        updateUI();
    })
};
