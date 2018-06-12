(function(){
  var view = document.getElementById('loading');

  var controller = {
    view: null,
    init: function(){
      this.view = view;
      this.bindEvents();
    },
    bindEvents: function(){
      var view = this.view;
      window.addEventListener('load',()=>{
        view.classList.remove('active');
      });
    }
  }
  
  controller.init();
}).call()
