# String Calculator – TDD Kata

This is a TDD-style implementation of the classic **String Calculator Kata**, built with JavaScript and Node.js.

---

## ✅ Features Implemented

- Add numbers from string input
- Supports:
  - Comma `,` and newline `\n` as default delimiters
  - Custom delimiters like: `//;\n1;2`
  - Delimiters of any length: `//[***]\n1***2***3`
  - Multiple delimiters: `//[*][%]\n1*2%3`
  - Multiple long delimiters: `//[**][%%]\n1**2%%3`
- Throws error on negative numbers with list: `negatives not allowed: -2,-5`
- Ignores numbers greater than 1000

---

## 🧪 Testing

All logic has been written in a strict **Test-Driven Development** process using **Jest**.

To run tests:

```bash
npm install
npm test
```

---

## 📁 File Structure

```
├── calculator.js         # Core logic
├── calculator.test.js    # Jest test cases
├── package.json
└── README.md
```

---

## 📌 How TDD Was Followed

1. Every feature started with a failing test
2. Minimal code written to make tests pass
3. Frequent commits to show evolution
4. Refactoring done only after passing all tests

---

## 🚀 How to Run

```bash
git clone https://github.com/Bhargav00708/string-calculator-tdd.git
cd string-calculator
npm install
npm test
```

---

## 💡 Bonus Features

✔️ Support for advanced delimiter formats  
✔️ Robust error handling  
✔️ Ignoring out-of-bound values (e.g., >1000)  
✔️ Clean code and readable test cases

---

### 👨‍💻 Built with ❤️ by Bhargav

[Connect on LinkedIn](http://www.linkedin.com/in/console-log-bhargav)
