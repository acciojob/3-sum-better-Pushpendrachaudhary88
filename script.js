function threeSum(arr, target) {
// write your code here
	let sum=0;
	let a=arr[i];
	let b=arr[i];
	let c=arr[i];
	for(let i=0;i<arr.length;i++){
		if(a+b+c===target){
			sum+=a+b+c;
		}
	}
	return sum;
	
  
}

module.exports = threeSum;
