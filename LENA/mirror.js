// mirror.js
function applyMirror(imageData) {
    const mirroredImageData = new ImageData(new Uint8ClampedArray(imageData.data), imageData.width, imageData.height);
  
    for (let y = 0; y < imageData.height; y++) {
      for (let x = 0; x < imageData.width / 2; x++) {
        const leftPixel = (y * imageData.width + x) * 4;
        const rightPixel = (y * imageData.width + (imageData.width - x - 1)) * 4;
        for (let channel = 0; channel < 4; channel++) {
          mirroredImageData.data[leftPixel + channel] = imageData.data[rightPixel + channel];
          mirroredImageData.data[rightPixel + channel] = imageData.data[leftPixel + channel];
        }
      }
    }
    return mirroredImageData;
  }
  