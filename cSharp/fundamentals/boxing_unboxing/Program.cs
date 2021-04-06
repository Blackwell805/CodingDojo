using System;
using System.Collections.Generic;

namespace boxing_unboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> random = new List<object>();
            random.Add(7);
            random.Add(28);
            random.Add(-1);
            random.Add(true);
            random.Add("chair");

            foreach (object thing in random)
            {
                Console.WriteLine(thing);
            }

            int sum = 0;
            for (int i = 0; i < random.Count; i++)
            {
                if (random[i] is int)
                {
                    sum += (int)random[i];
                }
            }
            Console.WriteLine(sum);
        }
    }
}
