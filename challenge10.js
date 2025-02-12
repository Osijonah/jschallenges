const findCommonElements = ( arr1, arr2 ) => {
    let commonElements = [];
    for ( let index = 0; index < arr1.length; index++ ) {
        if ( arr2.includes(arr1[index]) ) {
            commonElements.push(arr1[index])
        }
    }
    console.log(`challenge 10: ${commonElements}`);
}

findCommonElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30], [10, 11, 12, 13, 14 ,30, 31, 32, 33, 34, 35, 36, 37, 38, 39]);

findCommonElements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]);

findCommonElements([1, 2, 3, 4, 5], [6, 7, 8]);

findCommonElements([1, 2, 3, 4, 5], []);

