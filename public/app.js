const app = document.getElementById("app");

const CAT_COLORS = ["#e4572e", "#2f6690", "#3a913f", "#f2a541", "#8e44ad", "#d1495b", "#1b998b", "#c98a3a"];
const ROTATIONS = [-3, 2, -2, 3, -1, 2, -3, 1, 3, -2];
const TYPE_LABEL = { noun: "Nomen", verb: "Verb", adjective: "Adjektiv" };

const state = {
  screen: "home",
  categories: [],
  currentCategory: null,
  categoryWords: [],
  loadingWords: false,
  wordsError: null,
  recentIds: [],
  wordsCache: new Map(),
  openWordId: null,
  searchOpen: false,
  searchQuery: "",
  searchResults: [],
  sourcesOpen: false,
  devMode: false,
  known: loadJSON("wq_known", []),
  saved: loadJSON("wq_saved", []),
  viewedIds: loadJSON("wq_viewed", [])
};

function loadJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function persist(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage unavailable, learning progress just won't persist
  }
}

async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "text") node.textContent = value;
    else if (key === "class") node.className = value;
    else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2), value);
    else if (value !== null && value !== undefined) node.setAttribute(key, value);
  }
  for (const child of children) if (child) node.appendChild(child);
  return node;
}

function icon(paths, size = 16) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", size);
  svg.setAttribute("height", size);
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2.5");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  for (const d of paths) {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", d);
    svg.appendChild(p);
  }
  return svg;
}

function displayWord(w) {
  return w.article ? `${w.article} ${w.word}` : w.word;
}

function wordColor(w) {
  if (w.type === "noun") {
    if (w.article === "der") return "#2f6690";
    if (w.article === "die") return "#d1495b";
    if (w.article === "das") return "#3a913f";
    return "#555";
  }
  if (w.type === "verb") return "#e4572e";
  return "#8e44ad";
}

function cacheWords(words) {
  for (const w of words) state.wordsCache.set(w.id, w);
}

function render() {
  app.innerHTML = "";
  const shell = el("div", { class: "app-shell" });
  shell.append(renderNav());

  if (state.screen === "home") shell.append(renderHome());
  else shell.append(renderCategory());

  shell.append(
    el("footer", { text: "Wortschatz aus Wiktionary, Tatoeba und OpenThesaurus." })
  );

  if (state.searchOpen) shell.append(renderSearchDialog());
  if (state.sourcesOpen) shell.append(renderSourcesDialog());
  if (state.openWordId) shell.append(renderWordDialog());

  app.append(shell);
}

function renderNav() {
  const nav = el("nav", { class: "nav" });
  nav.append(
    el("span", { class: "nav-brand", text: "Deutsch. ✎" }),
    el("button", {
      class: "icon-btn",
      type: "button",
      "aria-label": "Wort suchen",
      onclick: openSearch
    }, [icon(["m21 21-4.34-4.34", "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16"], 18)]),
    el("a", { class: "nav-link", href: "#", text: "Quellen", onclick: (e) => { e.preventDefault(); openSources(); } }),
    el("button", {
      class: `dev-toggle${state.devMode ? " active" : ""}`,
      type: "button",
      text: "Dev",
      onclick: () => { state.devMode = !state.devMode; render(); }
    })
  );
  return nav;
}

function renderHome() {
  const page = el("div", { class: "page" });
  const hero = el("div", { class: "hero" });
  hero.append(
    el("h1", { text: "Deutsch lernen!" }),
    (() => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "hero-underline");
      svg.setAttribute("width", "220");
      svg.setAttribute("height", "18");
      svg.setAttribute("viewBox", "0 0 220 18");
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", "M4 10c20-10 40 8 60-2s40 8 60-2 40 8 60-2 30 6 32 4");
      p.setAttribute("fill", "none");
      p.setAttribute("stroke", "#e4572e");
      p.setAttribute("stroke-width", "3");
      p.setAttribute("stroke-linecap", "round");
      svg.appendChild(p);
      return svg;
    })(),
    el("p", { text: "Was möchtest du lernen?" })
  );
  page.append(hero);

  page.append(
    el("p", {
      class: "progress-line",
      text: `Heute — ${state.viewedIds.length} angesehen · ${state.known.length} gelernt · ${state.saved.length} gespeichert ⭐`
    })
  );

  if (state.categories.length === 0) {
    page.append(el("p", { class: "status", text: "Kategorien werden geladen…" }));
    loadCategories();
    return page;
  }

  const grid = el("div", { class: "tile-grid" });
  state.categories.forEach((cat, i) => {
    const color = CAT_COLORS[i % CAT_COLORS.length];
    const rot = ROTATIONS[i % ROTATIONS.length];
    const tile = el("a", {
      class: "cat-tile",
      href: `/category/${cat.slug}`,
      text: cat.name,
      onclick: (e) => { e.preventDefault(); navigate(`/category/${cat.slug}`); }
    });
    tile.style.border = `4px solid ${color}`;
    tile.style.color = color;
    tile.style.transform = `rotate(${rot}deg)`;
    tile.style.boxShadow = `5px 5px 0 ${color}`;
    grid.append(tile);
  });
  page.append(grid);
  return page;
}

async function loadCategories() {
  try {
    state.categories = await fetchJSON("/api/categories");
  } catch {
    state.categories = [];
  }
  render();
}

function renderCategory() {
  const page = el("div", { class: "page" });
  const catName = (state.categories.find((c) => c.slug === state.currentCategory) || {}).name || state.currentCategory;

  const header = el("div", { class: "category-header" });
  header.append(
    el("a", {
      class: "back-btn",
      href: "/",
      onclick: (e) => { e.preventDefault(); navigate("/"); }
    }, [icon(["m15 18-6-6 6-6"], 20), document.createTextNode(" " + catName)]),
    el("button", {
      class: "refresh-btn",
      type: "button",
      disabled: state.loadingWords ? "true" : null,
      onclick: () => loadCategoryWords(state.currentCategory, state.recentIds)
    }, [document.createTextNode("Neue Wörter "), icon(["M3 12a9 9 0 0 1 15-6.7L21 8", "M21 3v5h-5", "M21 12a9 9 0 0 1-15 6.7L3 16", "M3 21v-5h5"])])
  );
  page.append(header);

  if (state.loadingWords) {
    page.append(el("p", { class: "status", text: "Wörter werden geladen…" }));
    const grid = el("div", { class: "word-grid" });
    for (let i = 0; i < 10; i++) grid.append(el("div", { class: "skel" }));
    page.append(grid);
    return page;
  }

  if (state.wordsError) {
    page.append(el("p", { class: "status error", text: "Wörter konnten nicht geladen werden." }));
    return page;
  }

  const grid = el("div", { class: "word-grid" });
  state.categoryWords.forEach((w, i) => {
    const color = wordColor(w);
    const rot = ROTATIONS[i % ROTATIONS.length];
    const tile = el("a", {
      class: "word-tile",
      href: `/word/${w.id}`,
      onclick: (e) => { e.preventDefault(); navigate(`/word/${w.id}`); }
    }, [
      el("span", { class: "word-label", text: displayWord(w) }),
      el("span", { class: "word-level", text: w.level || "" })
    ]);
    tile.style.border = `3px solid ${color}`;
    tile.style.color = color;
    tile.style.transform = `rotate(${rot}deg)`;
    tile.style.boxShadow = `5px 5px 0 ${color}`;
    grid.append(tile);
  });
  page.append(grid);
  return page;
}

async function loadCategoryWords(slug, exclude) {
  state.currentCategory = slug;
  state.loadingWords = true;
  state.wordsError = null;
  render();

  try {
    const query = exclude.length ? `?exclude=${exclude.join(",")}` : "";
    const data = await fetchJSON(`/api/categories/${slug}/words${query}`);
    cacheWords(data.words);
    state.categoryWords = data.words;
    state.recentIds = [...new Set([...state.recentIds, ...data.words.map((w) => w.id)])].slice(-24);
  } catch {
    state.wordsError = true;
  }
  state.loadingWords = false;
  render();
}

function openWord(id) {
  const alreadyViewed = state.viewedIds.includes(id);
  if (!alreadyViewed) {
    state.viewedIds = [...state.viewedIds, id];
    persist("wq_viewed", state.viewedIds);
  }
  state.openWordId = id;
  state.searchOpen = false;
  render();
}

function closeWord() {
  state.openWordId = null;
  render();
}

function toggleKnown() {
  const id = state.openWordId;
  state.known = state.known.includes(id) ? state.known.filter((k) => k !== id) : [...state.known, id];
  persist("wq_known", state.known);
  render();
}

function toggleSaved() {
  const id = state.openWordId;
  state.saved = state.saved.includes(id) ? state.saved.filter((k) => k !== id) : [...state.saved, id];
  persist("wq_saved", state.saved);
  render();
}

function renderWordDialog() {
  const word = state.wordsCache.get(state.openWordId);
  const overlay = el("div", { class: "overlay", onclick: (e) => { if (e.target === e.currentTarget) closeWord(); } });
  const dialog = el("div", { class: "word-dialog" });
  dialog.append(el("div", { class: "word-dialog-top" }));

  if (!word) {
    dialog.append(el("p", { class: "status", text: "Wort wird geladen…" }));
    overlay.append(dialog);
    return overlay;
  }

  const color = wordColor(word);
  const head = el("div", { class: "word-dialog-header" });
  const titleBlock = el("div", {});
  const title = el("div", { class: "word-title", text: displayWord(word) });
  title.style.color = color;
  titleBlock.append(
    title,
    el("div", { class: "word-meta", text: `${TYPE_LABEL[word.type] || word.type} · ${word.level || "?"}` })
  );
  head.append(
    titleBlock,
    el("button", { class: "close-btn", type: "button", "aria-label": "Schließen", onclick: closeWord }, [icon(["M18 6 6 18", "m6 6 12 12"], 14)])
  );
  dialog.append(head);

  if (word.meanings && word.meanings.length) {
    dialog.append(el("p", { class: "word-meanings", text: word.meanings.join(" · ") }));
  }

  if (word.grammar && Object.keys(word.grammar).length) {
    const section = el("div", { class: "section" });
    section.append(el("div", { class: "section-title", text: "Grammatik" }));
    const grid = el("div", { class: "grammar-grid" });
    for (const [label, value] of Object.entries(word.grammar)) {
      grid.append(
        el("span", { class: "grammar-label", text: label }),
        el("span", { class: "grammar-value", text: value })
      );
    }
    section.append(grid);
    dialog.append(section);
  }

  if (word.examples && word.examples.length) {
    const section = el("div", { class: "section" });
    section.append(el("div", { class: "section-title", text: "Beispiele" }));
    for (const ex of word.examples) {
      section.append(
        el("div", {}, [
          el("p", { class: "example-de", text: ex.de }),
          el("p", { class: "example-en", text: ex.source ? `${ex.en || ""} — ${ex.source}` : (ex.en || "") })
        ])
      );
    }
    dialog.append(section);
  }

  if (word.synonyms && word.synonyms.length) {
    const section = el("div", { class: "section" });
    section.append(el("div", { class: "section-title", text: "Synonyme" }));
    const list = el("div", { class: "synonym-list" });
    for (const syn of word.synonyms) {
      const tag = el("span", { class: "synonym-tag", text: syn });
      tag.style.border = `2px solid ${color}`;
      tag.style.color = color;
      list.append(tag);
    }
    section.append(list);
    dialog.append(section);
  }

  const actions = el("div", { class: "word-actions" });
  const isKnown = state.known.includes(word.id);
  const isSaved = state.saved.includes(word.id);
  const knownBtn = el("button", { class: `action-btn${isKnown ? " on" : ""}`, type: "button", onclick: toggleKnown }, [
    icon(["M20 6 9 17l-5-5"]),
    document.createTextNode("Kenne ich")
  ]);
  if (isKnown) { knownBtn.style.background = "#3a913f"; knownBtn.style.borderColor = "#3a913f"; }
  const savedBtn = el("button", { class: `action-btn${isSaved ? " on" : ""}`, type: "button", onclick: toggleSaved }, [
    icon(["M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"]),
    document.createTextNode("Speichern")
  ]);
  if (isSaved) { savedBtn.style.background = "#f2a541"; savedBtn.style.borderColor = "#f2a541"; }
  actions.append(knownBtn, savedBtn);
  dialog.append(actions);

  if (state.devMode) {
    const panel = el("div", { class: "dev-panel" });
    panel.append(
      el("div", { class: "dev-row" }, [el("span", { text: "Quelle" }), el("span", { text: "Stub-Daten" })]),
      el("div", { class: "dev-row" }, [el("span", { text: "Provider-Diagnose" }), el("span", { text: "folgt in Meilenstein 3+" })])
    );
    dialog.append(panel);
  }

  overlay.append(dialog);
  return overlay;
}

function openSearch() {
  state.searchOpen = true;
  state.searchQuery = "";
  state.searchResults = [];
  render();
  requestAnimationFrame(() => app.querySelector(".search-input")?.focus());
}

function closeSearch() {
  state.searchOpen = false;
  render();
}

let searchDebounce;
async function onSearchInput(e) {
  state.searchQuery = e.target.value;
  clearTimeout(searchDebounce);
  const q = state.searchQuery.trim();
  if (!q) {
    state.searchResults = [];
    render();
    return;
  }
  searchDebounce = setTimeout(async () => {
    try {
      const data = await fetchJSON(`/api/search?q=${encodeURIComponent(q)}`);
      cacheWords(data.results || []);
      state.searchResults = data.results || [];
    } catch {
      state.searchResults = [];
    }
    render();
    app.querySelector(".search-input")?.focus();
  }, 200);
}

function renderSearchDialog() {
  const overlay = el("div", { class: "overlay", onclick: (e) => { if (e.target === e.currentTarget) closeSearch(); } });
  const dialog = el("div", { class: "dialog" });
  dialog.append(
    el("div", { class: "dialog-header" }, [
      el("div", { class: "dialog-title", text: "Wort suchen 🔎" }),
      el("button", { class: "close-btn", type: "button", "aria-label": "Schließen", onclick: closeSearch }, [icon(["M18 6 6 18", "m6 6 12 12"], 14)])
    ])
  );
  const input = el("input", { class: "search-input", placeholder: "Wort suchen…", value: state.searchQuery });
  input.addEventListener("input", onSearchInput);
  dialog.append(input);

  const q = state.searchQuery.trim();
  if (state.searchResults.length) {
    const list = el("div", { class: "search-results" });
    for (const r of state.searchResults) {
      list.append(
        el("button", {
          class: "search-result",
          type: "button",
          onclick: () => navigate(`/word/${r.id}`)
        }, [document.createTextNode(displayWord(r)), el("span", { class: "muted", text: r.level || "" })])
      );
    }
    dialog.append(list);
  } else if (q) {
    dialog.append(el("p", { class: "muted", text: `Kein Treffer für „${q}“.` }));
  }

  overlay.append(dialog);
  return overlay;
}

function openSources() {
  state.sourcesOpen = true;
  render();
}

function closeSources() {
  state.sourcesOpen = false;
  render();
}

function renderSourcesDialog() {
  const overlay = el("div", { class: "overlay", onclick: (e) => { if (e.target === e.currentTarget) closeSources(); } });
  const dialog = el("div", { class: "dialog sources-dialog" });
  dialog.append(
    el("div", { class: "dialog-title", text: "Datenquellen" }),
    el("p", {}, [(() => { const s = document.createElement("strong"); s.textContent = "Wiktionary"; return s; })(), document.createTextNode(" — Definitionen, Wortart, Genus und Formen. CC BY-SA.")]),
    el("p", {}, [(() => { const s = document.createElement("strong"); s.textContent = "Tatoeba"; return s; })(), document.createTextNode(" — Beispielsätze mit Übersetzung. CC BY.")]),
    el("p", {}, [(() => { const s = document.createElement("strong"); s.textContent = "OpenThesaurus"; return s; })(), document.createTextNode(" — Synonyme und verwandte Wörter. CC BY-SA.")]),
    el("button", { class: "refresh-btn", type: "button", text: "Schließen", onclick: closeSources })
  );
  overlay.append(dialog);
  return overlay;
}

function route(path) {
  const categoryMatch = path.match(/^\/category\/([a-z-]+)$/);
  const wordMatch = path.match(/^\/word\/([a-z-]+)$/);

  if (categoryMatch) {
    const slug = categoryMatch[1];
    const needsFetch = state.currentCategory !== slug || state.categoryWords.length === 0;
    state.screen = "category";
    state.currentCategory = slug;
    if (needsFetch) {
      state.recentIds = [];
      loadCategoryWords(slug, []);
    } else {
      render();
    }
    return;
  }

  if (wordMatch) {
    openWord(wordMatch[1]);
    return;
  }

  state.screen = "home";
  render();
}

function navigate(path) {
  history.pushState({}, "", path);
  route(path);
}

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (state.searchOpen) closeSearch();
  else if (state.sourcesOpen) closeSources();
  else if (state.openWordId) closeWord();
});

window.addEventListener("popstate", () => route(location.pathname));

loadCategories().then(() => route(location.pathname));
