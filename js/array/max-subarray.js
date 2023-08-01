// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];

        maxSum = Math.max(maxSum, nums[i]);
    }

    return maxSum;
};

/**
 * --- Notes ---
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 * 
 * the function efficiently finds the max sum of any contiguous subarray in the `nums` array,
 * with the implementation of the Kadane's algorithm, it updates the array `nums` to store
 * the max sum of subarrays ending at each index
 */