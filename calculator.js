function add(input) {
  if (input === "") {
    return 0; // Return 0 for an empty string
  }

  const numbers = input.split(",").map(Number);
  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
