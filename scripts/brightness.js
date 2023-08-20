function applyBrightness(imageData, brightnessValue) {
  const adjustedImageData = new ImageData(
    new Uint8ClampedArray(imageData.data),
    imageData.width,
    imageData.height
  );

  for (let i = 0; i < adjustedImageData.data.length; i += 4) {
    adjustedImageData.data[i] = clamp(
      imageData.data[i] + brightnessValue,
      0,
      255
    ); // Red channel
    adjustedImageData.data[i + 1] = clamp(
      imageData.data[i + 1] + brightnessValue,
      0,
      255
    ); // Green channel
    adjustedImageData.data[i + 2] = clamp(
      imageData.data[i + 2] + brightnessValue,
      0,
      255
    ); // Blue channel
  }

  return adjustedImageData;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
