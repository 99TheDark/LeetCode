const map = {
    "(": ")",
    "[": "]",
    "{": "}"
};

const begin = Object.keys(map);

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let order = [];
    for(let i = 0; i < s.length; i++) {
        let ch = s[i];
        if(begin.includes(ch)) {
            order.push(map[ch]);
        } else {
            if(order.at(-1) == ch) {
                order.pop();
            } else {
                return false;
            }
        }
    }
    return order.length == 0;
};
