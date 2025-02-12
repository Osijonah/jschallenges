const factorialCalc = ( number ) => {
    let factorial = 1;
    for ( count = number; count >= 1; count --) {
        factorial *= number;
        number--;
    }
    console.log(`challenge 7: ${factorial}`);
    
}

factorialCalc(5);
factorialCalc(-4);
factorialCalc(0);
factorialCalc(10);