// 송편 만들기 단계계산 -> 위상정렬

function solution(cook_times, order, k) {
    const graph = Array.from(Array(cook_times.length), () => Array().fill([]));
    const visited = Array(cook_times).fill(false);
    order.map(edge => graph[edge[1]-1].push(edge[0]-1));

    const dfs = (k) => {
        if(graph[k].length === 0) return cook_times[k];
        let time = 0;
        for(let vertex of graph[k]) {
            const result = dfs(vertex);
            visited[vertex] = true;
            if(time < result) {
                time = result;
            }
        }
        return cook_times[k] + time;
    }
    const answer = dfs(k-1);
    const step = visited.filter(edge => edge).length;
    return [step, answer];
}

console.log(solution([5, 30, 15, 30, 35, 20, 4], [[2,4],[2,5],[3,4],[3,5],[1,6],[4,6],[5,6],[6,7]], 6));

console.log(solution([5, 30, 15, 30, 35, 20, 4, 50, 40], [[2,4],[2,5],[3,4],[3,5],[1,6],[4,6],[5,6],[6,7],[8,9]], 9));

console.log(solution([5, 3, 2], [[1, 2], [2, 3], [1, 3]], 3));