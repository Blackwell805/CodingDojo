using System;
using System.Collections.Generic;

namespace basic13CSharp
{
    class Program
    {
        public static void PrintNumbers()
        {
            //1. Print all of the integers from 1 to 255.
            for (int i = 1; i <= 255; i++)
            {
                Console.WriteLine(i);
            }
        }
        public static void PrintOdds()
        {
            //2. Print all of the odd integers from 1 to 255.
            for (int i = 1; i <= 255; i++)
            {
                if (i % 3 == 0)
                {
                    Console.WriteLine(i);
                }
            }
        }
        public static void PrintSum()
        {
            //3. Print all of the numbers from 0 to 255, 
            // but this time, also print the sum as you go. 
            // For example, your output should be something like this:

            // New number: 0 Sum: 0
            // New number: 1 Sum: 1
            // New Number: 2 Sum: 3
            int sum = 0;
            for (int i = 0; i <= 255; i++)
            {
                sum += i;
                Console.WriteLine("New number:" + i + " Sum:" + sum);
            }
        }

        public static void LoopArray(int[] numbers)
        {
            //4. Write a function that would iterate through each item of the given integer array and 
            // print each value to the console. 
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.WriteLine(numbers[i]);
            }
        }
        public static int FindMax(int[] numbers)
        {
            //5. Write a function that takes an integer array and prints and returns the maximum value in the array. 
            // Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), 
            // or even a mix of positive numbers, negative numbers and zero.
            int max = numbers[0];
            for (int i = 1; i < numbers.Length; i++)
            {
                if (numbers[i] > max)
                {
                    max = numbers[i];
                }
            }
            Console.WriteLine(max);
            return max;
        }
        public static void GetAverage(int[] numbers)
        {
            //6. Write a function that takes an integer array and prints the AVERAGE of the values in the array.
            // For example, with an array [2, 10, 3], your program should write 5 to the console.   
            int average = 0;
            int sum = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                sum += numbers[i];
                average = sum / numbers.Length;
            }

            Console.WriteLine(average);
        }
        public static int[] OddArray()
        {
            //7. Write a function that creates, and then returns, an array that contains all the odd numbers between 1 to 255. 
            // When the program is done, this array should have the values of [1, 3, 5, 7, ... 255].
            List<int> myList = new List<int>();
            for (int i = 1; i < 255; i += 2)
            {
                myList.Add(i);
            }
            return myList.ToArray();
        }

        public static int GreaterThanY(int[] numbers, int y)
        {
            //8. Write a function that takes an integer array, and a integer "y" and returns the number of array values 
            // That are greater than the "y" value. 
            // For example, if array = [1, 3, 5, 7] and y = 3. Your function should return 2 
            // (since there are two values in the array that are greater than 3).
            int Count = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] > y)
                {
                    Count++;
                }
            }
            return Count;
        }

        public static void SquareArrayValues(int[] numbers)
        {
            //9. Write a function that takes an integer array "numbers", and then multiplies each value by itself.
            // For example, [1,5,10,-10] should become [1,25,100,100]
            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] = numbers[i] * numbers[i];
            }
        }

        public static void EliminateNegatives(int[] numbers)
        {
            //10. Given an integer array "numbers", say [1, 5, 10, -2], create a function that replaces any negative number with the value of 0. 
            // When the program is done, "numbers" should have no negative values, say [1, 5, 10, 0].
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] < 0)
                {
                    numbers[i] = numbers[i] * -1;
                }
            }
        }

        public static void MinMaxAverage(int[] numbers)
        {
            //11. Given an integer array, say [1, 5, 10, -2], create a function that prints the maximum number in the array, 
            // the minimum value in the array, and the average of the values in the array.
            int max = numbers[0];
            int min = numbers[0];
            int sum = 0;
            int average = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] > max)
                {
                    max = numbers[i];
                }
                if (numbers[i] < min)
                {
                    min = numbers[i];
                }
                sum += numbers[i];
                average = sum / numbers.Length;
            }
        }

        public static void ShiftValues(int[] numbers)
        {
            // Given an integer array, say [1, 5, 10, 7, -2], 
            // Write a function that shifts each number by one to the front and adds '0' to the end. 
            // For example, when the program is done, if the array [1, 5, 10, 7, -2] is passed to the function, 
            // it should become [5, 10, 7, -2, 0].
            for (int i = 1; i < numbers.Length; i++)
            {
                numbers[i - 1] = numbers[i];
            }
            numbers[numbers.Length - 1] = 0;
        }

        public static object[] NumToString(int[] numbers)
        {
            // Write a function that takes an integer array and returns an object array 
            // that replaces any negative number with the string 'Dojo'.
            // For example, if array "numbers" is initially [-1, -3, 2] 
            // your function should return an array with values ['Dojo', 'Dojo', 2].
            // string Dojo = "Dojo";
            object[] newArray = new object[numbers.Length];
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] < 0)
                {
                    newArray[i] = "Dojo";
                }
                else
                {
                    newArray[i] = numbers[i];
                }
            }
            return newArray;
        }


        static void Main(string[] args)
        {
            // PrintNumbers();
            // PrintOdds();
            // PrintSum();
            // int[] myArray = { 1, 2, 3, 4, 5 };
            // LoopArray(myArray);
            // int[] newArray = { 1, 20, 34, 2, 4 };
            // FindMax(newArray);
            // int[] array = { 2, 10, 3 };
            // GetAverage(array);
            // OddArray();
            // int[] array1 = { 1, 3, 5, 7 };
            // int y = 3;
            // GreaterThanY(array1, y);
            // int[] arrayNum = { 1, 2, 3, 4, 5 };
            // SquareArrayValues(arrayNum);
            // int[] arrayNeg = { -1, -2, -3, -4, -5 };
            // EliminateNegatives(arrayNeg);
            // int[] maxMinArray = { 1, 2, 3, 4, 5 };
            // MinMaxAverage(maxMinArray);
            // int[] shiftArray = { 1, 2, 3, 4, 5 };
            // ShiftValues(shiftArray); 
            // int[] numStringArray = { 1, -2, 3, -4, 5 };
            // NumToString(numStringArray);

        }
    }
}
