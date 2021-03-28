if ("DeviceOrientationEvent" in window) {
    window.addEventListener("deviceorientation", deviceOrientationHandler, false);
  } else {
    console.log("Device Orientation API not supported.");
  }
  
  var lastDegrees = {
    fb: 0,
    lr: 0
  };
  
  function deviceOrientationHandler(eventData) {
    var tiltLR = eventData.gamma;
    var tiltFB = eventData.beta;
    var dir = eventData.alpha;
  
    if (
      tiltLR - lastDegrees.lr > 7.5 ||
      tiltLR - lastDegrees.lr < -7.5 ||
      tiltFB - lastDegrees.fb > 7.5 ||
      tiltFB - lastDegrees.fb < -7.5
    ) {
      lastDegrees.lr = tiltLR;
      lastDegrees.fb = tiltFB;
      var dots = document.querySelector(".dots");
  
      dots.style.opacity = `1`;
      setTimeout(() => {
        dots.style.opacity = `0`;
      }, 1000);
    }
  
    document.getElementById("doTiltLR").innerHTML = Math.round(
      tiltLR - lastDegrees.lr
    );
    document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
    document.getElementById("doDirection").innerHTML = Math.round(dir);
  
    var holo = document.querySelector(".mask");
  
    holo.style.backgroundPosition = `${tiltLR}% ${tiltFB}%`;
  }
  