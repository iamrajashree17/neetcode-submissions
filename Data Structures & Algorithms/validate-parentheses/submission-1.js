class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const map = {")": "(", "]": "[", "}": "{"};

        for (let c of s) {
            if (c in map) {
                if (stack.length === 0 || stack[stack.length - 1] !== map[c]) {
                    return false;
                }
                stack.pop()
            } else {
                stack.push(c);
            }
        }
        return stack.length == 0
    }
}
