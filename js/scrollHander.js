(function(){
  var view = document.querySelectorAll('[data-special]');

  var controller = {
    view: null,
    initClass: function(){
      var view = this.view;
      for (let i = 0; i < view.length; i++) {
        view[i].classList.add('offset');
      }
    },
    init: function(){
      this.view = view;
      this.initClass();
      setTimeout(()=>{
        this.scrollHandle();
      },100);
      this.bindEvents();
    },
    bindEvents: function(){
      window.addEventListener('scroll',()=>{
        this.scrollHandle();
      })
    },
    scrollHandle: function(){
      var view = this.view;
      var minIndex = this.getMinIndex();
      this.removeOffset(minIndex);
      this.navActiveChange(minIndex);
    },
    getMinIndex: function(){
      var view = this.view;
      var minIndex = 0;
      for (let i = 1; i < view.length; i++) {
        if (Math.abs(view[i].offsetTop - window.scrollY) < Math.abs(view[minIndex].offsetTop - window.scrollY)) {
          minIndex = i;
        }
      }
      return minIndex;
    },
    removeOffset: function(minIndex){
      var view = this.view;
      for(var i=0; i<=minIndex;i++){
        view[i].classList.remove('offset');
      }
    },
    navActiveChange: function(minIndex){
      var view = this.view;
      var spe = view[minIndex].getAttribute('data-special');
      var speAnchor = document.querySelector('[href="#'+spe+'"]');
      var navATags = document.querySelectorAll('nav.menu > ul > li > a');
      for (let i = 0; i < navATags.length; i++) {
        navATags[i].classList.remove('active');
      }
      speAnchor.classList.add('active');
    }
  }

  controller.init();
}).call()
