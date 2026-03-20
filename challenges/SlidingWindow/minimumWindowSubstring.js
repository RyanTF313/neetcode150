const minWindow = (s, t) => {
    if (s.length === 0 || t.length === 0) return "";

    let targetMap = new Map();
    for (let char of t) {
        targetMap.set(char, (targetMap.get(char) || 0) + 1);
    }

    let required = targetMap.size;
    let left = 0, right = 0;
    let formed = 0;
    let windowCounts = new Map();
    let result = [-1, 0, 0];

    while (right < s.length) {
        let char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (targetMap.has(char) && windowCounts.get(char) === targetMap.get(char)) {
            formed++;
        }

        while (left <= right && formed === required) {
            char = s[left];

            if (result[0] === -1 || right - left + 1 < result[0]) {
                result = [right - left + 1, left, right];
            }

            windowCounts.set(char, windowCounts.get(char) - 1);
            if (targetMap.has(char) && windowCounts.get(char) < targetMap.get(char)) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return result[0] === -1 ? "" : s.substring(result[1], result[2] + 1);
}
