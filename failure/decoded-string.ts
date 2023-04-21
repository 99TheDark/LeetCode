function decodeAtIndex(s: string, k: number): string {
    let tape = "";
    for(let i = 0; i < s.length; i++) {
        let ch = s[i];
        let num = Number(ch);
        if(isNaN(num)) {
            tape += ch;
        } else {
            tape = tape.repeat(num);
        }
        if(tape.length >= k) return tape[k - 1];
    }
};
