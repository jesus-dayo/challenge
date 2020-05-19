function addTwoDigits(n: any): number {
    let sum = 0;
    while(n != 0){
        let num = n % 10;
        sum = sum + num;
        n = Math.floor(n/10);
    }
    return sum;
}

console.log(addTwoDigits(29));
