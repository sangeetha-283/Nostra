//Discount close
const closeBtn = document.getElementById("close-btn");
const discountBar = document.querySelector(".discount-bar");
if (closeBtn && discountBar) {
  closeBtn.addEventListener("click", function(){
    discountBar.style.display = "none";
  });
}

// Sidebar open and close logic
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('side-navbar-activate');
    const closeSidebarBtn = document.getElementById('sidebar-close');

if (menuBtn && sidebar) {
  menuBtn.onclick = () => {
    sidebar.style.width = "300px";
  };
}

if (closeSidebarBtn && sidebar) {
  closeSidebarBtn.onclick = () => {
    sidebar.style.width = "0";
  };
}
//Slider image
let sliderIndex = 0;
const slider = document.querySelector(".slider-image-container");
const totalSlides = document.querySelectorAll(".slider-image").length;

function updateSlider() {
    slider.style.transform = `translateX(-${sliderIndex * 100}vw)`;
}

document.querySelector(".slider-left-button").onclick = () => {
    sliderIndex = (sliderIndex <= 0) ? totalSlides - 1 : sliderIndex - 1;
    updateSlider();
}

document.querySelector(".slider-right-button").onclick = () => {
    sliderIndex = (sliderIndex >= totalSlides - 1) ? 0 : sliderIndex + 1;
    updateSlider();
}

// Auto-slide
setInterval(() => {
    sliderIndex = (sliderIndex + 1) % totalSlides;
    updateSlider();
}, 3000);

// Close sidebar when clicking outside (for mobile screens)
window.addEventListener('click', function(event) {
  if (
    sidebar.style.width === "300px" &&
    !sidebar.contains(event.target) &&
    event.target !== menuBtn
  ) {
    sidebar.style.width = "0";
  }
});
//Most wanted heart image
document.querySelectorAll(".like-button").forEach(heart => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("liked");
    });
});

let scrollContent = document.querySelector('.most-wanted');

setInterval(() => {
    scrollContent.scrollBy({
        left: 300,
        behavior: "smooth"
    });
}, 2500);

//Collection page
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active")?.classList.remove("active");
        btn.classList.add("active");
    });
});
