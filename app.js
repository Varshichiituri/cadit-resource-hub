const tabsEl = document.getElementById("tabs");
const content = document.getElementById("content");
const search = document.getElementById("q");
const parts = (location.hash || "#home").slice(1).split("/");
let active = (parts[0] === "home" || HUB.some(p => p.id === parts[0])) ? parts[0] : "home";
let section = parts[1] || "";

function esc(s){ return String(s || "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

function linkHTML(it){
  if (!it.url) return `<span class="title">${esc(it.title)}</span>`;
  return it.url === "#"
    ? `<span class="title">${esc(it.title)}</span><span class="todo">link to add</span>`
    : `<a href="${esc(it.url)}" target="_blank" rel="noopener">${esc(it.title)}</a>`;
}

function itemHTML(it, open){
  const desc = it.desc ? `<span class="desc">${esc(it.desc)}</span>` : "";
  if (it.children && it.children.length) {
    const kids = it.children.map(c => `<li>${linkHTML(c)}${c.desc ? `<span class="desc">${esc(c.desc)}</span>` : ""}</li>`).join("");
    const own = (it.url && it.url !== "#") ? `<li class="own"><a href="${esc(it.url)}" target="_blank" rel="noopener">Open on website</a></li>` : "";
    return `<li><details${open ? " open" : ""}><summary>${esc(it.title)}</summary>${desc}<ul class="sublist">${own}${kids}</ul></details></li>`;
  }
  return `<li>${linkHTML(it)}${desc}</li>`;
}

function groupHTML(g, items, open){
  return `<section class="group"><h3>${esc(g.name)}</h3>${g.note ? `<p class="note">${esc(g.note)}</p>` : ""}<ul>${items.map(i => itemHTML(i, open)).join("")}</ul></section>`;
}

function cardHTML(it){
  const inner = `<strong>${esc(it.title)}</strong>${it.desc ? `<span class="desc">${esc(it.desc)}</span>` : ""}`;
  if (!it.url) return `<div class="card pending">${inner}</div>`;
  if (it.url === "#") return `<div class="card pending">${inner}<span class="todo">link to add</span></div>`;
  return `<a class="card" href="${esc(it.url)}" target="_blank" rel="noopener">${inner}</a>`;
}

function cardsHTML(block){
  return `<h2 class="band">${esc(block.title)}</h2><div class="cards">${block.items.map(cardHTML).join("")}</div>`;
}

// every group of a partner, for search (plain groups, featured cards, sections, other cards)
function partnerGroups(p){
  const out = [];
  if (p.featured) out.push({ g: { name: p.featured.title, items: p.featured.items }, ctx: p.name });
  (p.groups || []).forEach(g => out.push({ g, ctx: p.name }));
  (p.sections || []).forEach(s => s.groups.forEach(g => out.push({ g, ctx: p.name + " " + s.name })));
  if (p.other) out.push({ g: { name: p.other.title, items: p.other.items }, ctx: p.name });
  return out;
}

/* ---------------- HOME TAB ---------------- */
function store(k, d){ try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
function keep(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
let dept = store("hubDept", HOME.depts[0].id);
let pins = store("hubPins", []);

function countItems(p){
  return partnerGroups(p).reduce((n, x) => n + x.g.items.reduce((m, i) => m + 1 + (i.children ? i.children.length : 0), 0), 0);
}
function allHomeItems(){
  return HOME.quick.items.concat(...HOME.depts.map(d => d.items));
}
function hcardHTML(it){
  const on = pins.includes(it.url);
  return `<div class="hcard"><a href="${esc(it.url)}" target="_blank" rel="noopener"><span class="tag">${esc(it.tag || "PAGE")}</span><strong>${esc(it.title)}</strong><span class="desc">${esc(it.desc)}</span></a><button class="pin" data-pin="${esc(it.url)}" aria-pressed="${on}" aria-label="Pin ${esc(it.title)}" title="Pin">&#9733;</button></div>`;
}
function homeHTML(){
  const now = new Date(), h = now.getHours();
  const hello = h < 12 ? "Good morning!" : h < 18 ? "Good afternoon!" : "Good evening!";
  const date = now.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).toUpperCase();
  const d = HOME.depts.find(x => x.id === dept) || HOME.depts[0];
  const pinned = allHomeItems().filter((it, i, a) => pins.includes(it.url) && a.findIndex(z => z.url === it.url) === i);
  const total = HUB.reduce((n, p) => n + countItems(p), 0);
  const chips = HOME.depts.map(x => `<button class="chip" data-dept="${x.id}" aria-pressed="${x.id === d.id}">${esc(x.name)}</button>`).join("");
  const notices = HOME.notices.map(n => `<li><span class="ntag">${esc(n.tag)}</span><div><strong>${esc(n.title)}</strong><p>${esc(n.text)}</p></div></li>`).join("");
  const partners = HUB.map(p => {
    const tags = (p.sections || p.groups || []).slice(0, 4).map(x => `<span class="pill">${esc(x.name)}</span>`).join("");
    return `<button class="pcard" data-go="${p.id}"><span class="pcount">${countItems(p)}</span><strong>${esc(p.name)}</strong><span class="desc">${esc(p.intro)}</span><span class="pills">${tags}</span></button>`;
  }).join("");
  return `<section class="hero"><p class="date">${date}</p><h2>${hello}</h2><p>${esc(HOME.hero)}</p></section>
  <h2 class="band">${esc(HOME.quick.title)} <small>${esc(HOME.quick.note)}</small></h2>
  <div class="hcards">${HOME.quick.items.map(hcardHTML).join("")}</div>
  <h2 class="band">For your department</h2>
  <div class="chips" role="group" aria-label="Department">${chips}</div>
  <div class="hcards">${d.items.map(hcardHTML).join("")}</div>
  <div class="duo">
    <section class="panel"><h3>Your pins <span>${pinned.length}</span></h3>${pinned.length
      ? `<ul class="pinlist">${pinned.map(it => `<li><a href="${esc(it.url)}" target="_blank" rel="noopener">${esc(it.title)}</a><span class="desc">${esc(it.desc)}</span></li>`).join("")}</ul>`
      : `<p class="desc">Star any resource above and it stays here for you. Pins are saved in this browser only.</p>`}</section>
    <section class="panel"><h3>Notices <span>${HOME.notices.length}</span></h3><ul class="notices">${notices}</ul></section>
  </div>
  <h2 class="band">Partners <small>${total} resources</small></h2>
  <div class="pcards">${partners}</div>`;
}

// q = current search text. While searching, no tab is marked as selected.
function renderTabs(q){
  const on = id => !q && id === active;
  const homeTab = `<button class="tab" role="tab" aria-selected="${on("home")}" data-id="home">Home</button>`;
  tabsEl.innerHTML = homeTab + HUB.map(p => `<button class="tab" role="tab" aria-selected="${on(p.id)}" data-id="${p.id}">${esc(p.name)} <span class="cnt">${countItems(p)}</span></button>`).join("");
}

function matches(text, q){ return String(text || "").toLowerCase().includes(q); }

function filterItems(items, q, ctx){
  const out = [];
  items.forEach(it => {
    const self = matches(it.title + " " + it.desc + " " + ctx, q);
    const kids = (it.children || []).filter(c => matches(c.title + " " + c.desc, q));
    if (self) out.push(it);
    else if (kids.length) out.push(Object.assign({}, it, { children: kids }));
  });
  return out;
}

// Ansys-style sections: chips, first section open by default, no repeated heading
function sectionHTML(p){
  const s = (p.sections || []).find(x => x.id === section) || p.sections[0];
  const title = p.sectionsTitle || "Explore";
  const chips = p.sections.map(x => `<button class="chip" data-sec="${esc(x.id)}" aria-pressed="${x.id === s.id}">${esc(x.name)}</button>`).join("");
  return `<h2 class="band">${esc(title)}</h2><div class="chips" role="group" aria-label="${esc(title)}">${chips}</div>`
    + `<div class="secbody">${s.intro ? `<p class="intro">${esc(s.intro)}</p>` : ""}<div class="groups">${s.groups.map(g => groupHTML(g, g.items, false)).join("")}</div></div>`;
}

function render(){
  const q = search.value.trim().toLowerCase();
  renderTabs(q);
  if (!q && active === "home") { content.innerHTML = homeHTML(); return; }
  if (!q) {
    const p = HUB.find(x => x.id === active);
    const homeLinks = [].concat(p.home || [], p.homeExtra || []);
    const home = homeLinks.length ? `<p class="btns">${homeLinks.map(h => h.url === "#"
      ? `<span class="btn pending">${esc(h.title)} <span class="todo">link to add</span></span>`
      : `<a class="btn" href="${esc(h.url)}" target="_blank" rel="noopener">${esc(h.title)}</a>`).join("")}</p>` : "";
    const notice = p.notice ? `<p class="notice">${esc(p.notice)}</p>` : "";
    let body;
    if (p.sections) {
      body = (p.featured ? cardsHTML(p.featured) : "") + sectionHTML(p) + (p.other ? cardsHTML(p.other) : "");
    } else {
      body = (p.featured ? cardsHTML(p.featured) : "")
        + `<div class="groups">${p.groups.map(g => groupHTML(g, g.items, false)).join("")}</div>`;
    }
    content.innerHTML = `<p class="intro">${esc(p.intro)}</p>${home}${notice}${body}`;
    return;
  }
  let html = "", found = 0;
  HUB.forEach(p => {
    const hits = partnerGroups(p).map(x => ({ g: x.g, items: filterItems(x.g.items, q, x.ctx + " " + x.g.name) })).filter(x => x.items.length);
    if (hits.length) { found++; html += `<h2 class="partner-label">${esc(p.name)}</h2><div class="groups">${hits.map(h => groupHTML(h.g, h.items, true)).join("")}</div>`; }
  });
  content.innerHTML = found ? html : `<p class="empty">No resources match "${esc(q)}". Try a shorter word or clear the search.</p>`;
}

tabsEl.addEventListener("click", e => {
  const b = e.target.closest(".tab"); if (!b) return;
  active = b.dataset.id; section = ""; location.hash = active; search.value = ""; render();
});
// Section chips (Ansys tab): always one open, no toggle-off
content.addEventListener("click", e => {
  const b = e.target.closest("[data-sec]"); if (!b) return;
  section = b.dataset.sec;
  location.hash = active + "/" + section; render();
});
// Home tab clicks: department chips, pins, partner cards
content.addEventListener("click", e => {
  const c = e.target.closest("[data-dept]");
  if (c) { dept = c.dataset.dept; keep("hubDept", dept); render(); return; }
  const p = e.target.closest("[data-pin]");
  if (p) { const u = p.dataset.pin; pins = pins.includes(u) ? pins.filter(x => x !== u) : pins.concat(u); keep("hubPins", pins); render(); return; }
  const g = e.target.closest("[data-go]");
  if (g) { active = g.dataset.go; section = ""; location.hash = active; render(); window.scrollTo(0, 0); }
});
document.addEventListener("keydown", e => {
  if (e.key === "/" && document.activeElement !== search) { e.preventDefault(); search.focus(); }
});
search.addEventListener("input", render);
render();
