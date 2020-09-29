// 자바스크립트 배열 선언에서 사이즈가 클경우 에러남.. ..ㅋㅋ,,

function solution(n, edge) {
    let answer = 0;
    const graph = Array(n+1).fill(0).map(v => []);
    const count = Array(n+1).fill(0);
    const flag = Array(n+1).fill(true);
    edge.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });
    
    const queue = [];
    queue.push(1);
    flag[1] = false;

    while(queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const e = queue.shift();
            for (const v of graph[e]) {
                if(flag[v]) {
                    count[v] = count[e] + 1;
                    flag[v] = false;
                    queue.push(v);
                }
            }
        }
    }
    
    let max = 0;
    count.forEach(v => {
        if(v > max) {
            max = v;
            answer = 1;
        } else if(v === max) {
            answer++;
        }
    });
    return answer;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));
