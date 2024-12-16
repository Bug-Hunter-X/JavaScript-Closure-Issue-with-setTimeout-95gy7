function myFunction() {
  for (let i = 0; i < 10; i++) {
    // Using let ensures a new variable 'i' is created for each iteration
    ((i) => {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })(i);
  }
}

myFunction();