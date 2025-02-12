const vowelCounter = ( string ) => {

    let vowelCounter = 0;
    for ( let letter of string ) {
        if ( letter === `a` || letter === `e` || letter === `i` || letter === `o` || letter === `u` ) {
            vowelCounter += 1;
        }
    }
    console.log(`challenge 1: ${vowelCounter}`);
}

vowelCounter(`bcdfghjklmnpqrstvwxyz`);
vowelCounter(`Hello World`);
vowelCounter(`aeiou`);
vowelCounter(`The quick brown fox jumps over the lazy dog`);
