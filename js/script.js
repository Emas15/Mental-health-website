document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".testimonial__slide-col");
  var totalSlides = slides.length;
  var currentIndex = 0;
  var slideWidth = slides[0].clientWidth; // Assuming all slides have the same width

  function goToSlide(index) {
    var offset = -index * slideWidth;
    document.getElementById(
      "slide"
    ).style.transform = `translateX(${offset}px)`;
    currentIndex = index;
    updateSlideIndicator();
  }

  function updateSlideIndicator() {
    var btns = document.querySelectorAll(".indicator .btn");
    btns.forEach((btn, index) => {
      if (index === currentIndex) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }

  setInterval(autoSlide, 5000);

  // Initialize the first slide
  goToSlide(currentIndex);

  // Handle click on indicators to switch slides
  var btns = document.querySelectorAll(".indicator .btn");
  btns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      goToSlide(index);
    });
  });
});

// when we click on hamburger icon its close

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("activee");
  navMenu.classList.remove("activee");
}

document.addEventListener("DOMContentLoaded", function () {
  const slideRow = document.querySelector(".testimonial__slide-row");
  const slides = document.querySelectorAll(".testimonial__slide-col");
  let currentIndex = 0;
  const totalSlides = slides.length;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * 100;
    slideRow.style.transform = `translateX(${offset}%)`;
  }

  setInterval(showNextSlide, 5000); // Change slide every 3 seconds
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

function showSidebar() {
  document.querySelector(".sidebar").classList.add("open");
}

function hideSidebar() {
  document.querySelector(".sidebar").classList.remove("open");
}

function showSidebar() {
  document.querySelector(".sidebar").classList.add("open");
  document.querySelector(".hero-section").classList.add("sidebar-open"); // Add this line
}

function hideSidebar() {
  document.querySelector(".sidebar").classList.remove("open");
  document.querySelector(".hero-section").classList.remove("sidebar-open"); // Add this line
}
