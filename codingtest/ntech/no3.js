function solution(histogram) {
    let answer = 0;
    for (let i = 2; i < histogram.length; i++) {
        let min = 0;
        for (let j = 0; j < i; j++) {
            if(histogram[j] >= histogram[i]) {
                console.log(histogram);
                console.log(min, histogram[min], histogram[min] * i-j-1);
                const area = Math.max(histogram[i] * i-j-1, histogram[min] * i-min-1);
                answer = answer < area ? area : answer;
                break;
            } else {
                min = histogram[min] >= histogram[j] ? min : j;
            }
        }
        const area = histogram[min] * i-min-1;
        answer = answer < area ? area : answer;
    }
    return answer;
}
console.log(solution([2, 2, 2, 3]));
console.log(solution([6, 5, 7, 3, 4, 2]));