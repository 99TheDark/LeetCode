/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let idx = 0;
    outer:
    while(true) {
        let common;
        for(let str of strs) {
            let ch = str[idx];
            if(!common) {
                common = ch;
            } else if(ch != common) {
                break outer;
            }
        }
        prefix += common;
        idx++;
    }
    return prefix;
};
