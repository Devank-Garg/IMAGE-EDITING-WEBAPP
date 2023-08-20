const inputElement = document.getElementById('formFileLg');
const imageElement = document.getElementById('uploadedImage');
const submitButton = document.getElementById('submitButton');

let originalImageData = null;
let modifiedImageData = null;

// Handle file selection from input element
inputElement.addEventListener('change', function(event) {
  const file = event.target.files[0];

  if (file) {
    const imageURL = URL.createObjectURL(file);
    const img = new Image();
    img.src = imageURL;

    img.onload = function() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 600; // Set desired width
      canvas.height = 400; // Set desired height
      ctx.drawImage(img, 0, 0, 600, 400);
      imageElement.src = canvas.toDataURL('image/jpeg');

      // Store the original image data once
      if (!originalImageData) {
        originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      }

      // Initialize modifiedImageData if it's not set yet
      if (!modifiedImageData) {
        modifiedImageData = new ImageData(
          new Uint8ClampedArray(originalImageData.data),
          originalImageData.width,
          originalImageData.height
        );
      }
    };
  }
});

// Grayscale button click event
mybtn.addEventListener("click", function() {
  if (modifiedImageData) {
    applyGrayscale(modifiedImageData);
    displayImage(modifiedImageData);
  }
});

// Brightness slider change event
brightnessSlider.addEventListener("input", function() {
  if (originalImageData) {
    const brightnessValue = parseInt(brightnessSlider.value);
    modifiedImageData = applyBrightness(originalImageData, brightnessValue);
    displayImage(modifiedImageData);
  }
});

// Invert button click event
invertBtn.addEventListener("click", function() {
  if (modifiedImageData) {
    applyInvert(modifiedImageData);
    displayImage(modifiedImageData);
  }
});

// Saturation slider change event
saturationSlider.addEventListener("input", function() {
  if (modifiedImageData) {
    const saturationValue = parseFloat(this.value);
    modifiedImageData = applySaturation(modifiedImageData, saturationValue);
    displayImage(modifiedImageData);
  }
});

// Mirror button click event
mirrorBtn.addEventListener("click", function() {
  if (modifiedImageData) {
    modifiedImageData = applyMirror(modifiedImageData);
    displayImage(modifiedImageData);
  }
});

// Reset button click event
resetBtn.addEventListener("click", function() {
  if (originalImageData) {
    modifiedImageData = new ImageData(
      new Uint8ClampedArray(originalImageData.data),
      originalImageData.width,
      originalImageData.height
    );
    displayImage(modifiedImageData);
    brightnessSlider.value = 0;
    saturationSlider.value = 1;
  }
});

// Display the image based on the provided ImageData
function displayImage(imageData) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  context.putImageData(imageData, 0, 0);
  imageElement.src = canvas.toDataURL();
}

// Function to download the modified image
// Function to download the modified image
function downloadModifiedImage() {
  if (modifiedImageData && originalImageData) {
    // Create a canvas with the original dimensions
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = originalImageData.width;
    canvas.height = originalImageData.height;

    // Apply the modifiedImageData onto the canvas
    context.putImageData(modifiedImageData, 0, 0);

    // Convert canvas to data URL and create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL("image/jpeg"); // Use 'image/png' for PNG images
    downloadLink.download = "modified_image.jpg"; // Change the filename as needed

    // Append the link to the document and trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up: remove the download link from the document
    document.body.removeChild(downloadLink);
  }
}

// Add an event listener to the download button
const downloadButton = document.querySelector(".down-btn");
if (downloadButton) {
  downloadButton.addEventListener("click", function() {
    downloadModifiedImage();
  });
}


// Other event listeners for image manipulation functions...
// (include your existing event listeners here)
