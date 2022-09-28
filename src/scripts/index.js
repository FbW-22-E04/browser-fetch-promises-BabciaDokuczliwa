// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/
new Promise(function (resolve, reject) {
  const modal = document.getElementsByClassName("modal")[0];
  setTimeout(() => resolve((modal.style.display = "block")), 6000);
});
const close = document.getElementsByClassName("close")[0];
close.addEventListener("click", () => {
  document.getElementsByClassName("modal")[0].style.display = "none";
});
