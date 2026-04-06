console.log("🔥 Ferrari Mode Activated — Powered by Young Isis! Grrrt!");

// ========== LETTER-BY-LETTER HERO ANIMATION ==========
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector("h1");

  const text = heroText.innerText;
  heroText.innerHTML = "";

  // Wrap each letter
  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.innerText = char;
    span.style.opacity = 0;
    span.style.display = "inline-block";
    span.style.transition = "all .4s ease";
    span.style.transform = "translateY(20px)";
    span.style.transitionDelay = `${i * 40}ms`;
    heroText.appendChild(span);
  });

  // Trigger animation
  setTimeout(() => {
    heroText.querySelectorAll("span").forEach((letter) => {
      letter.style.opacity = 1;
      letter.style.transform = "translateY(0)";
    });
  }, 200);
});


// ========== GOLD GLOW ON SCROLL (supercar shine) ==========
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("glow-gold");
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".service-card").forEach((card) => observer.observe(card));


// ========== SMOOTH SCROLL ==========
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});


// ========== PARTICLE GOLD EFFECT ==========
const createParticle = () => {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${3 + Math.random() * 5}s`;
  document.body.appendChild(particle);

  setTimeout(() => particle.remove(), 8000);
};

setInterval(createParticle, 400);


// ========== CONTACT FORM WEBHOOK ==========
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    await fetch("YOUR_WEBHOOK_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("Message sent! 🚀");
    form.reset();
  } catch (error) {
    alert("Oops! Something went wrong.");
    console.error(error);
  }
});