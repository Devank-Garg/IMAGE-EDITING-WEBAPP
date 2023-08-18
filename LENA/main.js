// main.js
const lenaImage = document.getElementById("lenaImage");
const brightnessSlider = document.getElementById("brightnessSlider");
const mybtn = document.getElementById("mybtn"); // Renamed for clarity

// Your existing reset button logic here
// ...

// Grayscale button click event
mybtn.addEventListener("click", function() {
  if (originalImageData) {
    applyGrayscale(originalImageData);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = originalImageData.width;
    canvas.height = originalImageData.height;
    context.putImageData(originalImageData, 0, 0);
    lenaImage.src = canvas.toDataURL();
  }
});

// Brightness slider change event
brightnessSlider.addEventListener("input", function() {
  if (originalImageData) {
    const brightnessValue = parseInt(brightnessSlider.value);
    const adjustedImageData = applyBrightness(originalImageData, brightnessValue);

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = adjustedImageData.width;
    canvas.height = adjustedImageData.height;
    context.putImageData(adjustedImageData, 0, 0);
    lenaImage.src = canvas.toDataURL();
  }
});

// main.js
// Your existing code...

// Invert button click event
document.getElementById("invertBtn").addEventListener("click", function() {
    if (originalImageData) {
      applyInvert(originalImageData);
      // Update the canvas and image source here
    }
  });
  
  // Saturation slider change event
  document.getElementById("saturationSlider").addEventListener("input", function() {
    if (originalImageData) {
      const saturationValue = parseFloat(this.value);
      const adjustedImageData = applySaturation(originalImageData, saturationValue);
      // Update the canvas and image source here
    }
  });
  
  // Mirror button click event
  document.getElementById("mirrorBtn").addEventListener("click", function() {
    if (originalImageData) {
      const mirroredImageData = applyMirror(originalImageData);
      // Update the canvas and image source here
    }
  });
  