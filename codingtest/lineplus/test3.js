function solution(n) {
    const answer = [Number.MAX_VALUE, -1];
    if(n < 10) return [0, n];
    dfs(n+'', 0, answer);
    return answer;
}

function dfs(num, count, answer) {
    if(num.length === 1) {
        if(answer[0] > count) {
            answer[0] = count;
            answer[1] = +num
        }
        return;
    }
    for(let i = 1; i < num.length; i++) {
        const [start, end] = [num.slice(0, i), num.slice(i, num.length)];
        if(end.length !== 1 && start.charAt(0) ==='0') continue;
        else if(end.length !== 1 && end.charAt(0) === '0') continue;
        const [sNum, eNum] = [+start, +end];
        dfs((sNum+eNum)+'', count+1, answer);
    }
}

console.log(solution(73425));
console.log(solution(10007));
console.log(solution(12));
console.log(solution(100));