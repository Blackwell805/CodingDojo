using System;
using System.Collections.Generic;

namespace WizNinSam
{
    public class Human
    {
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health;
        public int Health
        {
            get { return health; }
            set { health = value; }
        }

        public Human(string input)
        {
            Name = input;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }

        public Human(string input, int str, int intel, int dex, int life)
        {
            {
                Name = input;
                Strength = str;
                Intelligence = intel;
                Dexterity = dex;
                health = life;
            }
        }

        public virtual int Attack(Human target)
        {
            int damage = Strength * 5;
            target.health -= damage;
            Console.WriteLine($"{Name} has done {damage} damage to {target.Name}!");
            return target.health;
        }
    }
}