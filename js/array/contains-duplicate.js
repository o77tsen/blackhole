// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] === nums[i]) {
                return true;
            }
        }
    }

    return false;
};

/**
 * --- Notes ---
 * Time Complexity O(n^2)
 * Space Complexity O(1)
 * 
 * the function checks for duplicates by comparing each element in the `nums` array with all elements to its left
 * returning `true` if any duplicates are found
 */