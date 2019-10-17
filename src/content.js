(function(){
  var elm = document.createElement("div");
  elm.id = "stalker";
  elm.innerText = location.host;
  elm.style.color = 'black';
  elm.style.position = 'fixed';
  elm.style.zIndex = '2147483647';
  document.body.appendChild(elm);
  document.body.addEventListener("mousemove", function(event){
    elm.style.left = event.clientX + 'px';
    elm.style.top = event.clientY - 42 + 'px';
  }, false);
})();
