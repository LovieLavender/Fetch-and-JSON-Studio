// TODO: add code here
window.addEventListener("load", function(){

    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response){    
      return response.json();
    }).then(function(response) {

    response.sort(function(a,b){return b.hoursInSpace-a.hoursInSpace});
    

    let myContainer = document.getElementById("container");
        
    for (let i = 0; i < response.length; i++) {
        // console.log(response[i]);

     let myHtml = `
    <div class = "astronaut">
        <div class = "bio">
        <h3>${response[i].firstName}${response[i].lastName}</h3>
            <ul>
                <li>Hours in Space: ${response[i].hoursInSpace}</li>
                <li ${response[i].active ? 'style="color:green"' : ""}>Active: ${response[i].active}</li>
                <li>Skills: ${response[i].skills.join(", ")}</li>
          </ul>
          </div>
          <img class= "avatar" src="${response[i].picture}"
    </div>
    `; 
    myContainer.innerHTML += myHtml;
    }

        });
      });
    
    //   let numofAstronauts = document.getElementById("numOfAstronauts");
    //   numofAstronauts.innerHTML = `${response.length}`;
    //couldn't get this to work for me