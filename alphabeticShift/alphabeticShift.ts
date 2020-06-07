function alphabeticShift(inputString: string): string {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let splittedStr = inputString.split('');
    return splittedStr.map(v=>alphabet.indexOf(v)==alphabet.length-1?alphabet[0]:alphabet[alphabet.indexOf(v)+1]).join();
}

console.log(alphabeticShift('crazy'));
