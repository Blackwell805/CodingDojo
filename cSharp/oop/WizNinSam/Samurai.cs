using System;
using System.Collections.Generic;

namespace WizNinSam
{
    public class Samurai : Human
    {
        public Samurai(string input, int fullHealth) : base(input)
        {
            fullHealth = Health;
            Health = 200;
        }

        public override int Attack(Human target)
        {
            int damage = this.Strength * 5;
            target.Health -= damage;
            if (target.Health < 50)
            {
                target.Health = 0;
            }
            Console.WriteLine($"{Name} has done {damage} damage to {target.Name}!");
            return target.Health;
        }

        public int Meditate()
        {
            int fullHealth = Health;
            int dif = (fullHealth - Health);
            Health = fullHealth;
            Console.WriteLine($"{Name} healed {dif} from meditating!");
            return Health;
        }
    }
}