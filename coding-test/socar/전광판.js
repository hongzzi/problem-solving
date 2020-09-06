function solution(n, text, second) {
    const circleSize = n + text.length + 1;
    const modularSize = second % circleSize;
    const answer = modularSize < n
                        ? text.slice(0, modularSize).padStart(n, ' ')
                        : text.slice(modularSize - n, modularSize).padEnd(n, ' ');
    return answer.replace(/ /g, '_')
}