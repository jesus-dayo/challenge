function alphabetSubsequence(s: string): boolean {
    let prev = s.charCodeAt(0);
    for(let i = 1;i < s.length;i++){
        let newValue = s.charCodeAt(i);
        if(newValue <= prev){
            return false;
        }
        prev = newValue;
    }
    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
