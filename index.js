// Helper function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Main function to demonstrate the use of the helper function
  function main() {
    const num = 5; // Change the number to calculate its factorial
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
  }
  
  // Call the main function
  main();
  