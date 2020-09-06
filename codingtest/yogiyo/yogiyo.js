//1번

function solution(X, Y) {
    let answer = [0, 0, 0];
    let array = find(X, Y);
    
    answer = array.length > 0 ? [count(array), sum(array), multiple(array)] : [0, 0, 0];

    return answer;
}


function find(x, y) {
    let result = [];
    for (let index = 1; index <= x; index++) {
        if(index.toString().indexOf(y) >= 0) {
            result.push(index);
        }
    }

    return result;
}

function count(array) {
    return array.length
}

function sum(array) {
    return array.reduce((acc, curr) => acc + curr);     
}

function multiple(array) {
    return array.reduce((acc, curr) => acc * curr);
}


console.log(solution(20, 0));