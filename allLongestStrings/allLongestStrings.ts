function allLongestStringsSol1(inputArray: string[]): string[] {
   let longestString : string[] = [];
   let longestLength : number = 0;
   inputArray.forEach((v) => {
      if(v.length > longestLength){
          longestLength = v.length;
          longestString = [v];
      }
      else if(v.length == longestLength){
          longestString.push(v);
      }
   });
   return longestString;
}

function allLongestStrings(inputArray: string[]): string[] {
    inputArray = inputArray.sort((x,y)=>x.length > y.length?-1:x.length == y.length?0:1);
    let longestString : string[] = [];
    let longestLength = inputArray[0].length;
    inputArray.every(v => v.length == longestLength?longestString.push(v):false);
    return longestString;
}

function measureTimeSol1(inputArray: string[]): string[] {
   console.time('Execution Time');
   let longestString = allLongestStringsSol1(inputArray);
   console.timeEnd('Execution Time');
   return longestString;
};
function measureTimeSol2(inputArray: string[]): string[] {
    console.time('Execution Time');
    let longestString = allLongestStrings(inputArray);
    console.timeEnd('Execution Time');
    return longestString;
};

console.log(measureTimeSol1(["aba", "aa", "ad", "vcd", "aba"]));
console.log(measureTimeSol2(["aba", "aa", "ad", "vcd", "aba"]));
