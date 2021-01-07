/*
Regular Expressions: Positive and Negative Lookahead

Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, 
do not begin with numbers, and have two consecutive digits.
*/

const passwordChecker = (password) => {
  let pwRegex = /(?=^\D{1})(?=\w*\d{2})/; // password regex
  return pwRegex.test(password) ? 'Password valid' : 'Password not valid';
}

console.log(passwordChecker('abc123'));
