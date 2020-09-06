function solution(n, computers) {
    let answer = 0;
    let parents = Array(n).fill(0).map((e, index) => index);
    
    const union = (x, y) => {
        const x1 = find(x);
        const y1 = find(y);

        if(x1 != y1) parents[y1] = parents[x1];
    }

    const find = (x) => {
        if(parents[x] === x) return x;
        return find(parents[x]);
    }
    
    computers.map((line, lIndex) => line.map((computer, idx) => computer === 1 ? union(lIndex, idx) : computer));

    return parents.filter((parent, index) => parent === index).length;
}

console.log(solution(4, [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 1, 0, 1]]))