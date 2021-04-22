using System;
using System.Collections.Generic;

namespace WizNinSam
{
    public class Ninja : Human
    {
        public Ninja(string input) : base(input)
        {
            Dexterity = 175;
        }

        public override int Attack(Human target)
        {
            Random rand = new Random();
            int chance = rand.Next(0, 6);
            int damage = (this.Dexterity * 5);
            if (chance == 0)
            {
                damage = (this.Dexterity * 5) + (10);
            }
            else
            {
                damage = (this.Dexterity * 5);
            }
            target.Health -= damage;
            Console.WriteLine($"{Name} has done {damage} damage to {target.Name}!");
            return target.Health;
        }

        public int Steal(Human target)
        {
            int SlightOfHand = ((target.Health - 5) + (this.Health + 5));
            Console.WriteLine($"{Name} dealt 5 damage and was healed 5 health!");
            return target.Health;
        }
    }
}