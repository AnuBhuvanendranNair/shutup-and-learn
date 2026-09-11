import { categories } from "./categories.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/categories") {
      return handleCategoryList();
    }

    const wordsMatch = url.pathname.match(/^\/api\/categories\/([a-z-]+)\/words$/);
    if (wordsMatch) {
      return handleCategoryWords(wordsMatch[1], url);
    }

    if (url.pathname === "/api/search") {
      return handleSearch(url);
    }

    return env.ASSETS.fetch(request);
  }
};

// Searches the current stub word set only. Replace with real dynamic
// provider lookup (Wiktionary) once that lands, per spec §17.
function handleSearch(url) {
  const q = (url.searchParams.get("q") || "").trim().slice(0, 50).toLowerCase();
  if (!q) return json({ results: [] });

  const seen = new Set();
  const results = [];
  for (const category of Object.values(categories)) {
    for (const w of category.stubWords) {
      if (seen.has(w.id)) continue;
      if (w.word.toLowerCase().includes(q)) {
        seen.add(w.id);
        results.push(w);
      }
    }
  }

  return json({ results: results.slice(0, 8) });
}

function handleCategoryList() {
  const list = Object.values(categories).map(({ slug, name }) => ({ slug, name }));
  return json(list);
}

function handleCategoryWords(slug, url) {
  const category = categories[slug];
  if (!category) {
    return json({ error: "unknown category" }, 404);
  }

  const limit = clampLimit(url.searchParams.get("limit"));
  const exclude = new Set(
    (url.searchParams.get("exclude") || "").split(",").filter(Boolean)
  );

  let pool = category.stubWords.filter((w) => !exclude.has(w.id));
  if (pool.length === 0) pool = category.stubWords; // exhausted the stub set, start over
  const words = shuffle(pool).slice(0, limit);

  return json({ category: slug, words });
}

function clampLimit(raw) {
  const n = Number(raw);
  if (!Number.isFinite(n) || n <= 0) return 10;
  return Math.min(n, 20);
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}
