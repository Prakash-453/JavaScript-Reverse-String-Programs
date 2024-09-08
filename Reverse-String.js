
To Reverse a String
1) Input: Hello    Output: olleh
2) Input: something Output: gnihtemos

PROGRAM:
let str = 'hello';
let rev_str = '';
for (i = str.length - 1; i >= 0; i--) {
    rev_str += str[i];
}
console.log(`Reversing of a input string ${str} is : ${rev_str}`);

OUTPUT: 
Reversing of a input string hello is: olleh

PROGRAM:
str = 'something';
rev_str = '';
for (i = str.length - 1; i >= 0; i--) {
    rev_str += str[i];
}
console.log(`Reversing of a input string ${str} is : ${rev_str}`);

OUTPUT: 
Reversing of a input string something is: gnihtemos

