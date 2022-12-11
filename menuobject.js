const menu = {
 _meal: '',
  _price: 0,
  set meal(mealToCheck){
    if(typeof mealToCheck === 'string'){
      return this._meal = mealToCheck;
    }
  },
     set price(priceToCheck){
    if(typeof priceToCheck === 'number'){
      return this._price = priceToCheck;
    }
     },
     get todaysSpecial(){
       if(this._meal && this._price){
         return `Today's Special is ${this._meal} for £${this._price}!`
       }else{
         return 'Meal or price was not set correctly!'
       }
     }
};
menu.meal = 'lasagne';
menu.price = 32;


console.log(menu.todaysSpecial)
