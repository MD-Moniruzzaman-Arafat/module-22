var numbers = [5, 4, 6, 9, 7, 3, 8, 6, 7, 9, 5];
function removeDuplicate(n) {
    let uniq = [];
    for (const number of n) {
        if (uniq.indexOf(number) == -1) {
            uniq.push(number);
        }
    }
    return uniq;
}
const result = removeDuplicate(numbers);
console.log(result);
