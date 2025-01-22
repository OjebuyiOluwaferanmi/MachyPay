function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("navbar-sticky");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);

document.querySelector(".subscribe").addEventListener("click", function () {
  const emailInput = document.querySelector(".input-for-gmail").value.trim();
  const popup = document.getElementById("popup");

  if (!emailInput || !emailInput.includes("@gmail.com")) {
    showPopup("Please put in your Gmail.", "error");
  } else {
    showPopup("Subscribed successfully!", "success");
  }
});

//for email
function showPopup(message, type) {
  const popup = document.getElementById("popup");
  popup.textContent = message;
  popup.className = `popup-message ${type}`;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 5000);
}
document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting and page refresh
  });

//for auto tupe
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".autotype", {
    strings: [
      "Digital Space For Successful Payments",
      "Cryptocurrency Environment & Futures",
    ],
    typeSpeed: 90,
    backSpeed: 70,
    loop: true,
  });
});

//auto-count
const counter = document.getElementById("counter");

function startCounting() {
  const target = parseInt(counter.getAttribute("data-target"));
  let currentCount = 0;
  const increment = target / 100;

  const interval = setInterval(() => {
    currentCount += increment;
    if (currentCount >= target) {
      currentCount = target;
      clearInterval(interval);
    }
    counter.innerText = Math.floor(currentCount);
  }, 30);
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting();
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(counter);

// Show the modal automatically when the page loads
window.addEventListener("load", function () {
  var myModal = new bootstrap.Modal(document.getElementById("welcomeModal"));
  myModal.show();
});

//autocollapse navbar when i click the link
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.getElementById("navbarNavDropdown");
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide();
  });
});
