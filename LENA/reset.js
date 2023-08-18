// reset.js
const resetBtn = document.getElementById("resetBtn");
const originalImageSrc = lenaImage.src; // Store the original image source

// Load the original image data
const image = new Image();
image.src = originalImageSrc;
let originalImageData = null;

image.onload = function() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = image.width;
  canvas.height = image.height;
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  originalImageData = context.getImageData(0, 0, canvas.width, canvas.height);
};

// Reset image to original source
resetBtn.addEventListener("click", function() {
  lenaImage.src = originalImageSrc;
  brightnessSlider.value = 0; // Reset the slider value
});
