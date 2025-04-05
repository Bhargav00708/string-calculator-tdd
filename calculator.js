function add(input) {
  if (input === "") {
    return 0; // Return 0 for an empty string
  }

  let delimiters = /[\n,]/;

  if (input.startsWith("//")) {
    const delimiterPart = input.match(/^\/\/(.+)\n/)[1];
    input = input.split("\n")[1];

    if (delimiterPart.startsWith("[")) {
      // handle one or more [delimiters]
      const matches = [...delimiterPart.matchAll(/\[(.*?)\]/g)];
      const escaped = matches.map((m) =>
        m[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      delimiters = new RegExp(escaped.join("|"));
    } else {
      delimiters = new RegExp(`[${delimiterPart}]`);
    }
  }

  const numbers = input.split(delimiters).map(Number);
  const negatives = numbers.filter((n) => n < 0);
  
  if (negatives.length) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }

  return numbers.reduce((sum, num) => (num <= 1000 ? sum + num : sum), 0);
}

module.exports = { add };
