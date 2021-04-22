using System;
using System.Collections.Generic;

namespace WizNinSam
{
    public class Wizard : Human
    {
        public Wizard(string input) : base(input)
        {
            Intelligence = 25;
            Health = 50;
        }

        public override int Attack(Human target)
        {
            int damage = (this.Intelligence * 5) + (this.Health + (this.Intelligence * 5));

            target.Health -= damage;
            Console.WriteLine($"{Name} has done {damage} damage to {target.Name}!");
            return target.Health;
        }

        public int Heal(Human target)
        {
            int minorHeal = (10 * this.Intelligence);
            target.Health += minorHeal;
            Console.WriteLine($"{Name} healed {target.Name} for {minorHeal} health!");
            return target.Health;
        }
    }
}