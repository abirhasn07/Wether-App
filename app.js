// const searchButton = document.getElementById('searchBtn')

const searchHandler=()=>{

    const value=document.getElementById('inputLocation').value
    // console.log("clicked",value)


    const apiKey = `4f2879fbbf8a387ee067126fdcfce584`;

    const mainAPI = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`
    // console.log(mainAPI);
    fetch(mainAPI)
    .then (res=>res.json())
    .then (data=> {console.log(data)
    
    const cityName=data.name;
    console.log(cityName);
    const temp=(data.main.temp)-273.15
    const newtemp =temp.toFixed(2)
    const des=data.weather[0].description
    console.log(des);
    
    console.log(temp);


    document.getElementById("city").innerText=cityName
    document.getElementById("temp").innerText=newtemp
    document.getElementById("des").innerText=des
    
    
    })

    // const {name,cod}=data
    // console.log(name);
    
    .catch(res=>alert("Please Write the correct city name"))


}



// const value=document.getElementById('inputLocation')
// value.addEventListener('keypress' ,function(e){

//     console.log("clicked");
//     // e.preventDefault();

//     if (e.key === "13") {

//         console.log("clicked");
//         // console.log("enter clicked",e.key);
//         document.getElementById("searchBtn").click()
        
//     }
// }
// )