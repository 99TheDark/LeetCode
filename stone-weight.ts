function lastStoneWeight(stones: number[]): number {
    // Sort from greatest to least
    stones.sort((a, b) => b - a);

    while (stones.length > 1) {
        // So x <= y
        let y = stones[0],
            x = stones[1];
        
        console.log(stones)

        if(x == y) {
            stones.splice(0, 2);
        } else {
            stones.splice(1, 1);

            stones[0] -= x;
            stones.sort((a, b) => b - a);
        }
    }

    return stones[0] ?? 0;
};
