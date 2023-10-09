let obj = {};
let array = [];
function operation(...args) {
    array.push(...args);
    array.map( element =>{
        if (obj[element]) {
            obj[element] += 1;
        } else {
            obj[element] = 1;
        }
    });
    return obj;
}
console.log(operation(1,2,2,3,3,5,5,5,5,4,6,5,9));

