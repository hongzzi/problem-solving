const solution = (k) => {
    const result = [];
    const number = Array(10).fill(0).map((i, index) => index);
    const digits = [10, 45, 120, 210, 252, 210, 120, 45, 10, 1];
    // 1 C 10 - 10 C 10 까지 값

    const combination = (target, n, r, count) => {
        if(r === 0) result.push(target.join(''))
        else if(n === 0 || n < r) return;
        else {
            target.push(number[count]);
            combination([...target], n - 1, r - 1, count + 1);
            target.pop();
            combination([...target], n - 1, r, count + 1);
        } 
    }

    let digit = -1;

    for(let index in digits) {
        if(k <= digits[index]) {
            digit = +index + 1;
            break;
        } else {
            k = k - digits[index];
        }
    }

    if(digit < 0) return '-1';
    else {
        combination([], number.length, digit, 0);
        return result[k-1];
    }
}