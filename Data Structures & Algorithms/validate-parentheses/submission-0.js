class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const mapping = {")": "(", "]": "[", "}": "{"};
        let stack = [];

        for (let c of s) {
            if (c in mapping) {
                if(stack.length === 0 || mapping[c] !== stack[stack.length - 1]) return false;
                stack.pop();
            } else {
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}
