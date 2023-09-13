function randomizeImages() {
    const container = document.getElementById('IMAGESCROLL');
    const images = container.querySelectorAll('img');
    const shuffledImages = Array.from(images).sort(() => Math.random() - 0.5);
  
    // Remove the existing images from the container
    images.forEach((img) => container.removeChild(img));
  
    // Append the shuffled images back to the container
    shuffledImages.forEach((img) => container.appendChild(img));
  }
  
  // Call the function to randomize the images when needed
  randomizeImages();