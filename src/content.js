(function(){
  var elm = document.createElement("div");
  elm.id = "stalker";
  elm.innerText = location.host;
  document.body.appendChild(elm);
  document.body.addEventListener("mousemove", function(event){
    var hei = elm.clientHeight;
    elm.style.left = event.clientX + 'px';
    elm.style.top = (event.clientY - (21 + hei)) + 'px';
  }, false);
})();
