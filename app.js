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
    const menu = clone.querySelector(".menu");

    img.src = `images/${name}.png`;
    img.alt = name;
    title.textContent = name;

    // פותח את התפריט רק כשנלחץ על התמונה
    img.addEventListener("click", e => {
      e.stopPropagation();
      document.querySelectorAll(".menu").forEach(m => m.hidden = true);
      menu.hidden = !menu.hidden;

      // ממקם את התפריט מתחת לתמונה
      if (!menu.hidden) {
        menu.style.position = "absolute";
        menu.style.top = img.offsetHeight + 10 + "px"; // 10px מתחת לתמונה
        menu.style.left = "50%";
        menu.style.transform = "translateX(-50%)";
      }
    });

    // הקלקה על אחד מהאפשרויות
    menu.querySelectorAll(".menu-item").forEach(btn => {
      btn.addEventListener("click", () => {
        menu.hidden = true;
        window.location.href = btn.dataset.page;
      });
    });

    // הקלקה מחוץ לכרטיס סוגרת את כל התפריטים
    document.body.addEventListener("click", () => {
      menu.hidden = true;
    });

    grid.appendChild(clone);
  });
});
