function solution(N, S) {
    let answer = N * 2;
    let array = S.split(" ");
    let booked = new Map();

    if(array) {
        array.forEach(element => {
            let row = element.replace(/[^0-9]/g,"");
            let seat = element.replace(/[^A-K]/g,"");
    
            if(booked.has(row)) {
                booked.set(row, booked.get(row)+seat);
            } else {
                booked.set(row, seat);
            }
        });
    
        let regexA = /[B-E]/gi
        let regexB = /[F-J]/gi
    
        console.log(booked);
    
        booked.forEach((value, key) => {
            if(value.match(regexA)) {
                answer -= 1;
            }
            if(value.match(regexB)) {
                answer -= 1;
            }
        });
    }

    return answer;
}

console.log(solution(2, "1A 2F 1C"));