func twoSum(nums []int, target int) []int {
    for i := 0; i < len(nums); i++ {
		var complement = target - nums[i]

		for j := (i + 1); j < len(nums); j++ {
			var num = nums[j]

			if num == complement {
				return []int{i, j}
			}
		}
	}

	return []int{}
}