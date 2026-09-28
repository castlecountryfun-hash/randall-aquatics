(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll(".pill[data-filter]").forEach(function (pill) {
    pill.addEventListener("click", function () {
      document.querySelectorAll(".pill[data-filter]").forEach(function (p) {
        p.classList.remove("is-on");
      });
      pill.classList.add("is-on");
      const key = pill.getAttribute("data-filter");
      document.querySelectorAll("[data-cat]").forEach(function (card) {
        card.style.display = key === "all" || card.getAttribute("data-cat") === key ? "" : "none";
      });
    });
  });

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.style.display = "none";
      const ok = document.querySelector(".form-success");
      if (ok) ok.classList.add("is-visible");
    });
  }
})();
