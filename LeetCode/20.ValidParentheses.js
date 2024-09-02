function isValid(s) {
  // check if length is an odd number. if it is, return false
  // if there is an odd number, it means that at least one bracket is missing a pair
  if (s.length % 2 === 1) return false;

  // if the first element is a closing bracket, it doesn't matter what follows
  // it will never have a pair
  if (s[0] === ']' || s[0] === ')' || s[0] === '}') return false;

  // same goes for last element, we are just dealing with opening bracket
  if (
    s[s.length - 1] === '[' ||
    s[s.length - 1] === '(' ||
    s[s.length - 1] === '{'
  ) {
    return false;
  }

  let stack = [];

  // if the currentValue is an opening bracket we push to the stack
  // when the currentValue is a closing bracket we compare it to the stack to make sure there is a matching pair
  for (let i = 0; i < s.length; i++) {
    let currentValue = s[i];
    if (currentValue === '(' || currentValue === '[' || currentValue === '{') {
      stack.push(currentValue);
    } else {
      let previousValue = stack.pop();
      if (
        (currentValue === ')' && previousValue !== '(') ||
        (currentValue === ']' && previousValue !== '[') ||
        (currentValue === '}' && previousValue !== '{')
      ) {
        return false;
      }
    }
  }
  return !stack.length;
}
const s = '([)';

console.log(isValid(s));
