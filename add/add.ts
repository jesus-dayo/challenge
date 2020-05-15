function add(...params: number[]): number {
    return params.reduce((total,num)=>total+num);
}

 console.log(add(1, 2));
 console.log(add(3, 2));
 console.log(add(1,2,3,4,5));
 console.log(add(2,3));

