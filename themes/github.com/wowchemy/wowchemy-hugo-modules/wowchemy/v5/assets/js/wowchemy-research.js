// Address GIF Issues When Navigating on the Main Page

document.querySelector('.nav-link').addEventListener('click', function() {
    const gif = document.querySelector('.your-gif-selector');
    gif.style.display = 'block'; // Show the GIF
    setTimeout(() => {
        // Optionally hide it after 2 seconds or on page load completion
        gif.style.display = 'none';
    }, 2000);
});
