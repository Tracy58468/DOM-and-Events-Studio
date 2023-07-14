// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");    
    const abortButton = document.getElementById("missionAbort");
    const status = document.getElementById('flightStatus');
    // const display = document.getElementById('flightDisplay');
    const backgroundShuttle = document.getElementById('shuttleBackground');
    const shutHt = document.getElementById('spaceShuttleHeight');
    const rocketImg = document.getElementById('rocket');
    const upBtn = document.getElementById('up');
    const downBtn = document.getElementById('down');
    const rightBtn = document.getElementById('right');
    const leftBtn = document.getElementById('left');
    let top = 250;
    let bottom = 0;
    let right = 0;
    let left = -20;
    rocketImg.style.position = 'absolute';
    rocketImg.style.top = top + 'px';
    rocketImg.style.bottom = bottom + 'px';
    rocketImg.style.right = right + 'px';
    rocketImg.style.left = left + 'px';

    takeOffButton.addEventListener("click", function (event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.") == true) {
            status.innerHTML = "Shuttle in flight.";
            backgroundShuttle.style.backgroundColor = 'blue';
            shutHt.innerHTML = "10000";
            top -= 10;
            rocketImg.style.top = top + 'px';
        } else {
            status.innerHTML = "Not ready."
            backgroundShuttle.style.backgroundColor = 'red';
        };
        
      });

    upBtn.addEventListener("click", function () {
        shutHt.innerHTML -= -10000;
        top -= 10;
        rocketImg.style.top = top + 'px';
    });

    downBtn.addEventListener("click", function () {
        shutHt.innerHTML -= 10000;
        top += 10;
        rocketImg.style.top = top + 'px';
    });

    rightBtn.addEventListener("click", function () {
        left += 10;
        rocketImg.style.left = left + 'px';
    });

    leftBtn.addEventListener("click", function () {
        left -= 10;
        rocketImg.style.left = left + 'px';
    });

    landingButton.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        backgroundShuttle.style.backgroundColor = 'green';
        shutHt.innerHTML = "0";
        top = 250;
        left = -20;
        rocketImg.style.top = top + 'px';  
        rocketImg.style.left = left + 'px';    
      });

    abortButton.addEventListener("click", function (event) {
      if (window.confirm("Confirm that you want to abort the mission.") == true) {
          status.innerHTML = "Mission aborted.";
          backgroundShuttle.style.backgroundColor = '';
          shutHt.innerHTML = "0";
          top = 250;
          left = -20;
          rocketImg.style.top = top + 'px';
          rocketImg.style.left = left + 'px';   
      };
        
      });

}

window.addEventListener("load", init);