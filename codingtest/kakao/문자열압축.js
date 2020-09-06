function solution(s) {
    let size = s.length
    let answer = size;
        
    for(let i = 1; i <= size; i++) {
        let temp = '';
        let present = '';
        let count = 1;
        for(let j = 0; j <= s.length-i; j = j+i) {
            let next = s.substr(j, i);
            if(present !== next) {
                count = count === 1 ? '' : count;
                temp = temp + count + present;
                present = next;
                count = 1;
            } else if(next === present) {
                count++;
            }
        }
        
        count = count === 1 ? '' : count;
        temp = temp + count + present;
        if(size % i !== 0) {
            temp += s.substr(s.length - (size % i), s.length);
        }
        answer = temp.length < answer ? temp.length : answer;
    }
    
    return answer;
}