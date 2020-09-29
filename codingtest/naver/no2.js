function solution(blocks) {
    const height = blocks.length;
    const pyramid = Array(height)
        .fill(0)
        .map((v, i) => Array(i + 1).fill(null));
    const indexQueue = Array(height)
        .fill(0)
        .map((v) => []);

    blocks.forEach(([index, value], row) => {
        pyramid[row][index] = value;
        indexQueue[row].push(index);
    });

    for (let i = 1; i < indexQueue.length; i++) {
        while (indexQueue[i].length > 0) {
            const index = indexQueue[i].shift();
            if (plusIn(index, height, pyramid[i])) {
                pyramid[i][index+1] = pyramid[i-1][index] - pyramid[i][index];
                indexQueue[i].push(index + 1);
            }
            if (minusIn(index, pyramid[i])) {
                pyramid[i][index-1] = pyramid[i-1][index-1] - pyramid[i][index];
                indexQueue[i].push(index - 1)
            };
        }
    }

    return pyramid.flatMap(v => v);
}

function plusIn(index, length, node) {
    return index + 1 < length && node[index+1] === null;
}

function minusIn(index, node) {
    return index - 1 >= 0 && node[index-1] === null;
}

console.log(
    solution([[0, 92], [1, 20], [2, 11], [1, -81], [3, 98]])
);
