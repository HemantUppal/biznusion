const container = document.querySelector('.container');
const video = document.getElementById('custom-shape-video');
let isDragging = false;

container.addEventListener('mousedown', () => {
  isDragging = true;
  video.pause();
});

container.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const x = event.clientX - container.offsetLeft;
    const y = event.clientY - container.offsetTop;
    video.style.transformOrigin = `${x}px ${y}px`;
    video.style.transform = `scale(2) translate(-50%, -50%)`; // Adjust scale as needed
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  video.play();
});
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll down
    document.getElementById("navbar").classList.add("hidden");
  } else {
    // Scroll up
    document.getElementById("navbar").classList.remove("hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);
