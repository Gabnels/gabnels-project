export function initArticlesLoader() {
  const container = document.getElementById("articles-container");
  if (!container) return;

  const observer = new IntersectionObserver(async ([entry]) => {
    if (!entry.isIntersecting) return;

    observer.disconnect();

    try {
      const res = await fetch("/api/articles.json");
      const articles = await res.json();

      container.innerHTML = articles
        .map(
          (article) => `
          <a href="${article.href}" class="block border rounded-lg p-4 hover:shadow transition">
            <p class="text-sm text-gray-500 mb-1">${article.category}</p>
            <h3 class="text-lg font-semibold mb-2">${article.title}</h3>
            <p class="text-gray-600">${article.description}</p>
          </a>
        `,
        )
        .join("");
    } catch (err) {
      console.error("Error cargando artículos", err);
    }
  });

  observer.observe(container);
}
