function indexOf(str: string, substring: string): number {

    for (let i = 0; i <= str.length - substring.length; i++) {

        let found = true;
        for (let j = 0; j < substring.length; j++) {
            if (str[i + j] !== substring[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i;
        }
    }

    return -1;
}

const str: string = "Lorem ipsum dolor sit amet";
const substring: string = "sit";
console.log(indexOf(str, substring)); 