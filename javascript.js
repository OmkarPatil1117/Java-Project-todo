var date = new Date();
var hour = date.getHours();

if(hour >= 10) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/window (2).png)";
    document.getElementById("dash").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"; 
    document.getElementById("morning").innerHTML = "GOOD MORNING !! WAKE UP !!";
}

if(hour >= 12) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/Afternoo.png)";
    document.getElementById("dash").innerHTML = "LETS HAVE SOME LAUNCH !!";
    document.getElementById("morning").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
}

if(hour >= 17) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/evening.png)";
    document.getElementById("dash").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    document.getElementById("morning").innerHTML = "GOOD EVENING !!";
}

if(hour >= 21) {
    document.querySelector("#banner").style.backgroundImage = "url(./img/night.png)";
    document.getElementById("dash").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("morning").innerHTML = "GOOD NIGHT !!"; 
}

 document.getElementById("sec").innerHTML = date.getSeconds();

setInterval(() => {
    let a = new Date();
    return document.getElementById("sec").innerHTML = a.getSeconds();
}, 1000);
setInterval(() => {
    let a = new Date();
    return document.getElementById("hour").innerHTML = a.getHours();
}, 1000);
setInterval(() => {
    let a = new Date();
    document.getElementById("minus").innerHTML = a.getMinutes();
}, 1000);









