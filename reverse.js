var strs = 'hello how are you';
let reverse = '';
for (const str of strs) {
    reverse = str + reverse;
}
console.log(reverse);