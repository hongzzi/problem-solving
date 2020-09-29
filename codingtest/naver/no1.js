function solution(m, k) {
    const strArr = m.split('');
    const keyArr = k.split('');
    let [ sIndex, kIndex ] = [0, 0];

    while (kIndex < k.length) {
        if(strArr[sIndex] === keyArr[kIndex]) {
            kIndex++;
            strArr[sIndex] = '';
        }
        sIndex++;
    }
    return strArr.join('');
}

console.log(solution('kkaxbycyz', 'abc'));