// FOND ECRAN
VANTA.DOTS({
  el: "#your-element-selector",
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xe99682,
  backgroundColor: 0x000000,
  points: 14.0,
  maxDistance: 15.0,
  spacing: 18.0,
  showLines: false,
});

gsap.fromTo(
  ".hero span",
  {
    scale: 1,
    opacity: 0,
  },
  {
    scale: 1,

    opacity: 1,
    duration: 1,
    stagger: 0.1,
  }
);

// EFFET LUMIERE SUR SLIDES1

document.querySelectorAll(".slides").forEach((slide) => {
  const highlight = document.createElement("div");
  highlight.classList.add("highlight");
  slide.appendChild(highlight);

  slide.addEventListener("mousemove", (e) => {
    const rect = slide.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    highlight.style.transform = `translate(${
      x - highlight.offsetWidth / 2
    }px, ${y - highlight.offsetHeight / 2}px)`;
    highlight.style.display = "block";
  });

  slide.addEventListener("mouseleave", () => {
    highlight.style.display = "none";
  });
});
// EFFET LUMIERE SUR SLIDES2

document.querySelectorAll(".slides2").forEach((slide) => {
  const highlight = document.createElement("div");
  highlight.classList.add("highlight2");
  slide.appendChild(highlight);

  slide.addEventListener("mousemove", (e) => {
    const rect = slide.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    highlight.style.transform = `translate(${
      x - highlight.offsetWidth / 2
    }px, ${y - highlight.offsetHeight / 2}px)`;
    highlight.style.display = "block";
  });

  slide.addEventListener("mouseleave", () => {
    highlight.style.display = "none";
  });
});

// EFFET DE LUMIERE SUR BOUTON

document.querySelectorAll(".btn").forEach((slide) => {
  const highlight = document.createElement("div");
  highlight.classList.add("highlight-button");
  slide.appendChild(highlight);

  slide.addEventListener("mousemove", (e) => {
    const rect = slide.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    highlight.style.transform = `translate(${
      x - highlight.offsetWidth / 2
    }px, ${y - highlight.offsetHeight / 2}px)`;
    highlight.style.display = "block";
  });

  slide.addEventListener("mouseleave", () => {
    highlight.style.display = "none";
  });
});

// EFFET DE LUMIERE SUR section 1

const planete = document.querySelector(".image");
if (planete) {
  const highlight = document.createElement("div");
  highlight.classList.add("highlight-image");
  planete.parentElement.appendChild(highlight);

  planete.addEventListener("mousemove", (e) => {
    const rect = planete.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    highlight.style.transform = `translate(${
      x - highlight.offsetWidth / 2
    }px, ${y - highlight.offsetHeight / 2}px)`;
    highlight.style.display = "block";
  });

  planete.addEventListener("mouseleave", () => {
    highlight.style.display = "none";
  });
}

// EFFET DE LUMIERE SUR SECTION INTELLIGENCE

document.querySelectorAll(".intelligence").forEach((image) => {
  const highlight = document.createElement("div");
  highlight.classList.add("intelligence-section-lumiere");
  image.parentElement.appendChild(highlight);

  image.addEventListener("mousemove", (e) => {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    highlight.style.transform = `translate(${
      x - highlight.offsetWidth / 2
    }px, ${y - highlight.offsetHeight / 2}px)`;
    highlight.style.display = "block";
  });

  image.addEventListener("mouseleave", () => {
    highlight.style.display = "none";
  });
});

// EFFET DE LUMIERE SUR SECTION AI

const image = document.querySelector(".ai-droite");
if (image) {
  const highlight = document.createElement("div");
  highlight.classList.add("highlight-ai");
  image.parentElement.appendChild(highlight);

  image.addEventListener("mousemove", (e) => {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    highlight.style.transform = `translate(${
      x - highlight.offsetWidth / 2
    }px, ${y - highlight.offsetHeight / 2}px)`;
    highlight.style.display = "block";
  });

  image.addEventListener("mouseleave", () => {
    highlight.style.display = "none";
  });
}
const image2 = document.querySelector(".ai-gauche");
if (image2) {
  const highlight = document.createElement("div");
  highlight.classList.add("highlight-ai");
  image2.parentElement.appendChild(highlight);

  image2.addEventListener("mousemove", (e) => {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    highlight.style.transform = `translate(${
      x - highlight.offsetWidth / 2
    }px, ${y - highlight.offsetHeight / 2}px)`;
    highlight.style.display = "block";
  });

  image2.addEventListener("mouseleave", () => {
    highlight.style.display = "none";
  });
}
// Faire Tourner Les Images
const imageElement = document.querySelector(".image");
const imageMenu = document.querySelector(".image-menu");
const imageLink = document.querySelector(".image-link");
const imageOeil = document.querySelector(".image-oeil");
const imageInfiny = document.querySelector(".image-infiny");
imageElement.addEventListener("mouseover", () => {
  imageMenu.classList.add("image-menu-hover");
  imageLink.classList.add("image-link-hover");
  imageOeil.classList.add("image-oeil-hover");
  imageInfiny.classList.add("image-infiny-hover");
});

imageElement.addEventListener("mouseleave", () => {
  imageMenu.classList.remove("image-menu-hover");
  imageLink.classList.remove("image-link-hover");
  imageOeil.classList.remove("image-oeil-hover");
  imageInfiny.classList.remove("image-infiny-hover");
});

// FAIRE APPARAITRE POP-UP ET EFFET H3 AU SURVOL DE LI

const liElements = document.querySelectorAll(".liste-pop-hover");

liElements.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const popHover = li.querySelector(".pop-hover");
    const h3 = li.querySelector(".titre-color");
    popHover.classList.add("active");
    h3.classList.add("color");
  });

  li.addEventListener("mouseleave", () => {
    const popHover = li.querySelector(".pop-hover");
    const h3 = li.querySelector(".titre-color");
    popHover.classList.remove("active");
    h3.classList.remove("color");
  });
});

// SCALE LI LEARN MAIN GAUCHE

const liLearnMainGauche = document.querySelectorAll(".learn-main-gauche-ul li");

liLearnMainGauche.forEach((li) => {
  li.addEventListener("mouseover", () => {
    li.classList.add("mouseover");
  });
});
liLearnMainGauche.forEach((li) => {
  li.addEventListener("mouseleave", () => {
    li.classList.remove("mouseover");
  });
});

// SCALE ET TRANSLATE ELEMENT AI GAUCHE

const aiContenairGauche = document.querySelector(".ai-gauche-bg");

aiContenairGauche.addEventListener("mouseover", () => {
  const aiElements = document.querySelectorAll(".ai-gauche-element");
  aiElements.forEach((elements) => {
    elements.classList.add("ai-gauche-element-hover");
  });
});

aiContenairGauche.addEventListener("mouseleave", () => {
  const aiElements = document.querySelectorAll(".ai-gauche-element");
  aiElements.forEach((elements) => {
    elements.classList.remove("ai-gauche-element-hover");
  });
});

// SCALE ET TRANSLATE BOUTON AI DROITE

const aiContenairDroite = document.querySelector(".ai-droite-bg");

aiContenairDroite.addEventListener("mouseover", () => {
  const aiBoutons = document.querySelectorAll(".ai-droite-bouton");
  aiBoutons.forEach((boutons) => {
    boutons.classList.add("ai-droite-bouton-hover");
  });
});
aiContenairDroite.addEventListener("mouseleave", () => {
  const aiBoutons = document.querySelectorAll(".ai-droite-bouton");
  aiBoutons.forEach((boutons) => {
    boutons.classList.remove("ai-droite-bouton-hover");
  });
});

//
