document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".diferencial-link");
    const displayArea = document.getElementById("descricao-diferencial");
  
    if (links && displayArea) {
      links.forEach(link => {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          const texto = this.getAttribute("data-text");
          displayArea.innerHTML = `<p>${texto}</p>`;
        });
      });
    }
  });