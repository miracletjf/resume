(function(){
  var view= document.getElementById('top_nav_bar');

  var controller = {
    view: null,
    init: function(){
      this.view = view;
      this.bindEvents();
    },
    bindEvents: function(){
      /*监听加载*/
      window.addEventListener('load',()=>{
        this.topNavBarChange();
      });
      /*监听滚动*/
      window.addEventListener('scroll', () => {
        this.topNavBarChange();
      });
    },
    topNavBarChange: function(){
      var view = this.view;
      var sTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (sTop > 0) {
        view.classList.add('active');
      } else {
        view.classList.remove('active');
      }
    }
  }

  controller.init();
}).call();
