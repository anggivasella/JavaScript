let myMap = new Map();

myMap.set('zero', 0);

myMap.set('one', 1);

for (let [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}
//to get the following output:
// zero = 0
// one = 1