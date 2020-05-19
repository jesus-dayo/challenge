function adjacentElementsProduct(inputArray: number[]): number {
    let product = 0;
    for(let i =0; i+1<inputArray.length;i++){
        let quotient = inputArray[i] * inputArray[i+1];
        product = quotient > product? quotient: product;
    }
    return product;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
