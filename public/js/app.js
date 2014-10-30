(function() {
  scroll(".sponsors", 2500)
  scroll(".gifs", 3000)

  var announcements = document.querySelector(".announcements > iframe");

  setTimeout(function() {
    announcements.style.height = document.body.offsetHeight + "px";
  }, 250);

  function scroll(selector, speed){
    var sponsors = document.querySelector(selector);

    setInterval(function() {
      var first = sponsors.children[0];

      sponsors.removeChild(first);
      sponsors.appendChild(first);
    }, speed);
  }
})();
