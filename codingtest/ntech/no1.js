function solution(flowers) {
    let answer = 0;
    const calendar = Array(366).fill(0);

    flowers.forEach(flower => {
        for (let i = flower[0]; i < flower[1]; i++){
            calendar[i]++;
        };
    })

    answer = calendar.reduce((pre, next) => next !== 0 ? pre + 1 : pre, 0);
    return answer;
}

console.log(solution([[2, 5], [3, 7], [10, 11]]));
console.log(solution([[3, 4],[4, 5], [6, 7], [8, 10]]));