
function myFunction(dotsId, moreId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "En savoir plus";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "En savoir moins";
      moreText.style.display = "inline";
  }
}
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})