// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = left + ((right - left) >> 1);

        if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return nums[left];
};

/**
 * --- Notes ---
 * Time Complexity - O(log N)
 * Space Complexity - O(1)
 * 
 * the function efficiently finds the minimum element in the array using binary search algorithm
 * it determines which half of the array may contain the minimum elements of the other half in each iteration
 */