function addBorder(picture: string[]): string[] {
    const asterisk: string = '*';
    const result: string[] = [];
    const strLength: number = picture[0].length + 2;
    picture.forEach((p,i)=>{
        let newStr = asterisk.concat().concat(p).concat(asterisk);
        result.push(newStr);
    });
    const frame = asterisk.repeat(strLength);
    result.unshift(frame)
    result.push(frame);
    return result;
}

console.log(addBorder(["abc", "ded"]));
