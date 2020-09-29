function solution(ball, order) {
    const answer = [];
    const queue = [];
    let [front, end, index] = [0, ball.length-1, 0];

    while (front < end) {
        let fIndex = queue.indexOf(ball[front])
        let eIndex = queue.indexOf(ball[end])

        if(fIndex !== eIndex) {
            if (fIndex === -1) {
                answer.push(queue[eIndex]);
                end--;
            } else if (eIndex === -1) {
                answer.push(queue[fIndex]);
                front++;
            } else {
                if(fIndex < eIndex) {
                    answer.push(queue[fIndex]);
                    front++;
                } else {
                    answer.push(queue[eIndex]);
                    end--;
                }
            }
        } else if (order[index] === ball[front]) {
            answer.push(ball[front++]);
            index++;
        } else if (order[index] === ball[end]) {
            answer.push(ball[end--]);
            index++;
        } else {
            queue.push(order[index++]);
        }
    }
    if(answer.length < order.length) answer.push(ball[front]);
    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6], [6, 2, 5, 1, 4, 3]));
console.log(solution([11, 2, 9, 13, 24], [9, 2, 13, 24, 11]));
