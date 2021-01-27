var app = new Vue({
 el: '#app',
 data: {
   picture:[
     'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
     'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
     'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
     'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
   ],
   pictureIDX: 0,
   color:'blue',

 },
 methods: {
   nexts: function() {
       this.pictureIDX += 1;
   },
   previous: function() {
       this.pictureIDX -= 1;
   }
   first: function() {
     if (true) {

     }
   }
  }
});
Vue.config.devtools = true;
