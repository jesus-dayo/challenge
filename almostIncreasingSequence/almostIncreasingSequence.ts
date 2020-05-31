function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;
  let previous = 0;
  sequence.forEach((value,index)=>{
     if(count > 1){
         return false;
     }
     if(value < previous){
         count++;
     }else{
         previous = value;
     }
  });

  return count < 2;
}

console.log(almostIncreasingSequence([1, 3, 1, 1]))
console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2]))
