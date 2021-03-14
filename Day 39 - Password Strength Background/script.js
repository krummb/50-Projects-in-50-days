const pass = document.getElementById("password");
const background = document.getElementById("background");
let faded = 20;

pass.addEventListener("input", function () {
  let unfade = faded - pass.value.length * 2;

  background.style.filter = `blur(${unfade}px)`;
});
