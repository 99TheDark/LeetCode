/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let idx = 0;
    while(true) {
        let common;
        let all = true;
        for(let str of strs) {
            let ch = str[idx];
            if(idx >= str.length) {
                all = false;
                break;
            }
            if(!common) {
                common = ch;
            } else if(ch != common) {
                all = false;
                break;
            }
        }
        if(!all) break;
        prefix += common;
        idx++;
    }
    return prefix;
};
