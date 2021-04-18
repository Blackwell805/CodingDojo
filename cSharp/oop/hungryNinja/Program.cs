using System;
using System.Collections.Generic;

namespace hungryNinja
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Ninja Bob = new Ninja(); //It's here where we create our new instance of a Ninja. 
            Buffet McDonalds = new Buffet(); //We also instantiate a new buffet.

            while (!Bob.IsFull()) //While Bob is NOT full...
            {
                Bob.Eat(McDonalds.Serve()); //Eat is a function inside of the Ninja Model. What is being eatten? We input our buffet name. Serve is a function inside of Buffet. 
            }
        }
    }
}
