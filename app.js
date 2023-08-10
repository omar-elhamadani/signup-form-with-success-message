const emailInput = document.getElementById("email");
const submit = document.querySelector("button");
const dismiss = document.getElementById("dismiss");

function validateEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

submit.addEventListener("click", function (event) {
  const email = emailInput.value;

  if (validateEmail(email)) {
    console.log(email);
    const invalid = document.querySelector("em");
    invalid.innerText = "";
    window.location.href = "success.html";
  } else {
    const invalid = document.querySelector("em");
    invalid.innerText = "valid email required";
    emailInput.style.border = "1px solid var(--Tomato)";
    emailInput.style.color = "var(--Tomato)";
    emailInput.style.backgroundColor = "hsla(4, 85%, 79%, 0.644)";
  }
});
dismiss.addEventListener("click", function (event) {
  window.location.href = "index.html";
});
