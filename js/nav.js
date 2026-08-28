export function initNav() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu-list");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    menu.classList.toggle("hidden", open);
    btn.setAttribute("aria-expanded", String(!open));
  });
}