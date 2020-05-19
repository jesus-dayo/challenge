function addTwoDigits(n: any): number {
    let sum = 0;
    while(n != 0){
        let num = n % 10;
        sum = sum + num;
        n = Math.floor(n/10);
    }
    return sum;
}

function addTwoDigits2(n: any): number {
    const nums = n.toString().split('');

    return nums.reduce((a: string, b: string) => {
        return parseInt(a) + parseInt(b);
    })
}

console.log(addTwoDigits2(29));
