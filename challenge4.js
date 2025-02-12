const primeNumber1_100 = () => {
    let primeNumbers = '';
    for ( num = 0; num <= 100; num++) {
        if ( num === 2 || num === 3 || num === 5 || num === 7 || num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0 ) {
            primeNumbers += `${num}, `;
          
        }
    }
    let newstr = primeNumbers.slice(0, primeNumbers.length - 2);
          console.log(`challenge 4: ${newstr}`);
    
} 
primeNumber1_100();