// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isValidChar(s[left])) {
            left++;
        }

        while (left < right && !isValidChar(s[right])) {
            right--;
        }

        if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

function isValidChar(char) {
    return /[a-zA-Z0-9]/.test(char);
}
/**
 * --- Notes ---
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 * 
 * the function checks if `s` is a valid palindrome
 * by removing all non alphanumeric characters and
 * converting the remaining characters to lowercase
 * utilises a two pointer approach to compare characters
 * from both ends and returns true if characters match,
 * indicating `s` is a palindrome
 */