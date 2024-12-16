# JavaScript Closure Issue with setTimeout

This repository demonstrates a common issue in JavaScript related to closures and the `setTimeout` function.

## Problem
The `bug.js` file contains a function `myFunction` that uses a `for` loop and `setTimeout` to log numbers from 0 to 9.  Due to how closures work in JavaScript, this code does not behave as expected. All the `console.log` statements print '10' instead of the numbers 0-9.

## Solution
The `bugSolution.js` file provides a solution using `let` to create a block-scoped variable inside the loop that is captured by the closure.

## How to run
1. Clone this repository
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Execute both files to observe the differences in output.
