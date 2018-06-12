(function(){
    /*头部子菜单隐藏，出现*/
    var view = document.getElementsByClassName('menuTigger');
    
    var controller = {
      view: null,
      init: function(){
        this.view = view;
        this.bindEvents();
      },
      bindEvents: function(){
        var view = this.view;
        for (var i = 0; i < view.length; i++) {
          var tag = view[i];
          this.addEvent.call(tag);
        }
      },
      addEvent: function(){
        this.addEventListener('mouseenter', function (event) {
          var li = event.currentTarget;
          li.getElementsByTagName('ul')[0].classList.add('active');
        });
        this.addEventListener('mouseleave', function (event) {
          var li = event.currentTarget;
          li.getElementsByTagName('ul')[0].classList.remove('active');
        })
      }
    }

    controller.init();

}).call()