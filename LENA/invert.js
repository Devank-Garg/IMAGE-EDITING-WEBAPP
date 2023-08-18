// invert.js
function applyInvert(imageData) {
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i] = 255 - imageData.data[i]; // Invert red channel
      imageData.data[i + 1] = 255 - imageData.data[i + 1]; // Invert green channel
      imageData.data[i + 2] = 255 - imageData.data[i + 2]; // Invert blue channel
    }
  }
  