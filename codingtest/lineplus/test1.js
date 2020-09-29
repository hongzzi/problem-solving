function solution(boxes) {
    let answer = boxes.length;
    const countArr = new Array(1000001).fill(0);
    boxes.forEach(box => {
        box.forEach(item => {
            countArr[item]++;
            if(countArr[item] % 2 == 0) answer--;
        })
    });

    return answer;
}

console.log(solution([[1, 2], [2, 1], [3, 3], [4, 5], [5, 6], [7, 8]]));