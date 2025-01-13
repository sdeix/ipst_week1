function runLengthEncoding(str: string): string {

    let count:number=1;
    const result:string[]=[];

    for (let i = 1; i <= str.length; i++) {
        if(str[i]===str[i-1]){
            count+=1
        }
        else{
            result.push(count+str[i-1]);
            count= 1;
        }

    }

    return result.join('');
}

let codingstr:string=(runLengthEncoding("qqqqwwwrrrrqwee111фqw"))
console.log(codingstr); 



function runLengthDecoding(str: string): string {

    const result:string[]=[];

    for (let i = 0; i <= str.length; i+=2) {
            if (str[i+1] !== undefined) {
            result.push(str[i+1].repeat(Number(str[i])));
            }
    }
    
    return result.join('');
}

console.log(runLengthDecoding(codingstr)); 