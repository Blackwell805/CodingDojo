using System;
using System.Collections.Generic;

namespace hungryNinja
{
    class Buffet
    {
        public List<Food> Menu; //We create a new list from the model Food and give it name.

        //constructor
        public Buffet()
        {
            Menu = new List<Food>() //Normally, we wouldn't do this if we had a database connected. But it's here we hard code our items of food to be served. 
            {
                new Food("Pizza", 1500, false, false),
                new Food("Spaghetti", 1200, false, false),
                new Food("Tacos", 800, true, false),
                new Food("Fish and Chips", 500, false, false),
                new Food("Ice Cream", 350, false, true),
                new Food("Steak", 400, false, false),
                new Food("Hamburger", 900, false, false)
            };
        }

        public Food Serve() //This function uses the Food model 
        {
            Random foodItem = new Random(); //Random is a built in function. We call our randomized item a name.
            int currentFoodItem = foodItem.Next(0, 7); //We created an int variable because the result be a food item selected between 0-7. We list one number higher than the list amount. 
            return Menu[currentFoodItem]; //We return the variable Menu with the int variable that selected index number. 
        }


    }
}
