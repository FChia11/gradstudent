/*************************************************
 *  Wowchemy
 *  https://github.com/wowchemy/wowchemy-hugo-themes
 *
 *  Wowchemy Animation
 **************************************************/

function fadeIn(element, duration = 600) {
  element.style.display = '';
  element.style.opacity = '0';
  let last = +new Date();
  let tick = function () {
    element.style.opacity = (+element.style.opacity + (new Date() - last) / duration).toString();
    last = +new Date();
    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };
  tick();
}

// Function to show the GIF on navigation link click
function showGifOnNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      const gif = document.querySelector('.your-gif-selector'); // Replace with your actual GIF selector
      gif.style.display = 'block'; // Show the GIF
      fadeIn(gif, 600); // Optional: Fade in the GIF

      // Optionally hide it after 2 seconds or on page load completion
      setTimeout(() => {
        gif.style.display = 'none'; // Hide the GIF
      }, 2000);
    });
  });
}

// Call the function to set up event listeners
document.addEventListener('DOMContentLoaded', showGifOnNav);

export { fadeIn };

export {fadeIn};
