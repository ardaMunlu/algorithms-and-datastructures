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
//Big-O = O(logn)
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
//Recursive Fibonacci Sequence
  function RecFibonacci(n){
    if(n < 2 ){
      return n
    }
    return RecFibonacci(n-1) + RecFibonacci(n-2)
  }

  console.log(RecFibonacci(6))
//Big-O = O(2ⁿ)
//
//
//Recursive Factorial of a Number
    function RecFactorial(n){
      if(n === 0){
        return 1
      }
      return n * RecFactorial(n-1)
    }

    console.log(RecFactorial(5))
//Big-O = O(n)
//
//
//
//
//
//SEARCH ALGORITHMS
//
//
//Linear Search
  function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === target){
        return i
      }
    }
    return -1
  }

  console.log(linearSearch([-5, 2, 10, 4, 6], 10));
//Big-O = O(n)
//
//
//Binary Search
  function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    
    while(leftIndex <= rightIndex){
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      if(target === arr[middleIndex]){
        return middleIndex
      }
      if(target < arr[middleIndex]){
        rightIndex = middleIndex -1;
      }else{
        leftIndex = middleIndex + 1;
      }
    }
    return -1
  }

  console.log(binarySearch([-5, 2, 4, 6, 10], 10));
//Big-O O(logn)
//
//
//Recursive Binary Search

    function RecBinarySearch(arr, target){
      return search(arr, target, 0, arr.length -1)
    }

    function search(arr, target, leftIndex, rightIndex){
      if(leftIndex > rightIndex){
        return -1
      }

      let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      if(target === arr[middleIndex]){
        return middleIndex
      }
      if(target < arr[middleIndex]){
        return search(arr, target, leftIndex, middleIndex -1)
      }else{
        return search(arr, target, middleIndex + 1, rightIndex)
        }
      }

    console.log(RecBinarySearch([-5, 2, 4, 6, 10], 10));
//Big-O O(logn)
//
//
//
//
//
//SORTING ALGORITHMS
//
//
//Bubble Sort

    function bubbleSort(arr){
      let swapped
      do{
      swapped = false
      for(let i = 0; i < arr.length -1; i++){
        if(arr[i] > arr[i+1]){
          let temp = arr[i]
          arr[i] = arr[i+1]
          arr[i+1] = temp
          swapped = true
        }
      }
    } while(swapped)
    }

    console.log(bubbleSort([-6, -2, 4, 8, 20]));
//Big-O O(n^2)
//
// 
//Insertion Sort

    function insertionSort(arr){
      for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j = i - 1
        while(j >= 0 && arr[j] > numberToInsert){
          arr[j+1] = arr[j];
          j = j-1;
        }
        arr[j+1] = numberToInsert;
        
      }
    }

    const arr = [8, 20, -2, 4, -6]
    insertionSort(arr);
    console.log(arr);

//Big-O O(n^2)
//
//
//Quick Sort

    function quickSort(arr){
      if(arr.length < 2){
        return arr;
      }
      let pivot = arr[arr.length - 1];
      let left = [];
      let right = [];
      for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
          left.push(arr[i])
        }else{
          right.push(arr[i])
        }
      }
      return [...quickSort(left), pivot, ...quickSort(right)];
    }

    const arr2 = [8, 20, -2, 4, -6]
    console.log(quickSort(arr));

//Big-O O(n^2) -> worst case
//      O(nlogn) -> avarage case
//  
//
//Merge Sort

