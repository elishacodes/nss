/*
  .....  YOUR MISSION  .....

  1. Make a JavaScript module that has properties
      that describe your favorite food. Once
      property must be an array that will hold
      incredients.

  2. Create a method that allows you to add
      ingredients for your favorite food.

  3. Use the method you built above to add all of
      the ingredients you can think of for your food.

*/



var favoriteFood = {
	base: "dough",
	meat: false,
	spicy: true,
	size: "large",
	vegetables: [], 
	addTopping: function(vegetable){
		this.vegetables.push(vegetable);
	}
}

var myFavoriteFood = favoriteFood;
favoriteFood.addTopping("broccoli");
favoriteFood.addTopping("corn");


console.log(myFavoriteFood);

// var module = (function(){
//  var color = "blue";

//  return{
//   a:1,
//   getColor: function (){
//     return color;
//   }

//  };
// })();

// var myModule = module;
// console.log(module);
// console.log(module.getColor());