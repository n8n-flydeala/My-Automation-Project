console.log("Script connected successfully, Young Isis! Grrrt!");

document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector("h1");
  heroText.classList.add("opacity-0");

  setTimeout(() => {
    heroText.classList.remove("opacity-0");
    heroText.classList.add("transition", "duration-700");
  }, 300);
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    await fetch('YOUR_WEBHOOK_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    alert('Message sent! 🚀');
    form.reset();
  } catch (error) {
    alert('Oops! Something went wrong.');
    console.error(error);
  }
});