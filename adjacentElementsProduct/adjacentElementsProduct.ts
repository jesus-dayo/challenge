function adjacentElementsProduct(inputArray: number[]): number {
    let product = 0;
    let i=0;
    while(i<inputArray.length){
        if(i % 2==0){
            let quotient = inputArray[i] * inputArray[i+1];
            product = quotient > product? quotient: product;
        }
        i = i+2;
    }
    return product;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
