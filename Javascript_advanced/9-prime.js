function countPrimeNumbers() {
	function isPrime(num) {
	  if (num < 2) {
		return false;
	  }
	  if (num === 2) {
		return true;
	  }
	  else {
		const remainderArr = [];
		for (let i = 2; i <= num; i++) {
		  let rem = num % i;
		  remainderArr.push(rem);
		}
		if (remainderArr.includes(0)) {
		  return false;
		}
		else {
		  return true;
		}
	  }
	}
	let count = 0;
	for (let i = 2; i <= 100; i++) {
	  if (isPrime(i)) {
		count++;
	  }
	}
  }
  const startTime = performance.now();
  const countPrime = countPrimeNumbers();
  const endTime = performance.now();
  console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);