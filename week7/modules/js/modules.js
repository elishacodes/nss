// var basicCarModule = {
//   color: "blue",
//   size: "sedan",

//   option:{
//     sunRoof: true,
//     racingStripes: false,
//     spoiler: false,
//     leatherSeats: true,
//     headedSeats: true,
//     underLighting: false
//   },

//   setColor: function (color){
//     this.color = color;
//   }, 
//   setOptions: function (options){
//     this.options = options;
//   }
// }



// basicCarModule.setColor("green");
// basicCarModule.setOptions({});

// console.log('basicCarModule', basicCarModule);

//IIFE

var module = (function(){
 var color = "blue";

 return{
  a:1,
  getColor: function (){
    return color;
  }

 };
})();

var myModule = module;
console.log(module);
