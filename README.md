## Regular Expressions: Positive and Negative Lookahead
This repository contains a simple password checker program written in JavaScript using REGEX implementation. This problem is from [this freeCodeCamp chapter](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead).

*Lookaheads* are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: *positive lookahead* and *negative lookahead*.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as __(?=...)__ where the __...__ is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as __(?!...)__ where the __...__ is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.
```
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
```
A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
```
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```
I use lookaheads in the __pwRegex__ to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.

### License
All source code in this repository is available jointly under the MIT License and the Beerware License. See
[LICENSE](LICENSE) for details.

### How to use
Feel free to clone and code it by your self to learn more about JavaScript regex (regular expression).

```sh
git clone https://github.com/ridhanf/password-checker-js.git
```
That's it. Thank you.

&nbsp;

Sincerely,

Ridhan Fadhilah
