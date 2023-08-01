// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        for (let j = (i + 1); j < nums.length; j++) {
            const num = nums[j];

            if (num === complement) {
                return [i, j]
            }
        }
    }

    return null
}

/**
 * --- Notes ---
 * Time Complexity O(n^2)
 * Space Complexity O(1)
 * 
 * the function is using two nested loops to iterate through all possible pairs in the array,
 * calculating their sum to check if it matches the `target`
 */