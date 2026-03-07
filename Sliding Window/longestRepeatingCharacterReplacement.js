const characterReplacement = (s, k) => {
    let left = 0;
    let maxLength = 0;
    let maxCount = 0;
    let charCount = new Map();

    for (let right = 0; right < s.length; right++) {
        charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);
        maxCount = Math.max(maxCount, charCount.get(s[right]));

        while (right - left + 1 - maxCount > k) {
            charCount.set(s[left], charCount.get(s[left]) - 1);
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
