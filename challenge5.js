const reverseString = ( string ) => {
    let newString = ``;
    let cleanString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, ``);
    for ( let letter of cleanString ) {
        newString = letter + cleanString;
    }
    console.log(`challenge 5: ${newString}`);
    
}

reverseString("@#%$&");
reverseString("B@r$ 1s th3 b3$t");
reverseString('welcome to the jungle');
reverseString("Hello, I’m Jappy-Lappy-Happy");
