function threeSum(nums, target) {
// write your code here
// function threeSum(nums, target) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);
  
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

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
