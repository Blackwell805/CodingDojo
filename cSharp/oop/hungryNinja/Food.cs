namespace hungryNinja
{
    public class Food //Class
    {
        public string Name { get; set; } //Properties
        public int Calories { get; set; }
        public bool IsSpicy { get; set; }
        public bool IsSweet { get; set; }

        public Food(string name, int calories, bool spicy, bool sweet) //Constructor
        {
            Name = name;
            Calories = calories;
            IsSpicy = spicy;
            IsSweet = sweet;
        }


    }
}