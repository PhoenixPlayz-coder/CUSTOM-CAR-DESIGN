AFRAME.registerComponent("base-rotator", {
    schema: {
      speedofRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedofRotation < 0.8) {
            this.data.speedofRotation += 0.08;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedofRotation > -0.8) {
            this.data.speedofRotation -= 0.08;
          }
        }
      });
    },
    tick: function () {
      var baseRotation = this.el.getAttribute("rotation");
  
      baseRotation.y += this.data.speedofRotation;
  
      this.el.setAttribute("rotation", {
        x: baseRotation.x,
        y: baseRotation.y,
        z: baseRotation.z
      });
    }
  });  
  

  