(function(){

  var view = document.querySelector('.swiper-container');

  var controller = {
    view: null,
    init: function(){
      this.view = view;
      this.initSwiper();
    },
    initSwiper: function(){
      this.swiper = new Swiper(this.view,{
        loop: true,
        navigation: {
          nextEl: '.button.next',
          prevEl: '.button.prev',
        }
      })
    }
  }

  controller.init();
})()
