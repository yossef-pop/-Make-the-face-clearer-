document.addEventListener("DOMContentLoaded", () => {
  const bodyParts = [
    { name: "elbows", img: "images/elbows.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "chin", img: "images/chin.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "cheeks", img: "images/cheeks.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "Belly", img: "images/Belly.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "Back", img: "images/Back.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "arms", img: "images/arms.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "hair", img: "images/hair.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "forehead", img: "images/forehead.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "facial skin", img: "images/facial skin.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "eyes", img: "images/eyes.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "eyelids", img: "images/eyelids.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "eyebrows", img: "images/eyebrows.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "tit-chest", img: "images/tit-chest.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "teeth", img: "images/teeth.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "shoulders", img: "images/shoulders.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "nose", img: "images/nose.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "neck", img: "images/neck.png", links: ["page1.html", "page2.html", "page3.html"] },
    { name: "lips", img: "images/lips.png", links: ["page1.html", "page2.html", "page3.html"] }
  ];

  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

  bodyParts.forEach(part => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = part.img;
    img.alt = part.name;

    const title = document.createElement("h3");
    title.textContent = part.name;

    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerHTML = `
      <button class="option" data-link="${part.links[0]}">אופציה 1</button>
      <button class="option" data-link="${part.links[1]}">אופציה 2</button>
      <button class="option" data-link="${part.links[2]}">אופציה 3</button>
    `;
    menu.style.display = "none";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(menu);

    // כשלוחצים על התמונה — נפתח התפריט
    img.addEventListener("click", () => {
      const isOpen = menu.style.display === "block";
      document.querySelectorAll(".menu").forEach(m => (m.style.display = "none"));
      menu.style.display = isOpen ? "none" : "block";
    });

    // מעבר לאתר
    menu.querySelectorAll(".option").forEach(btn => {
      btn.addEventListener("click", e => {
        window.location.href = e.target.dataset.link;
      });
    });

    gallery.appendChild(card);
  });
});
