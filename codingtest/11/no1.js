function solution(S) {
    let limit = 2;
    let aCount = 0;
    let letterCount = 0;
    for (const item of S) {
        if(item === 'a') {
            limit--;
            aCount++;
            if(limit < 0) {
                return -1;
            }
        } else {
            limit = 2;
            letterCount++;
        }
    }

    return (letterCount + 1) * 2 - aCount;
}

console.log(solution('abcd'));