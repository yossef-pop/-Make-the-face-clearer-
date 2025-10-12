document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const template = document.getElementById("tile-template");

  const items = [
    "elbows", "chin", "cheeks", "Belly", "Back", "arms",
    "hair", "forehead", "facial skin", "eyes", "eyelids", "eyebrows",
    "tit-chest", "teeth", "shoulders", "nose", "neck", "lips"
  ];

  grid.innerHTML = "";

  items.forEach(name => {
    const clone = template.content.cloneNode(true);
    const img = clone.querySelector(".tile-img");
    const title = clone.querySelector(".tile-title");
    const menuBtn = clone.querySelector(".menu-btn");
    const menu = clone.querySelector(".menu");

    img.src = `images/${name}.png`;
    img.alt = name;
    title.textContent = name;

    menuBtn.addEventListener("click", e => {
      e.stopPropagation();
      document.querySelectorAll(".menu").forEach(m => m.hidden = true);
      menu.hidden = !menu.hidden;
if (!menu.hidden) {
  const rect = menuBtn.getBoundingClientRect();
  menu.style.position = "absolute";
  menu.style.top = menuBtn.offsetTop + 25 + "px";
  menu.style.left = menuBtn.offsetLeft + "px";
}

    });

    menu.querySelectorAll(".menu-item").forEach(btn => {
      btn.addEventListener("click", () => {
        window.location.href = btn.dataset.page;
      });
    });

    document.body.addEventListener("click", () => (menu.hidden = true));
    grid.appendChild(clone);
  });
});
