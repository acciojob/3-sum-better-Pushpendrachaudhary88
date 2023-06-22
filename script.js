function threeSum(S, target) {
  // Sort the array in ascending order
  S.sort((a, b) => a - b);

  let closestSum = Infinity; // Initialize with a large value

  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;

    while (left < right) {
      const sum = S[i] + S[left] + S[right];

      // Update the closest sum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum === target) {
        // Found the exact target sum, return it
        return closestSum;
      } else if (sum < target) {
        // Move the left pointer to increase the sum
        left++;
      } else {
        // Move the right pointer to decrease the sum
        right--;
      }
    }
  }

  return closestSum;
}
