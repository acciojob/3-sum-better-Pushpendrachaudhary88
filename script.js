function threeSum(arr, target) {
// write your code here
// function threeSum(nums, target) {
  // Sort the array in ascending order
arr.sort((S, n) => S - n);
  
  let closestSum = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      // Check if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // We found a perfect match, so return the target sum
        return target;
      }
    }
  }

  // Return the closest sum found
  return closestSum;
}
