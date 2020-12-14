// Write your JavaScript code here!
window.addEventListener("load",function(){

   // add fetch and json here
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
       response.json().then(function(json) {
       const destination = document.getElementById("missionTarget");
   
      //   for(let index in json){
            let index = 0;
         destination.innerHTML =`
      <div>
                        <li>name ${json[index].name}</li>
                        <li>diameter ${json[index].diameter}</li>
                        <li>Star ${json[index].star}</li>
                        <li>distance ${json[index].distance}</li>
                     
                        <li>moons ${json[index].moons}</li>
                        <img src =${json[index].image}> </img>
                     </div>
                     `
                  // }
                     
                  });

       });
   /* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
// Write your JavaScript code here!

   let form = document.querySelector("form");
   form.addEventListener("submit",function(event){
event.preventDefault();
let pilotnameInput = document.querySelector("input[name=pilotName]");
let copilotnameInput = document.querySelector("input[name=copilotName]");
let pilotStatus =  document.querySelector("#pilotStatus");
let copilotStatus = document.querySelector("#copilotStatus");
let fuellevelInput = document.querySelector("input[name=fuelLevel");
let cargomassInput = document.querySelector("input[name=cargoMass]");
let faultyItems  = document.getElementById("faultyItems");
let fuelStatus = document.querySelector("#fuelStatus");
let cargoStatus = document.querySelector("#cargoStatus");

if (pilotnameInput.value === "" || copilotnameInput.value === "" || fuellevelInput.value === "" || cargomassInput.value === ""){
   alert ("All fields are required!");
   event.prreventDefault();
   faultyItems.style.visibility = "hidden";
   document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
   launchStatus.style.color = "black";
}

   else if(isNaN(pilotnameInput.value) === false)
   {
      alert("pilotName should be a string");
      faultyItems.style.visibility = "hidden";
    document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
   launchStatus.style.color = "black";
   }

   else if (isNaN(copilotnameInput.value) === false)
   {
      alert("copilotname should be a string");
      faultyItems.style.visibility = "hidden";
   document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
   launchStatus.style.color = "black";

   }
   else if(isNaN(fuellevelInput.value) === true)
   {
      alert("fuel level should be a number");
      faultyItems.style.visibility = "hidden";
   document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
   launchStatus.style.color = "black";
   }
   else if (isNaN(cargomassInput.value) === true){
   alert("cargomass should be a number");
   faultyItems.style.visibility = "hidden";
   document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
   launchStatus.style.color = "black";
   }

else{
pilotStatus.innerHTML = `Pilot ${pilotnameInput.value} is Ready`;
copilotStatus.innerHTML = `Copilot ${copilotnameInput.value} is Ready` ;

//faultyItems.style.visibility = "hidden";
// good fuel and good cargo


if(fuellevelInput.value<=10000 && cargomassInput.value<10000){
   
faultyItems.style.visibility = "visible";
document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the shuttle to take off"; 
document.getElementById("cargoStatus").innerHTML = "There is enough mass for the shuttle to take off"; 
document.getElementById("launchStatus").innerHTML = `Shuttle is not ready for launch`;
launchStatus.style.color = "red";
}
// good fuel and bad cargo
else if(fuellevelInput.value<=10000 && cargomassInput.value>10000){
   
      faultyItems.style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the shuttle to take off"; 
      document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off"; 
       document.getElementById("launchStatus").innerHTML = `Shuttle is not ready for launch`;
       launchStatus.style.color = "red";
}

   // bad fuel and bad cargo
else if(cargomassInput.value>10000 && fuellevelInput.value>=10000){
   faultyItems.style.visibility = "visible";
   document.getElementById("fuelStatus").innerHTML = "There is  enough fuel for the shuttle to take off"; 
      document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off"; 
   document.getElementById("launchStatus").innerHTML = `Shuttle is not ready for launch`;
   launchStatus.style.color ="red";
}
// bad fuel and good cargo 
else if(fuellevelInput.value>10000 && cargomassInput.value<10000){
   
   faultyItems.style.visibility = "visible";
   document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the shuttle to take off"; 
   document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off"; 
    document.getElementById("launchStatus").innerHTML = `Shuttle is not ready for launch`;
    launchStatus.style.color = "red";
}

else
     {
     document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
     launchStatus.style.color="green"
     faultyItems.style.visibility = "visible"; 
   //   document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotnameInput.value} is Ready`;
   //   document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotnameInput.value} is Ready`;
     document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
     document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
     }
}

   })
});


