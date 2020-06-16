//Write a JavaScript function that accepts an array of numbers and return the number which has the smallest occurrence among the array elements
// input [ 2, 4, 3, 4, 3, 8, 8] - > output "2"
// input [ 2, 4, 3, 4, 3, 2, 8] - > outtput "8"
function getLeastOccurrenceNumber(arr) {
    //For loop that count the appearance of every number in the array
    const frequencyCounter = {}
    for (let val of arr) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }
    //Convert the object into array
    const countedArray = Object.entries(frequencyCounter)
    //Sort the counted array from the least to the most appearance number
    countedArray.sort(function(a, b) {
        return a[1] - b[1];
    })
    //Return the least occurance number
    return countedArray[0][0]
}
console.log(getLeastOccurrenceNumber([2, 4, 3, 4, 3, 8, 8]))
