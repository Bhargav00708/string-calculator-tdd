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
  const negatives = numbers.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }

  return numbers.reduce((sum, num) => {
    if (num <= 1000) return sum + num;
    return sum;
  }, 0);
}

module.exports = { add };
