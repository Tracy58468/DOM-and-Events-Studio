// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");    
    const abortButton = document.getElementById("missionAbort");
    const status = document.getElementById('flightStatus');
    const display = document.getElementById('flightDisplay');
    const backgroundShuttle = document.getElementById('shuttleBackground');
    let rocketImg = document.getElementById('rocket');
    rocketImg.style.position = 'absolute';
    rocketImg.style.left = '0px';
    rocketImg.style.bottom = '0px';
    const upBtn = document.getElementById('up');
    const downBtn = document.getElementById('down');
    const rightBtn = document.getElementById('right');
    const leftBtn = document.getElementById('left');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let shuttleWidth = document.getElementById('spaceShuttleWidth');


    takeOffButton.addEventListener("click", function (event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.") == true) {
            status.innerHTML = "Shuttle in flight.";
            backgroundShuttle.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = "10000";
        } else {
            status.innerHTML = "Not ready."
            backgroundShuttle.style.backgroundColor = 'red';
        };
        
      });

    upBtn.addEventListener("click", function () {
        shuttleHeight.innerHTML -= -10000;
    });

    downBtn.addEventListener("click", function () {
        shuttleHeight.innerHTML -= 10000;
    });

    rightBtn.addEventListener("click", function () {
        movement = parseInt('rocketImg.style.left') + 10 + 'px';
        rocketImg.style.left = movement;
    });

    // lefttBtn.addEventListener("click", function () {
    //     rocket.style.position += '10px';
    // });

    landingButton.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        backgroundShuttle.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = "0";        
      });

    abortButton.addEventListener("click", function (event) {
      if (window.confirm("Confirm that you want to abort the mission.") == true) {
          status.innerHTML = "Mission aborted.";
          backgroundShuttle.style.backgroundColor = '';
          shuttleHeight.innerHTML = "0";
      } else {
          status.innerHTML = "Not ready."
          backgroundShuttle.style.backgroundColor = 'red';
      };
        
      });


    //   abortButton.addEventListener("click", function (event) {
    //     abortButton.style.backgroundColor = 'red';
        
    //   });

}

window.addEventListener("load", init);