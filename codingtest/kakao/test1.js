function solution(new_id) {
    const recommendId = compose(
        firstStep,
        secondStep,
        thirdStep,
        fourthStep,
        fifthStep,
        sixthStep,
        seventh
    );
    const result = recommendId(new_id);
    console.log(result);
    return result;
}

const firstStep = (id) => id.toLowerCase();
const secondStep = (id) => id.replace(/[^a-z0-9-_\.]/gi, '');
const thirdStep = (id) => id.replace(/[\.]+/gi, '.');
const fourthStep = (id) => {
    let [start, end] = [0, id.length - 1];
    start = id[start] === '.' ? 1 : 0;
    end = id[end] === '.' ? end - 1 : end;
    return id.slice(start, end + 1);
};
const fifthStep = (id) => (id ? id : 'a');
const sixthStep = (id) => {
    const maxLengthSize = 15;
    id = id.length > maxLengthSize ? id.slice(0, maxLengthSize) : id;
    id =
        id[maxLengthSize - 1] === '.' ? id.slice(0, maxLengthSize - 1) : id;
    return id;
};
const seventh = (id) => {
    const lastWord = id[id.length-1];
    while (id.length < 3) id += lastWord;
    return id;
};
// 합성함수
const compose = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

solution('...!@BaT#*..y.abcdefghijklm');
solution('z-+.^.');
solution('=.=');
solution('123_.def');
solution('');
solution('abcdefghijklmn.p');

