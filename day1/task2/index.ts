function longestWord(str:string,):string{
    
    let longest:string = '';
    const words:string[]=str.split(' ');
    
    words.forEach(word=>{
        longest=word.length>longest.length?word:longest;
    })
    return longest;
}

console.log(longestWord("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae felis id ipsum faucibus sollicitudin. Vivamus sit amet nulla nisl. Sed tincidunt eleifend velit"));
