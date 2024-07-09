document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".advanced-search .dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    button.addEventListener("click", function (e) {
      e.stopPropagation(); // Previene que el evento se propague
      const buttonRect = this.getBoundingClientRect();

      // Calcula la posición left
      let left = buttonRect.left;
      if (left + menu.offsetWidth > window.innerWidth) {
        left = window.innerWidth - menu.offsetWidth - 10; // 10px de margen
      }

      // Calcula la posición top
      let top = buttonRect.bottom;
      if (top + menu.offsetHeight > window.innerHeight) {
        top = buttonRect.top - menu.offsetHeight;
      }

      // Aplica las posiciones
      menu.style.left = `${left}px`;
      menu.style.top = `${top}px`;
      menu.style.minWidth = `${this.offsetWidth}px`;

      // Toggle de la clase 'show' para abrir/cerrar el menú
      menu.classList.toggle("show");
    });
  });

  // Cierra los menús cuando se hace clic fuera de ellos
  document.addEventListener("click", function (e) {
    dropdowns.forEach((dropdown) => {
      const menu = dropdown.querySelector(".dropdown-menu");
      if (!dropdown.contains(e.target)) {
        menu.classList.remove("show");
      }
    });
  });
});
