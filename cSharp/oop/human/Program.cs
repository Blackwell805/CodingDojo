using System;

namespace human
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Human Human1 = new Human("Mikey");
            Human Human2 = new Human("Bozo");

            Human1.Attack(Human2);
            Console.WriteLine(Human2.Health);
        }
    }
}
