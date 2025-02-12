const twoLargestNumbers = ( array ) => {
    let largestNumber1 = 0, largestNumber2 = 0;
    for ( let number of array ) {
        if ( number > largestNumber1 ) {
            largestNumber1 = number;
        }
        for ( number of array ) {
        if ( largestNumber2 < number && number < largestNumber1 ) {
            largestNumber2 = number;
        }
    }
    
    }
    console.log(`challenge 2: ${largestNumber1}, ${largestNumber2}`);
    
}

twoLargestNumbers([4, -2, 0, 20, 14, 6, 7, -4, 24, 10]);
twoLargestNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
