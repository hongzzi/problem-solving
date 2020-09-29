function solution(S) {
    const sum = S.reduce((pre, next) => pre+next);
    const n = S.length;

    return Math.abs(sum - (n * (n+1) / 2));
}

console.log(solution(['abc', 'bca', 'dbe']));
console.log(solution(['zzzz', 'ferz', 'zdsr', 'fgtd']));
console.log(solution(['gr', 'sd', 'rg']));
console.log(solution(['bdafg', 'ceagi']));