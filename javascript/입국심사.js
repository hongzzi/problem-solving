// 이분탐색

function solution(n, times) {
    let answer = Number.MAX_VALUE;
    times.sort((a, b) => a - b);
    let [left, right] = [1, times[times.length - 1] * n];
    let mid, pay;

    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        pay = times.reduce((prev, next) => prev + Math.floor(mid / next), 0);
        console.log(mid, pay);
        if(pay >= n) {
            answer = mid < answer ? mid : answer;
            right = mid - 1;
        }
        else left = mid + 1;
    }
    
    return answer;
}

console.log(solution(2, [1,2,2,2,100] ));