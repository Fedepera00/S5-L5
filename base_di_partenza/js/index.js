// Gestione dello scroll per la navbar
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var heroHeight = document.querySelector(".hero").offsetHeight;

  if (window.scrollY > heroHeight - 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Effetto fade-in per gli articoli
window.addEventListener("scroll", function () {
  var articles = document.querySelectorAll(".article-item");
  var triggerPoint = window.innerHeight * 0.9; // Quando gli articoli sono visibili al 90% della finestra

  articles.forEach(function (article) {
    var articleTop = article.getBoundingClientRect().top;
    if (articleTop < triggerPoint) {
      article.classList.add("fade-in");
    }
  });
});
