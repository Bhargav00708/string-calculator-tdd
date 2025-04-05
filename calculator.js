function add(input) {
  if (input === "") {
    return 0; // Return 0 for an empty string
  }

  const numbers = input
    .split(/[\n,]/) // Regex to split on both comma and newline
    .map(Number);

  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
