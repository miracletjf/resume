(function(){

  var view = document.querySelector('#message_list');

  var model = {
    // 初始化，连接数据库
    init: function(){
      var APP_ID = 'mROFfmwEE5VK2U3x6tYdaIHK-gzGzoHsz';
      var APP_KEY = 'NLXoLequGFVKiw6QW50iowSv';
      /* 初始化 */
      AV.init({ appId: APP_ID, appKey: APP_KEY });
    },
    fetch: function(){
      var message = new AV.Query('Message');
      return message.find();
    },
    save: function(name,createTime,content){
      /* 创建表 */
      var Message = AV.Object.extend('Message');
      /* 创建行 */
      var message = new Message();
      /* 设置行数据 */
      return message.save({ name: name, createTime: createTime ,content: content });
    }
  }

  var controller = {
    view: null,
    model:null,
    init: function(){
      this.view = view;
      this.model = model;
      
      this.messageList = document.querySelector('#message_list');
      this.form = document.querySelector('#message_form');
      this.name = document.querySelector('input[name="userName"]');
      this.content = document.querySelector('textarea[name="content"]');

      this.model.init();
      this.loadMessage();
      this.bindEvents();
    },
    bindEvents: function(){
      this.form.addEventListener('submit',(e)=>{
        e.preventDefault();
        var nameVal = this.name.value;
        var contentVal = this.content.value;
        if(nameVal === ''){
          alert('请输入姓名！');
          return ;
        }
        if(contentVal === ''){
          alert('请输入内容');
          return ;
        }
        this.saveMessage(nameVal,contentVal);
      })
    },
    loadMessage: function(){
      this.model.fetch().then(objects=>{
        var objects = objects.map(item => item.attributes);
        objects.forEach(item => this.addElement(item));
      })
    },
    saveMessage: function(name,content){
      var time = new Date().toLocaleString();
      this.model.save(name,time,content).then(object=>{
         object = object.attributes;
         console.log(object);
         this.addElement(object);
         this.content.value = '';
      })
    },
    addElement: function(object){
      var li = document.createElement('li');
      var name = document.createElement('span');
      var time = document.createElement('span');
      var content = document.createElement('span');
      
      name.className = 'name';
      name.innerText = object.name;
      
      content.className = 'content';
      content.innerText = object.content;
      
      time.className = 'time'
      time.innerText = object.createTime;

      li.appendChild(name);
      li.appendChild(content);
      li.appendChild(time);

      this.messageList.appendChild(li);

    }
  }

  controller.init();
})()