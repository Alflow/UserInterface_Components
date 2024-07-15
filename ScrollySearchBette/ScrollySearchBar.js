// document.addEventListener("DOMContentLoaded", function () {
//     const dropdowns = document.querySelectorAll(".advanced-search .dropdown");
//     let openDropdown = null;
  
//     function closeOpenDropdown() {
//       if (openDropdown) {
//         openDropdown.querySelector(".dropdown-menu").classList.remove("show");
//         openDropdown = null;
//       }
//     }
  
//     function positionMenu(button, menu) {
//       const buttonRect = button.getBoundingClientRect();
  
//       let left = buttonRect.left;
//       if (left + menu.offsetWidth > window.innerWidth) {
//         left = window.innerWidth - menu.offsetWidth - 10;
//       }
  
//       let top = buttonRect.bottom;
//       if (top + menu.offsetHeight > window.innerHeight) {
//         top = buttonRect.top - menu.offsetHeight;
//       }
  
//       menu.style.left = `${left}px`;
//       menu.style.top = `${top}px`;
//       menu.style.minWidth = `${button.offsetWidth}px`;
//     }
  
//     dropdowns.forEach((dropdown) => {
//       const button = dropdown.querySelector(".dropdown-toggle");
//       const menu = dropdown.querySelector(".dropdown-menu");
  
//       button.addEventListener("click", function (e) {
//         e.stopPropagation();
  
//         if (openDropdown && openDropdown !== dropdown) {
//           closeOpenDropdown();
//         }
  
//         positionMenu(this, menu);
//         menu.classList.toggle("show");
  
//         if (menu.classList.contains("show")) {
//           openDropdown = dropdown;
//         } else {
//           openDropdown = null;
//         }
//       });
//     });
  
//     document.addEventListener("click", function (e) {
//       if (openDropdown && !openDropdown.contains(e.target)) {
//         closeOpenDropdown();
//       }
//     });
//   });