// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length <= 1) return s;

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expandPalindrome(s, i, i);
        let len2 = expandPalindrome(s, i, i + 1);

        let len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};

function expandPalindrome(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return right - left - 1;
}

/**
 * --- Notes ---
 * Time Complexity - O(n^2)
 * Space Complexity - O(1)
 * 
 * the function efficiently searches for the longest palindrome substring in the `s` string input
 * it looks at each char as a potential palindrome centre and expands to both left and right to
 * identify palindromes of odd and even lengths
 * 
 * the `expandPalindrome` function helps determine the length of the palindrome based on its expansion
 * returns the longest palindrme substring found between the indices `start` and `end`
 */