// brightness.js
function applyBrightness(imageData, brightnessValue) {
    const adjustedImageData = new ImageData(new Uint8ClampedArray(imageData.data), imageData.width, imageData.height);
  
    for (let i = 0; i < adjustedImageData.data.length; i += 4) {
      adjustedImageData.data[i] += brightnessValue; // Red channel
      adjustedImageData.data[i + 1] += brightnessValue; // Green channel
      adjustedImageData.data[i + 2] += brightnessValue; // Blue channel
    }
  
    return adjustedImageData;
  }
  