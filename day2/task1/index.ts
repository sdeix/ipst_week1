const countFilledValues = (obj: Record<string, unknown>):number => {

    let count = 0;

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            value !== null && value !== undefined && value !== ""?count++:null;
        }
    }

    return count;
}


const data = {
	name: "Alice",
	age: 25,
	address: "",
	phone: undefined,
	email: "[alice@example.com](<mailto:alice@example.com>)",
	notes: null,
};

console.log(countFilledValues(data))