var app = new Vue({
 el: '#app',
 data: {
   picture:[
     'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
     'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
     'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
     'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
   ],
   icons:[
     'fas fa-circle',
     'fas fa-circle',
     'fas fa-circle',
     'fas fa-circle'
   ],
   iconsIDX: 0,
   pictureIDX: 0,
   colore:'blue',
 },
 methods: {
   nexts: function() {
       this.pictureIDX += 1;
       if (this.pictureIDX > (this.picture.length - 1) ) {
           this.pictureIDX = 0;
       }
   },
   previous: function() {
       this.pictureIDX -= 1;
       if (this.pictureIDX < 0) {
         this.pictureIDX = this.picture.length - 1 ;
         // this.pictureIDX = 3 ; sono equivalenti
       }
   },
   }
});
Vue.config.devtools = true;
