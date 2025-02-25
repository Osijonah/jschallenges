const vowelCounter = ( string ) => {
    let vowelCounter = 0;
    let vowels = ['a','e','i','o','u'];
    for ( let letter of string ) {
        if (vowels.includes(letter)) vowelCounter++
    }
    console.log(vowelCounter);
}

vowelCounter(`bcdfghjklmnpqrstvwxyz`);
vowelCounter(`Hello World`);
vowelCounter(`aeiou`);
vowelCounter(`The quick brown fox jumps over the lazy dog`);
