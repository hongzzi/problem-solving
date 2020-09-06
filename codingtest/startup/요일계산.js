// 월 정기결제를 하는데 주말일 경우 평일날 지출.
// 정기결제날이 평일인지 휴일인지 계산
// input => day : 그 해의 시작 요일 / k = 정기결제일

const solution = (day, k) => {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = [0, 0, 0, 0, 0, 1, 1];
    const answer = [];
    months.reduce((pre, next) => {
        const payDay = days[(pre+k)%7];
        answer.push(payDay);
        return pre + next;
    }, day - 1) // 첫날 인덱스를 위해서
    return answer;
}
console.log(solution(6, 25));