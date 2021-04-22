using System;
using System.Collections.Generic;

namespace WizNinSam
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Human firstHuman = new Human("Austin");
            Console.WriteLine($"{firstHuman.Name} has {firstHuman.Strength} strength, {firstHuman.Intelligence} intelligence, {firstHuman.Dexterity} dexterity, and {firstHuman.Health} health.");

            Human secondHuman = new Human("Adam", 4, 12, 9, 420);
            Console.WriteLine($"{secondHuman.Name} has {secondHuman.Strength} strength, {secondHuman.Intelligence} intelligence, {secondHuman.Dexterity} dexterity, and {secondHuman.Health} health.");

            firstHuman.Attack(secondHuman);
            Console.WriteLine(secondHuman.Health);
        }
    }
}
