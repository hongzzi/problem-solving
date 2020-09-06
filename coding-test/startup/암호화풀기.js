const solution = (encrypted_text, key, rotation) => {
    const keyCode = key.split('').map((code) => convertCode(code));
    const rotatingCode = rotateString(encrypted_text, rotation);
    const answer = rotatingCode.map((alpha, index) => {
        const code = convertAlpha(alpha) - keyCode[index];
        const encoding = compose(convertString, inRange);
        return encoding(code);
    });
    return answer.join('');
};

const rotateString = (text, number) => {
    const arrayText = text.split('');
    return arrayText.map((char, index) => {
        if (number >= 0) return arrayText[(index + number) % arrayText.length];
        else return arrayText[(index + number + arrayText.length ) % arrayText.length];
    });;
};
const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);
const convertCode = (character) => character.charCodeAt() - 96;
const convertAlpha = (character) => character.charCodeAt() - 97;
const inRange = (number) => number < 0 ? number + 26 : number % 26;
const convertString = (number) => String.fromCharCode(number + 97);

console.log(solution('qyyigoptvfb', 'abcdefghijk', 3));