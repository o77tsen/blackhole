public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> newMap = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++)
        {
            int complement = target - nums[i];

            if (newMap.ContainsKey(complement))
            {
                return new int[] {newMap[complement], i};
            }

            newMap[nums[i]] = i;
        }

        return new int[0];
    }
}