// 1. Mobile menu: opens and closes the menu on small screens
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// 2. Highlight the link of the page you are on
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

// 3. Footer year updates itself
document.getElementById("year").textContent = new Date().getFullYear();

// 4. Contact form: opens your email app with the message ready to send
const MY_EMAIL = "your-email@example.com"; // <-- put your real email here
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const subject = encodeURIComponent("Message from " + name + " (portfolio website)");
    const body = encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");
    window.location.href = "mailto:" + MY_EMAIL + "?subject=" + subject + "&body=" + body;
    document.getElementById("formNote").textContent = "Your email app should open now. Press send there.";
  });
}
