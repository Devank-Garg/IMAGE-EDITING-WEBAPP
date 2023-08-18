// saturation.js
function applySaturation(imageData, saturationValue) {
    const R_WEIGHT = 0.3086;
    const G_WEIGHT = 0.6094;
    const B_WEIGHT = 0.0820;
  
    const grayScaleImageData = new ImageData(new Uint8ClampedArray(imageData.data), imageData.width, imageData.height);
    for (let i = 0; i < grayScaleImageData.data.length; i += 4) {
      const gray = grayScaleImageData.data[i] * R_WEIGHT + grayScaleImageData.data[i + 1] * G_WEIGHT + grayScaleImageData.data[i + 2] * B_WEIGHT;
      grayScaleImageData.data[i] = gray + (imageData.data[i] - gray) * saturationValue;
      grayScaleImageData.data[i + 1] = gray + (imageData.data[i + 1] - gray) * saturationValue;
      grayScaleImageData.data[i + 2] = gray + (imageData.data[i + 2] - gray) * saturationValue;
    }
    return grayScaleImageData;
  }
  