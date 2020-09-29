let answer = Number.MAX_VALUE;

function solution(n, edge) {
    const tree = Array(n).fill(0).map(v => []);
    answer = Number.MAX_VALUE;
    edge.forEach(([parent, child]) => {
        tree[parent].push(child);
    })
    dfs(tree, tree[0], 1);
    return answer;
}

function dfs(tree, siblings, count) {
    if(siblings.length === 0) {
        answer = count < answer ? count : answer;
    };

    let size = siblings.length;
    for(let i = 0; i < size; i++) {
        const temp = siblings.shift();
        const childs = [];
        for (const node of siblings) {
            childs.push(...tree[node]);
        }
        dfs(tree, childs, count + siblings.length);
        siblings.push(temp);
    }
}

console.log(solution(19, [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 6], [3, 7], [3, 8], [3, 9], [4, 10], [4, 11], [5, 12], [5, 13], [6, 14], [6, 15], [6, 16], [8, 17], [8, 18]]));
console.log(solution(14, [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6], [2, 7], [3, 8], [3, 9], [3, 10], [4, 11], [4, 12], [4, 13]]));
console.log(solution(10, [[0, 1], [0, 2], [1, 3], [2, 4], [2, 5], [2, 6], [3, 7], [3, 8], [3, 9]]));
console.log(solution(10, [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9]]));