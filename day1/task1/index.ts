function identicalLetters(str1:string,str2:string):string{
    const result: string[] = [];
 
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            str1[i]===str2[j]&&!result.includes(str2[j])?result.push(str2[j]):null;
        }
    }
    
    return result.join('');;
}

console.log(identicalLetters("какойтотекст","другойтекст"));
