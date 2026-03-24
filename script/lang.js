(function () {
  function setLanguage(lang) {
    var elements = document.querySelectorAll("[data-" + lang + "]");
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var text = el.getAttribute("data-" + lang);
      if (text !== null) {
        el.innerHTML = text;
      }
    }
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  }

  window.toggleLanguage = function () {
    var current = localStorage.getItem("lang") || "en";
    setLanguage(current === "en" ? "nl" : "en");
  };

  //Logic to apply saved language on load
  var saved = localStorage.getItem("lang") || "en";
  if (saved !== "en") {
    document.addEventListener("DOMContentLoaded", function () {
      setLanguage(saved);
    });
  }
})();
