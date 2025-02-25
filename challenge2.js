const twoLargestNumbers = ( array ) => {
    array.sort((a,b)=>a-b)
    console.log(array[array.length -1 ], array[array.length - 2 ]);
}

twoLargestNumbers([4, -2, 0, 20, 14, 6, 7, -4, 24, 10]);
twoLargestNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
