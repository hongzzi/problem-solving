function solution(p) {
    // 입력이 빈 문자열인 경우, 빈 문자열을 반환
    if(!p || isPerfect(p)) return p;
    // 문자열 w 를 두 u, v로 분리. 
    const [u, v] = seperation(p);
    
    // u 가 올바른 문자열이면? v 에 대해서 1부터 다시 수행 
    if(isPerfect(u)) return u + solution(v)
    else {  // 아니면, 
         // 빈 문자열에 첫 문자로 ( 를 붙임
        // v 에 대해서 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙임
        // ) 를 붙임
        let answer = '(' + solution(v) + ')';

        // u의 첫, 그리고 마지막 문자 제거 
        const newU = u.slice(1, -1);
        // 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙임
        answer += reverse(newU);
        // 문자열 반환
        return answer;
    }
}

const seperation = (w) => {
    let stack = 0;
    let index = 0;
    for(let elem of w) {
        stack += elem === '(' ? 1 : -1;
        index++;
        if(stack === 0) break;
    }
    return [w.slice(0, index), w.slice(index, w.length)];
}

const isPerfect = (u) => {
    let stack = 0;
    for(let elem of u) {
        stack += elem === '(' ? 1 : -1;
        if(stack < 0) return false;
    }
    if(stack === 0) return true;
}

const reverse = (u) => {
    return u.split('').map(char => char === ')' ? '(' : ')').join('');
}

console.log(solution(")("))