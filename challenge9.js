const removeDuplicate = ( string ) => {
    let newString = Array.from(new Set(string)).join('');
    
    console.log(newString);
}

removeDuplicate('aabbbcccdeeeee');
removeDuplicate('ghiiikkkl');