(function(){
  var view = document.querySelectorAll('nav.menu > ul > li > a');

  function animate(time){
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);
  
  var controller = {
    view: null,
    init: function(){
      this.view = view;
      this.bindEvents();
    },
    bindEvents: function(){
      var view = this.view;
      var _this = this;
      for (let i = 0; i < view.length; i++) {
        view[i].addEventListener('click', function (event) {
          event.preventDefault();
          var tag = event.target;
          _this.smoothMove.call(_this,tag);
        })
      }
    },
    smoothMove: function(tag){
      var view = this.view;
      let attr = tag.getAttribute('href');
      let element = document.querySelector(attr);
      let top = element.offsetTop;
      let currentTop = window.scrollY;
      let targetTop = top - 80;
      let t = Math.abs(targetTop - currentTop) / 120;
      var coords = {y: currentTop};
      var tween = new TWEEN.Tween(coords)
        .to({y: targetTop}, t * 200)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(function () {
          window.scrollTo(0, coords.y);
        })
        .start();
      for (let j = 0; j < view.length; j++) {
        view[j].classList.remove('active');
      }
      tag.classList.add('active');
    }
  }

  controller.init();

}).call();