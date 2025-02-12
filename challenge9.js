const removeDuplicate = ( string ) => {
    let newString = ``,index=0,letter;
    for ( index; index < string.length; index++ ) {
        if ( !newString.includes(string[index]) ) {
            newString += string[index];
        }
    }
    console.log(`challenge 9: ${newString}`);
}

removeDuplicate('aabbbcccdeeeee');
removeDuplicate('ghiiikkkl');