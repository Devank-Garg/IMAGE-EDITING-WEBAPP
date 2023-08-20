// // reset.js

// // Get DOM elements
// const resetBtn = document.getElementById("resetBtn");
// const lenaImage = document.getElementById("lenaImage");
// const brightnessSlider = document.getElementById("brightnessSlider"); // Assuming this element exists

// // Store the original image source
// const originalImageSrc = lenaImage.src;

// // Load the original image data
// const image = new Image();
// image.src = originalImageSrc;
// let originalImageData = null;

// image.onload = function() {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   canvas.width = image.width;
//   canvas.height = image.height;
//   context.drawImage(image, 0, 0, canvas.width, canvas.height);
//   originalImageData = context.getImageData(0, 0, canvas.width, canvas.height);
// };

// // Reset image to original source
// resetBtn.addEventListener("click", function() {
//   if (originalImageData) {
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
//     canvas.width = originalImageData.width;
//     canvas.height = originalImageData.height;
//     context.putImageData(originalImageData, 0, 0);
//     lenaImage.src = canvas.toDataURL();
//     brightnessSlider.value = 0; // Reset the slider value
//   }
// });
