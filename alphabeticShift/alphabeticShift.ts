function alphabeticShift(inputString: string): string {
    const alphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let splittedStr: string[] = inputString.split('');
    return splittedStr.map(v=>alphabet.indexOf(v)==alphabet.length-1?alphabet[0]:alphabet[alphabet.indexOf(v)+1]).join();
}

console.log(alphabeticShift('crazy'));
