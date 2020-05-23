window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);


Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem, i) {
    elem.on(name, fn);
  });
};

// https://www.evandromacedo.com/using-blingjs-to-bring-back-the-old-jquery-syntax-into-vanilla-js/
// https://www.youtube.com/watch?v=pws4qzGn5ak
// how to use..
// $('.card');  // <div class="card"></div>
// $$('.card'); // [ <div class="card"></div> <div class="card"></div> ]

// insted of
// document.querySelector('.card').addEventListener('click', handleClick);
// use
// $('.card').on('click', handleClick);