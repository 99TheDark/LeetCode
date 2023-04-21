/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let table = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let order = Object.keys(table);

    let chars = [...s];
    let total = 0;
    for(let i = 0; i < chars.length; i++) {
        let a = chars[i];
        let b = chars[i + 1];
        if(order.indexOf(a) < order.indexOf(b)) {
            total += table[b] - table[a];
            i++;
        } else {
            total += table[a];
        }
    }

    return total;
};
