const state = { records: [], query: "" };

async function init() {
  try {
    const res = await fetch("./data/records.json");
    if (!res.ok) throw new Error("Lỗi tải dữ liệu");
    state.records = await res.json();
    render();
  } catch (e) { console.error(e); }
}

function render() {
  const tbody = document.getElementById("records-tbody");
  const tpl = document.getElementById("row-template");
  if (!tbody || !tpl) return;
  tbody.innerHTML = "";
  state.records
    .filter(r => r.trader.toLowerCase().includes(state.query.toLowerCase()))
    .forEach(r => {
      const clone = tpl.content.cloneNode(true);
      clone.querySelector("[data-cell='id']").textContent = r.id;
      clone.querySelector("[data-cell='trader']").textContent = r.trader;
      clone.querySelector("[data-cell='amount']").textContent = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(r.amount);
      tbody.appendChild(clone);
    });
}

document.getElementById("search-input")?.addEventListener("input", (e) => {
  state.query = e.target.value;
  render();
});

init();