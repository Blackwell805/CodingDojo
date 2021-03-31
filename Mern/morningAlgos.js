/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    
    Time Complexity
        - Best:     O(n) linear when array is already sorted
        - Average:  O(n^2) quadratic
        - Worst:    O(n^2) quadratic when the array is reverse sorted
    Space: O(1) constant
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted

    Pseudo Code
    1. Create a function
    2. Create a variable
    --create 2 variables?
    3. Create a for loop within the while loop.
    --maybe 2 for loops. i and j. 
    4. Do a comparison of the indecies. If one is smaller than the other, push it into a new array.
    5. Return new array
*/
// function bubbleSort(nums){
//     var array = nums[0]
//         for(var i=0; i<nums.length;i++){
//             for(var j=1; j<nums.length; j++)
//             if(nums[i] > nums[j]){
                
//             }
//             array.push(nums[i])
//         }
// }
// console.log(bubbleSort([4,7,2,3,8,9,1]))

/* 
    https://visualgo.net/en/sorting
        
    Selection sort works by iterating(FOR LOOP) through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
    - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.

        Tip from Kelly Le! 
        Question everything the instruction is saying and ask "how?", finding all the right puzzle pieces and putting them together.

        Pseudo Code
        1,
*/
// function selectionSort(nums){

// }



/*
    INSERTION SORT
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/
//this is incomplete
function insertionSort(nums){
    for(let i=0;i<nums.length;i++){
        let temp = nums[i];
        var left = i;
        while(left > 0 && temp < nums[left -1]) {
            nums[left] = nums[left -1];
            left = left -1;
        }
        num[left] = temp;
    }
    return nums
}
console.log(insertionSort([7,3,4,9,2,1]))




/* 
    MERGE SORT
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
    EXAMPLE: merge([1,4,5], [2,3,6]) will return [1,2,3,4,5,6]
*/
function merge(nums1, nums2){

}
/*
        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/
function mergeSort(/*what kind of parameters might we need here? */){

}

// Recursion sample: 
function sum(num){
    if(num === 1){ // this is our base case, because once num hits 1, we don't want to keep reducing it, as it doesn't add more information that's useful or accurate
        return 1;
    }

    return num + sum(num-1); // this is our recursive case, because it's where the function calls itself
}


/*
Efficiently combine two already sorted multiset arrays 
into an array containing the sorted set intersection of the two.
Output: only the shared values between the two arrays (deduped).
Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

EXAMPLE:
let nums1 = [1,4,5,7,7,8,9,9,10,12];
let nums2 = [2,3,3,6,7,9,9,9,11,13];

orderedIntersection(nums1, nums2) should return [7,9] because 7 and 9 are the only values
in both sets, and only appear once because we want the output to be the shared deduped values
*/
function orderedIntersection(nums1, nums2){

    const common = nums1.filter(x => nums2.indexOf(x) !== -1)
    console.log("The common elements are: " + common);

}
let array1 = [1,4,5,7,7,8,9,9,10,12];
let array2 = [2,3,3,6,7,9,9,9,11,13];
orderedIntersection(array1,array2)




/* 
    https://www.hackerrank.com/challenges/diagonal-difference/problem
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal
        - top right to bottom left diagonal
    
    EXAMPLE
    let nums = [
        [ 1, 2, 3 ],
        [ 5, 3, 2 ],
        [ 9, 7, 1 ]
    ]
    diagonalDifference(nums) should return 10, because (1 + 3 + 1) - (3 + 3 + 9)
    is 5 - 15, which is -10, whose absolute value is 10
*/
function diagonalDifference(matrix){
    
}

/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE
    let nums1 = [1, 3, 3, 4, 5, 5, 5 ];
    let nums2 = [2, 3, 5, 6, 6, 7, 9 ];

    orderedMultisetUnion(sortedA, sortedB) should return:
    [1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 9]
*/
function orderedMultisetUnion(sortedA, sortedB){
    
}


/**
     * From an interview on 2/8/21. encodeStr algo was also given:
     *  https://github.com/TheCodingDojo/algorithms/blob/main/strings/encodeStr.js
     *
     * The interviewee mentioned it was mostly a comprehension style question.
     *
     * It ain't much, but it's honest work. A worker who measures water level
     * fluctuations in a river is asked to find the largest fluctuation in water
     * levels during a day, but only for rises in water levels.
     * 
     * Write a function that takes an array of numbers, representing water levels at 
     * different times throughout the day, and return the largest rise in water level
     * measured that day, but ONLY rises
     * 
     * EXAMPLE:
     * let nums = [15, 17, 30, 14, 5, 16, 25, 9, 3]
     * 
     * largestFluctuation(nums) should return 20, because the highest rise in the water level
     * is from 5 to 25 feet
 */
 function largestFluctuation(levels){

}

/*
    Given two arrays of ints
    return the symmetric differences, (aka disjunctive union)
        - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
        think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
        - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
    Venn Diagram Visualization:
        - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
    EXAMPLE:
    let arrA = [4,1,2,3,4];
    let arrB = [1,2,3,5,5,2];

    symmetricDifference(arrA, arrB) should return [4, 5] because 4 and 5 are the values that are only in 1 
    array each, and only appear in the result once, even though they have duplicates in their original arrays
*/
function symmetricDifference(nums1, nums2){

}


/* 
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.
    
    EXAMPLE:
    let arr = [1,3,4,5,6,8,9,11];

    allNonConsecutive(arr) should return:
    [
        { i: 1, n: 3 },
        { i: 5, n: 8 },
        { i: 7, n: 11 }
    ]
*/
function allNonConsecutive(sortedNums){
    var returnArr = []; 
    for(let i = 1; i < sortedNums.length; i++){
      //if the current value - 1 is equal to the previous value
      if((sortedNums[i] - 1) !== sortedNums[i-1]){
        // put the index and the value into our return array
        const newObj = {
          i : i,
          n : sortedNums[i]
        };
        console.log(newObj);
        // do something with the newObj we created:
        returnArr.push(newObj);
      }
    }
    return returnArr;
  }
  
  let arr = [1,3,4,5,6,8,9,11];
  console.log(allNonConsecutive(arr));
  console.log("###########################");
  console.log("");
  /* 
      You are given a list of integers. Find all the consecutive sets of 
      integers that adds up to the sum passed in as one of the inputs.
  
      EXAMPLE:
      let arr = [2, 5, 3, 6, 7, 23, 12];
      let targetSum = 16;
  
      findConsqSums(arr, targetSum) should return:
      [
          [2, 5, 3, 6],
          [3, 6, 7]
      ] 
  */
  
  function findConsqSums(nums, sum){
    var newArray2 = []
    var sumTarget = 0
    var currentArray = [];
    for(let i=0;i<nums.length;i++){
      for(let j=0; j < nums.length;j++){
        // add the current value to the next values until it's more than sum
        sumTarget+=nums[j]
        currentArray.push(nums[j])
        if(sumTarget === 16){
          newArray2.push(currentArray);
          // console.log(newArray2 + " is the return array");
          currentArray = [];
          sumTarget = 0;
          j = nums.length;
        }
        if(sumTarget > 16){
          newArray = [];
          j = nums.length;
          sumTarget = 0;
        }
      }
    }
    return newArray2;
  }
  
  let arr2 = [2, 5, 3, 6, 7, 23, 12];
  let targetSum = 16;
  
  console.log(findConsqSums(arr2))




  /*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Bonus: Make it O(n) time

    EXAMPLE:
    let arr = [2, 11, 7, 15];
    let target = 9;

    twoSum(arr, target) should return [0, 2] (or [2,0], the order of the output is irrelevant) because 
    nums[0] + nums[2] => 2 + 7 = 9, which is our target
*/
function twoSum(nums, targetSum){
    var sum = 0;
    for( var i=0;i<nums.length;i++){
        sum = nums[i] + nums[i+1]
        console.log(nums[i], nums[i+1])
        if(sum == targetSum){
            return sum
        }
    }
    var otherSum = 0;
    for(var j=1;nums.length;j++){
        sum = nums[j] + nums[j + 1]
        console.log(nums[j], nums[j+1])
        if(otherSum == targetSum)
        return otherSum
    }
}
console.log(twoSum([2,11,7,15], 9))



/* 
    Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
    You can assume there is always a valid solution
    These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
    Hard Bonus: make it O(n) time

    EXAMPLE:
    let arr1 = [0,0,0,2,2,3];
    let k1 = 1;

    kMostFrequent(arr1,k1) should return [0]

    let arr2 = [1,1,1,2,2,3];
    let k2 = 2

    kMostFrequent(arr2, k2) should return [1, 2]
*/
function kMostFrequent(nums, k){

}


* 
    Recreate Object.entries method
    Given an object, return an array of arrays of the object's key value pairs, 
    where each key value pair is a 2 item array
    Do not include key value pairs from the given objects prototype (these are included 
    by default when looping over an object's keys)
*/

// Object.entries() demonstration
const myObj = {
    fName: "Cody",
    lName: "Thaller",
    age: 30
}

console.log(Object.entries(myObj));
// returns:
// [ [ 'fName', 'Cody' ], [ 'lName', 'Thaller' ], [ 'age', 30 ] ]

function entries(obj){

}



/* 
    Given a table name string and an object whose key value pairs represent column names and values for the columns
    return a SQL insert statement string
    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables 
    into a string or to add quotations without needing to escape them.
    Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods

    SQL INSERT STATEMENT
    INSERT INTO table_name (column_1_name, column_2_name, column_3_name) VALUES (column_1_value, column_2_value, column_3_value);

    NOTE: in the VALUES section, those values should be data-type appropriate. Datatypes that should be strings include:
        - char
        - varchar
        - text
        - binary
        - dates
        - timestamps

    Technically, there is no such thing as boolean in SQL. It's TinyINT, which is 0 or 1

    EXAMPLE: 
    const table = "users";
    const insertData = { first_name: "John", last_name: "Doe", age: 25 };

    insert(table, insertData) should return:
    "INSERT INTO users (first_name, last_name, age) VALUES ('John', 'Doe', 25);"

    NOTE THE LACK OF QUOTES IN THE COLUMN NAMES AND THE APPROPRIATE COMMA PLACEMENT
*/
function insert(tableName, columnValuePairs) {

}

/* 
    Given a search criteria object whose values will only be
    primitives (ints, strings, booleans) and a list of objects.
    return any object that matches all the key value pairs in the search
    criteria object.
    Bonus: write a 2nd solution using built-in methods to practice functional
    programming.

    EXAMPLE:
    const search = {
        power_1: "Money",
        power_2: "Brooding"
    }

    const heroes = [
        {
            fName: "Clark",
            lName: "Kent",
            alias: "Superman",
            power_1: "Super strength",
            power_2: "Flight"
        },
        {
            fName: "Bruce",
            lName: "Wayne",
            alias: "Batman",
            power_1: "Money",
            power_2: "Brooding"
        },
        {
            fName: "Oliver",
            lName: "Queen",
            alias: "Green Arrow",
            power_1: "Money",
            power_2: "Bow and Arrow"
        },
        {
            fName: "Ryan",
            lName: "Choi",
            alias: "Atom",
            power_1: "Size alteration",
            power_2: "Intelligence"
        }
    ]

    find(search, heroes) should return:
    [
        {
            fName: "Bruce",
            lName: "Wayne",
            alias: "Batman",
            power_1: "Money",
            power_2: "Brooding"
        }
    ]

    even though there is only 1 match, it should still be in an array.

*/
function find(criteria, collection){

}


/* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found

    EXAMPLE:
    const students = [
        {
            id: 1,
            name: "student1",
            isLateToday: false,
            lateCount: 15,
            redBeltStatus: false,
        },
        {
            id: 2,
            name: "student2",
            isLateToday: false,
            lateCount: 1,
            redBeltStatus: false,
        },
        {
            id: 3,
            name: "student3",
            isLateToday: false,
            lateCount: 0,
            redBeltStatus: false,
        },
    ];
    const id1 = 3;
    const updateData1 = { redBeltStatus: true, isLateToday: true };

    findByIdAndUpdate(id1, updateData1, students) should return:
    {
        id: 3,
        name: "student3",
        isLateToday: true,
        lateCount: 0,
        redBeltStatus: true,
    }
*/
function findByIdAndUpdate(id, updateVals, collection) {

}



/* 
    Given an array of objects, a searchFor string, and searchBy key that exists in the object
    return a new array of only those objects whose value for the given key starts with the given search string
    You can assume the key will exist on the object and the value of that key will be a string
    Bonus: make the search case insensitive
    Bonus: re-write it with functional programming in mind, using built in methods
    Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
        - you can assume the searchMethod will be valid
    
    EXAMPLE:
    const coll = [
        {
            fName: "Bill",
            lName: "Bob"
        },
        {
            fName: "Mary",
            lName: "Smith"
        },
        {
            fName: "Joey",
            lName: "Smony"
        }
    ]

    let search = "Sm";
    let searchBy = "lName"

    filterByKey(coll, search, searchBy) should return
    [
        {
            fName: "Mary",
            lName: "Smith"
        },
        {
            fName: "Joey",
            lName: "Smony"
        }
    ]
*/
const coll = [
    {
        fName: "Bill",
        lName: "Bob"
    },
    {
        fName: "Mary",
        lName: "Smith"
    },
    {
        fName: "Joey",
        lName: "Smony"
    }
]


function filterByKey(collection, searchFor, searchBy){
    return collection.filter(name => String(name[searchBy].toLowerCase()).startsWith(searchFor.toLowerCase()))
}
let search = "Sm";
let searchBy = "lName"
let method = 'startsWith';

console.log(filterByKey(coll, search, searchBy, method))



/* 
    Optional chaining is a newer syntax that can help with this problem in general (not necessarily intended to be used here): 
        https://levelup.gitconnected.com/new-javascript-features-in-2019-optional-chaining-null-coalescing-a7fd38f4ef2d
    The more you deal with objects, especially ones with many nested objects, where you
    are chaining dot notation to access nested values, the more you run into these errors:
        Uncaught TypeError: Cannot read property 'keyName' of undefined
        Uncaught TypeError: Cannot read property 'keyName' of null
    
    These errors mean, somewhere along your chain of dots, one of the keys did not exist
    on the object so it returned undefined, and then the next dot was trying to access
    a key on undefined, or the key did exist but null was it's value.
    One example of how this might happen is getting JSON data back from an API. Sometimes, 
    the record you requested has more data so there are more levels of nesting, which you get used to,
    so you write your code to access the nested data but then you request a different record, and
    less data is available, so your code breaks when trying to access nested data that isn't there.
    There is an entire library dedicated to solving this problem, the solution is referred to as a "lens",
    you look through a "lens" to help you see into an object and safely attempt to access a nested value.
    Without a lens, you would need to interrupt your dot chaining and check the value after each dot,
    one at a time, to make sure it is not undefined or null before going to the next dot.
*/
/* 
    Input:
        Object,
        Array of strings representing a path of keys in the Object
    Output:
        - Value from traversing the object to the last key
        - null if at any point accessing a key returns undefined
        - this means a key was not found / the Object was not nested as deep as the path of keys goes
        - the given object if array of keys is empty

    EXAMPLE:
    const user = {
        id: 101,
        email: "jack@dev.com",
        personalInfo: {
            name: "Jack",
            address: {
                line1: "westwish st",
                line2: "washmasher",
                city: "wallas",
                state: "WX",
            },
        },
        favorites: {
            number: 0
        }
    };

    const keys1 = ["personalInfo", "address", "city"];
    const keys2 = ["personalInfo", "address", "country"];

    lens(user, keys1) should return "wallas", because user.personalInfo.address.city is "wallas"

    and lens(user, keys2) should return null, because there is no key called country inside of user.PersonalInfo.address
};
*/

    function lens(obj, keys){
        if(keys.length == 0){
            return obj;
        }
        var currentKey = keys[0];
        var currentObj = obj;
        for(let i = 1; i < keys.length; i++){
            if(currentObj[currentKey] == undefined){
                return null;
            } else {
                currentObj = currentObj[currentKey];
                currentKey = keys[i];
            }
        }
        if(currentObj[currentKey] == undefined){
            return null;
        }
        return currentObj[currentKey];
    }

/* 
    Create a function to determine the max amount of
    servings that can be made based on a recipe and
    available ingredients.
    Input:
        - recipe object where keys are ingredient names
        and values are unit required (int)
        - available ingredients object where keys are ingredient
        names and values are unit available (int)
    Output:
        int (max servings)
    Side note (not needed for solution): Realistically, the values
    would be an object as well with the keys: unit (unit of measure), and amount.
    If the avaialable ingredient was stored in a different unit,
    a conversion table would be needed to convert units of measure.

    EXAMPLE:
    const recipe1 = {
        "organic fat": 99,
        "live squid": 1,
        "birds nest": 1,
        "fried flesh": 1,
        "spicy": 5,
        "gourmet memes": 4200,
    };
    const available1 = {
        "organic fat": 990,
        "live squid": 1,
        "birds nest": 10,
        "fried flesh": 10,
        "spicy": 50,
        "gourmet memes": 42000,
        "sugar": 9001,
        "spice": 5,
        "everything nice": 1,
        "triple point water": 5,
    };

    getMaxServings(recipe1, available1) should return 1, because the limiting ingredient is live squid, and there is only 1 available.
*/
function getMaxServings(recipe, available){
    
}

function getMaxServings(recipe, available){
    let max = [];
    for(key in recipe){
        max.push(Math.floor(available[key]/recipe[key]));
    }
    let min = max[0]
    for(let i = 0; i < max.length; i++){
        if(max[i] < min){
            min = max[i];
        }
    }
    return min;
}



/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true

    EXAMPLE:
    const nums = [1, 4, 3, 6, 9, 15];

    const callback1 = (elem) => {
        return elem > 5;
    };

    dropIt(nums, callback1) should return [6,9,15] because 6, 9, and 15 are the elements that,
    when passed into callback1, will result in the function returning true.
*/
function dropIt(arr, callback){

}

/* 
    Given to Neil in an interview
    Given a string
    return whether or not it's possible to make a palindrome out of the string's characters
    What is it about a string that makes it possible for it to be a palindrome?

    Palindrome - a word/phrase that is spelled the same way forwards and backwards

    EXAMPLE:
    const str1 = "dda";

    const str2 = "aaadd";

    const str3 = "acdd";

    canStringBecomePalindrome(str1) should return true, because "dda" can be rearranged as "dad", 
    which is the same forwards and backwards.

    canStringBecomePalindrome(str2) should return true, because "aaadd" can be rearranged as "daaad"
    or "adada", which are both the same forwards and backwards.

    canStringBecomePalindrome(str3) should return false, because "acdd" cannot be rearranged in any
    way that would make it the same forwards and backwards
*/
function canStringBecomePalindrome(string){
    var len = string.length;
    for(var i=0; i<len/2; i++){
        if(string[i] !== string[len -1 -i]){
            return "not a palindrome"
        }
    }
    return "It's a palindrome"
}

const str1 = "dda";

const str2 = "aaadd";

const str3 = "acdd";
console.log(canStringBecomePalindrome(str1))