api();

function api(){
    var typed = document.getElementById("textbox").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${typed}&appid=c634bcf2c21f7e1f16a07d36dd5a7f69`)
    .then(res => res.json())
    .then(data => showtime(data));
}

function showtime(arraydata){
    console.log(arraydata);

    var content = document.getElementById("api-data");
    
    for(var i=0; i<arraydata.length; i++){

        var newdiv = document.createElement("div");
        newdiv.classList.add("api-data-style");

        newdiv.innerHTML = `
        <div>
        <p>Weather in ${typed}</p>
        </div>
        `

      content.appendChild(newdiv);
    }
}