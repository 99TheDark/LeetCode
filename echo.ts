function distinctEchoSubstrings(text: string): number {
    let doubles = [];

    // Iterate for each size and each position
    // Only even sizes can be halved, and length > 0
    for(let len = 2; len <= text.length; len += 2) { 
        for(let i = 0; i <= text.length - len; i++) {
            let str = text.substring(i, i + len);

            // Left and right 'halves' of the string
            let left = str.substring(0, str.length / 2);
            let right = str.substring(str.length / 2);

            // Make sure no duplicates exist
            if(left == right && !doubles.includes(str)) doubles.push(str);
        }
    }

    return doubles.length;
};
