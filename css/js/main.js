document.addEventListener("DOMContentLoaded", () => {

  /* HEADER FICA MAIS ESCURO AO SCROLL */
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "rgba(0,0,0,.85)";
    } else {
      header.style.background = "rgba(0,0,0,.6)";
    }
  });

  /* EFEITO LEVE DE PARALLAX NO HERO */
  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    const value = window.scrollY;
    hero.style.transform = `translateY(${value * 0.08}px)`;
  });

});
