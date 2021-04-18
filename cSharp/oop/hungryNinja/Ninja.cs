using System;
using System.Collections.Generic;

namespace hungryNinja
{
    class Ninja
    {
        private int calorieIntake;
        public List<Food> FoodHistory;
        public bool IsFull() //
        {
            if (calorieIntake >= 5000)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public Ninja()
        {
            calorieIntake = 0;
            FoodHistory = new List<Food>(); //Every time a Ninja is created, there is an empty food list created. 
        }

        public void Eat(Food item) //We create a function passing the Food model in with a variable name. 
        {
            FoodHistory.Add(item); //This is where we add food items to a Ninja's FoodHistory.
            calorieIntake += item.Calories; //this is where calories are added.
            Console.WriteLine($"calories{calorieIntake} list {item.Name}");
        }
    }
}

