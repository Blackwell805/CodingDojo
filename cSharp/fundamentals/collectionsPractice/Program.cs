using System;
using System.Collections.Generic;

namespace collectionsPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            foreach (int num in arr)
            {
                Console.WriteLine(num);
            }
            string[] names = new string[] { "Tim", "Martin", "Nikki", "Sara" };
            foreach (string name in names)
            {
                Console.WriteLine(name);
            }

            bool[] truthFalse = new bool[] { true, false, true, false, true, false, true, false, true, false };
            for (int i = 0; i < truthFalse.Length; i++)
            {
                Console.WriteLine(truthFalse[i]);
            }



            List<string> flavors = new List<string>();
            flavors.Add("Cookies and Cream");
            flavors.Add("Strawberry");
            flavors.Add("Chocolate");
            flavors.Add("Vanilla");
            flavors.Add("Moose Tracks");

            Console.WriteLine($"We have these {flavors.Count} available!");
            Console.WriteLine(flavors[2]);
            flavors.RemoveAt(2);
            Console.WriteLine($"We have these {flavors.Count} available!");

            Dictionary<string, string> customers = new Dictionary<string, string>();
            Random rand = new Random();
            foreach (string name in names)
            {
                customers.Add(name, flavors[rand.Next(0, 4)]);
            }
            // Read this as it is printed. A dictionary IS a key:value data type. When we create the loop, we declare it as a KeyValuePair, then within <> we denote the data type again. 
            foreach (KeyValuePair<string, string> customer in customers)
            {
                Console.WriteLine(customer.Key + " likes " + customer.Value);
            }

        }
    }
}

