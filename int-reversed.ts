function reverse(x: number): number {
    let s = Math.sign(x);
    x *= s;
    let val = Number([...String(x)].reverse().join(""));
    if(val > 2 ** 31 - 1) return 0;
    return val * s;
};
