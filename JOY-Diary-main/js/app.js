const pages = [...document.querySelectorAll(".page")];
const prev = document.getElementById("prevPage");
const next = document.getElementById("nextPage");
const counter = document.getElementById("pageCounter");
const shelf = document.getElementById("shelfDialog");
let current = Number(localStorage.getItem("joy-diary-v01-page") || 0);

function showPage(index){
  current = Math.max(0, Math.min(index, pages.length - 1));
  pages.forEach((page, i) => page.classList.toggle("active", i === current));
  prev.disabled = current === 0;
  next.disabled = current === pages.length - 1;
  counter.textContent = `${current + 1} / ${pages.length}`;
  localStorage.setItem("joy-diary-v01-page", String(current));
}

prev.addEventListener("click", () => showPage(current - 1));
next.addEventListener("click", () => showPage(current + 1));

document.getElementById("openShelf").addEventListener("click", () => shelf.showModal());
document.getElementById("closeShelf").addEventListener("click", () => shelf.close());
document.querySelectorAll("[data-jump]").forEach(button => {
  button.addEventListener("click", () => {
    showPage(Number(button.dataset.jump));
    shelf.close();
  });
});

document.querySelectorAll("[data-save]").forEach(field => {
  const key = `joy-diary-v01-${field.dataset.save}`;
  field.value = localStorage.getItem(key) || "";
  field.addEventListener("input", () => localStorage.setItem(key, field.value));
});

showPage(current);
