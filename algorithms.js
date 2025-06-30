//Fibonacci Sequence

function fibonacci(n){
  const fib = [0, 1]
  for(let i = 2; i < n; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
} 

console.log(fibonacci(5))

//Big-O = O(n)
//
//
//Factorial of a number
function factorial(n){
  let result = 1;
  for(let i = 2; i <= n; i++){
    result *=i;
  }
  return result;
}

console.log(factorial(5))
//Big-O = O(n)
//
//
//Prime Number
  function isPrime(n){
    if(n<2){
      return false
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
      if(n%i === 0){
        return false
      }
    }return true
  }

  console.log(isPrime(2))
  //Big-O = O(sqrt(n))
  //
  //
  //Power of Two
    function isPowerOfTwo(n){
      if(n < 1){
        return false
      }
      while(n > 1){
        if(n % 2 !== 0){
          return false
        }
        n = n/2
      }
      return true;
}

console.log(isPowerOfTwo(16));
//Big-O = O(log(n))
//
  function isPowerOfTwoBitWise(n){
    if(n < 1){
      return false
    }
    return (n & (n-1)) === 0
  }
//Big-O = O(1)
//
//
//Recursion
