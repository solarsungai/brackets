module.exports = function check(str, bracketsConfig) {

  const brackets = new Map(bracketsConfig);
  const stack = [];

  for (const item of str) {
    if (brackets.has(item)) {
      if (brackets.get(item) === item && stack.length > 0 && stack[stack.length - 1] === item) {
        stack.pop();
      } else {
        stack.push(item);
      }
    } else {
      const last = stack.pop();
      if (brackets.get(last) !== item) {
        return false;
      }
    }
  }
  return stack.length === 0;
}