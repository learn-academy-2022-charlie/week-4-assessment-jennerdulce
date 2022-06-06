// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should remove the first item from the array and shuffles the remaining content
    // expect: Invoke the function "removeAndShuffle" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

    describe("removeAndShuffle Test Suite", () => {
        it("should remove the first item from the array and shuffles the remaining content", () => {
            const colors1 = ["purple", "blue", "green", "yellow", "pink"]
            const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
            const expected1 = ["blue", "green", "yellow", "pink"]
            const expected2 = ["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
            expect(removeAndShuffle(colors1)).toEqual(expect.arrayContaining(expected1))
            expect(removeAndShuffle(colors2)).toEqual(expect.arrayContaining(expected2))
        })
    })

// b) Create the function that makes the test pass.

// Create a function
    // Will name the function "removeAndSHuffle"
    // Has 1 parameter that will accept an array, will name this parameter arr
// Within the function
    // Use the .shift() method on the "arr" parameter to remove the front element within the array
    // Use the .sort() method on the "arr" parameter with the code that will alter the functionality of the .sort() method within the callback function
    // Return the "arr" parameter

const removeAndShuffle = (arr) => {
    arr.shift()
    return arr.sort((a, b) => 0.5 - Math.random());
  }
// I stumbled upon a solution on google utilizing the .sort() method that I have previously used to sort an array of ascending order. The same sort method can actually be used to shuffle an array by configuring the call back function that is passed in as an argument

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
// const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should return an array of the minimum and maximum numbers in that order
    // expect: Invoke the function "minAndMax" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

describe("minAndMax Test Suite", () => {
    it("should return an array of the minimum and maximum numbers in that order", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        const nums2 = [109, 5, 9, 67, 8, 24]
        expect(minAndMax(nums1)).toEqual([-8, 90])
        expect(minAndMax(nums2)).toEqual([5, 109])
    })
})


// b) Create the function that makes the test pass.

// Create a function
    // Will name the function "minAndMax"
    // Has 1 parameter that will accept an array, will name this parameter arr
// Within the function
    // Create a variable called minAndMax and assign it to an empty array to store the values of the minimum value and the maximum value based off the data of a given argument
    // Use the .sort() method on the parameter "arr" to sort the array passed in as an argument
    // After the array has been sorted by ascending order, Use the .push() method to push in the first value at index 0 of the sorted array, into the "minAndMax" array
    // Use the .push() method to push in the last value at index of the length of the parameter "arr" minus 1 of the sorted array, into the "minAndMax" array
    // Return "minAndMax", which contain the minimum and maximum values of the given array

const minAndMax = (arr) => {
    let minAndMax = []
    arr.sort(function(a, b) {
        return a - b;
      })
    minAndMax.push(arr[0])
    minAndMax.push(arr[arr.length - 1])
  return minAndMax
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// const testArray1 = [3, 7, 10, 5, 4, 3, 3]
// const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should return one array with no duplicate values
    // expect: Invoke the function "combindArrayNoDups" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

    describe("combindArrayNoDups Test Suite", () => {
        it("should return one array with no duplicate values", () => {
            const testArray1 = [3, 7, 10, 5, 4, 3, 3]
            const testArray2 = [7, 8, 2, 3, 1, 5, 4]
            expect(combindArrayNoDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
        })
    })


// b) Create the function that makes the test pass.

// Create a function
    // Will name the function "combindArrayNoDups"
    // Has 2 parameters that will accept 2 arrays, will name these parameters "arr1" and "arr2"
// Within the function
    // Create a variable named "combindArr" and assign it to the value of an empty array
    // Use the forEach method on both of the arrays
    // Use an if statement
        // If the "combindArr" array DOES NOT include the current iteration of the array, add this value to the "combindArr"
    // Return "combindArr"

const combindArrayNoDups = (arr1, arr2) => {
    let combindArr = []
    arr1.forEach(value => {
        if(!combindArr.includes(value)){
            combindArr.push(value)
        }
    })
    arr2.forEach(value => {
        if(!combindArr.includes(value)){
            combindArr.push(value)
        }
    })
    return combindArr
}
