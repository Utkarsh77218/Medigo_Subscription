function payment_page() {
  window.open("payment.html");
}

document.addEventListener("DOMContentLoaded", () => {
  let monthlyBth = document.getElementById("monthlyBtn");
  let yearlyBth = document.getElementById("yearlyBtn");
  let monthlyDiv = document.getElementById("monthly");
  let yearlyDiv = document.getElementById("yearly");

  monthlyBth.addEventListener("click", () => {
    monthlyBth.classList.add("active_button");
    yearlyBth.classList.remove("active_button");
    monthlyDiv.style.removeProperty("display");
    yearlyDiv.style.setProperty("display", "none");
  });

  yearlyBth.addEventListener("click", () => {
    yearlyBth.classList.add("active_button");
    monthlyBth.classList.remove("active_button");
    yearlyDiv.style.removeProperty("display");
    monthlyDiv.style.setProperty("display", "none");
  });
});
