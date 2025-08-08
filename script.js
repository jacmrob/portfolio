export const renderHeader = (currentPage) => {
  fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header-container").innerHTML = html;

      // Set active link based on data-page attribute
      const links = document.querySelectorAll(".headerLink");
      // biome-ignore lint/complexity/noForEach: <explanation>
      links.forEach((link) => {
        if (link.id === currentPage) {
          link.setAttribute("aria-current", "page");
          link.classList.add("active");
        }
      });
    });
};

// Toggle menu header
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".navMenu");
  const navContent = document.querySelector(".navMenuContent");

  menu.addEventListener("pointerdown", (e) => {
    e.stopPropagation();
    navContent.classList.toggle("show");
  });

  document.addEventListener("pointerdown", (e) => {
    if (!document.querySelector(".navMenu").contains(e.target)) {
      navContent.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const track = document.querySelector(".carouselTrack");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = dots.length;
  let autoRotateInterval = null;

  function goToSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    // biome-ignore lint/complexity/noForEach: <explanation>
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }

  function startAutoRotate() {
    autoRotateInterval = setInterval(nextSlide, 5000); // 5 seconds
  }

  function restartAutoRotate() {
    clearInterval(autoRotateInterval);
    startAutoRotate();
  }

  // Attach click event to dots
  // biome-ignore lint/complexity/noForEach: <explanation>
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number.parseInt(dot.dataset.index);
      goToSlide(index);
      restartAutoRotate(); // Reset timer on manual navigation
    });
  });

  // Start rotation when page loads
  goToSlide(currentIndex);
  startAutoRotate();
});
