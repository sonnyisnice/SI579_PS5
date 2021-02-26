var s = Snap('#svg')
var myCircle = s.circle(200,75,50)
myCircle.attr({
    fill:"#000080"
});

document.getElementById("svg").addEventListener("mouseover", ()=> {
    myCircle.animate({fill: "#F6C30C"}, 1000);
})
document.getElementById("svg").addEventListener("mouseleave", ()=> {
    myCircle.animate({fill: "#000080"}, 1000);
});

DateTime = luxon.DateTime
var local = DateTime.local();

localLocation = document.createTextNode(local.zoneName);
localTime = document.createTextNode(local.toLocaleString(DateTime.DATETIME_MED));

document.getElementById("localLocation").appendChild(localLocation);
document.getElementById("localTime").appendChild(localTime);

document.addEventListener("keyup", (event)=>{
    if (event.keyCode == 13){
        let input = document.getElementById("input").value;
        let newZone = local.setZone(input);
        if (newZone.isValid) {
            newZoneTime = document.createTextNode(newZone.toLocaleString(DateTime.DATETIME_MED));
            document.getElementById("timeZone").textContent = "Time in " + input + " is ";
            document.getElementById("timeZone").appendChild(newZoneTime);
        } else {
            document.getElementById("timeZone").textContent = "Invalid Timezone, please type in something else";
        }
    }
})

