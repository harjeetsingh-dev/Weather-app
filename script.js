let Api_key="2139fa0b65a9396e93d4af29e9aae64b";
const  city=document.querySelector("input");
const  Btn=document.querySelector("button");
const  resultDiv=document.querySelector("#Weather-info");

Btn.addEventListener("click",async function(){
    let  cityname=city.value.trim();
    if (cityname==""){
        alert("Enter city Name"); // City Name not Enter
        return ;
    }
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityname)}&appid=${Api_key}&units=metric`;
try {
    let ApiReponse= await fetch(url);
    let  Data= await ApiReponse.json();

    if (ApiReponse.status!=200){
        resultDiv.innerHTML=`<h4>Error:${Data.message}</h4>`; // Data Receive Successfully
    }
    else{
        resultDiv.innerHTML=`<h4>City Name: ${Data.name} ,&nbsp Country: ${Data.sys.country}</h4>
          <h4>🌡Temperature: ${Data.main.temp} °C</h4>
          <h4> ${Data.weather[0].main} &nbsp${Data.weather[0].description}</h4>
          <h4><i class="fa-solid fa-fan" alt="WindFan"></i> WindSpeed: ${Data.wind.speed}&nbsp km/h</h4>
        <img src="https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png" alt="Weather Icon">;`

    city.value = ""; //  clear Old City Name
    }
} catch (error) {
        resultDiv.innerHTML =`<h4>Something went wrong. Please try again.</h4>`; //  City Not Found
}
});