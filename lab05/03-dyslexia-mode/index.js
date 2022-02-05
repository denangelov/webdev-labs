/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const isPressed = window.localStorage.getItem("dyslexic") === "true";

if(isPressed) {
  document.body.classList.add("dyslexia-mode");
}

const toggle = document.getElementById("dyslexia-toggle");

if(isPressed) {
  toggle.setAttribute('aria-pressed', 'true');
}

toggle.addEventListener('click', (ev) => {
  let pressed = ev.target.getAttribute('aria-pressed') === 'true';
  ev.target.setAttribute('aria-pressed', String(!pressed));
  document.body.classList.toggle("dyslexia-mode");
  window.localStorage.setItem("dyslexic", String(!pressed));
});