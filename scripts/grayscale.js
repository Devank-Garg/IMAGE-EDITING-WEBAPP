// grayscale.js
function applyGrayscale(imageData) {
    for (let i = 0; i < imageData.data.length; i += 4) {
      const average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
      imageData.data[i] = average; // Red channel
      imageData.data[i + 1] = average; // Green channel
      imageData.data[i + 2] = average; // Blue channel
    }
  }
  