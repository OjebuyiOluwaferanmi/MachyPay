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
    event.preventDefault();

    const emailInput = document.getElementById("email").value;

    if (!emailInput) {
      showPopup("Please enter a valid email address!", "error");
      return;
    }

    showPopup("Thank you for subscribing!", "success");

    const form = document.getElementById("subscribeForm");
    form.submit();
  });

document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
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
// Ensure the script runs after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const subscribeForm = document.getElementById("subscribeForm");
  const popup = document.getElementById("popup");

  // Add event listener for form submission
  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const emailInput = document.getElementById("email").value.trim();

    // Validate email format and Gmail domain
    if (!validateEmail(emailInput)) {
      showPopup("Please enter a valid Gmail address!", "error");
      return;
    }

    // Send email using EmailJS
    sendMail(emailInput)
      .then(() => {
        showPopup("Subscription successful! Email sent.", "success");

        // Clear the input field
        document.getElementById("email").value = "";

        // Optional: Redirect to another page (comment this if not needed)
        // window.location.href = "index.html";
      })
      .catch((err) => {
        showPopup("Failed to send email. Please try again.", "error");
        console.error("Email sending error:", err);
      });
  });


  function showPopup(message, type) {
    popup.textContent = message;
    popup.className = `popup-message ${type}`;
    popup.style.display = "block";

    setTimeout(() => {
      popup.style.display = "none";
    }, 5000);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@gmail\.com$/; 
    return emailRegex.test(email);
  }

  function sendMail(email) {
    emailjs.init("uJuH2CFi7w-FySO9t");

    const params = {
      email: email,
    };
    
    const serviceID = "service_jwlz6kd";
    const templateID = "template_p6re3bb";

    return emailjs.send(serviceID, templateID, params);
  }
});
