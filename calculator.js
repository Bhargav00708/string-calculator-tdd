function add(input) {
  if (input === "") {
    return 0; // Return 0 for an empty string
  }

  let delimiter = /[\n,]/;
  if (input.startsWith("//")) {
    const parts = input.split("\n");
    delimiter = new RegExp(`[${parts[0].slice(2)}]`);
    input = parts[1];
  }

  const numbers = input.split(delimiter).map(Number);

  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
