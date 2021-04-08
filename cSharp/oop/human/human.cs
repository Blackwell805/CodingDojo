using System;

namespace human
{
    class Human
    {
        // Fields for Human
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health; // this is a set value that we don't want other classes to change it. 
        public int Health // this is how we get the number to display despite being "private".
        {
            get { return health; } // makes the health value avaliable.
        }

        // add a public "getter" property to access health

        // Add a constructor that takes a value to set Name, and set the remaining fields to default values

        public Human(string name)//the value will match up to the attribute inside the function.
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }

        // Add a constructor to assign custom values to all fields
        public Human(string name, int strength, int intelligence, int dexterity, int Health)
        {
            Name = name;
            Strength = strength;
            Intelligence = intelligence;
            Dexterity = dexterity;
            health = Health;
        }
        // Build Attack method
        public int Attack(Human target)
        {
            int damage = Strength * 5;
            target.health = target.health - damage;
            return target.health;
        }
    }
}