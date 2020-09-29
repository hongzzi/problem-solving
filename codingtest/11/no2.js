function solution(S) {
    const answer = [];
    const M = S[0].length;

    loof: for (let i = 0; i < M; i++) {
        const countArray = Array(26).fill(-1);
        for (let j = 0; j < S.length; j++) {
            const askii = S[j].charCodeAt(i) - 97;
            if(countArray[askii] == -1) {
                countArray[askii] = j;
            } else {
                answer.push(...[countArray[askii], j, i]);
                break loof;
            }
        }
    }
    
    return answer;
}

console.log(solution(['abc', 'bca', 'dbe']));
console.log(solution(['zzzz', 'ferz', 'zdsr', 'fgtd']));
console.log(solution(['gr', 'sd', 'rg']));
console.log(solution(['bdafg', 'ceagi']));