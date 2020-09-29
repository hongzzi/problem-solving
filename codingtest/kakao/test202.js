function solution(orders, course) {
    const answer = Array.from(Array(course.length), () => Array().fill([]));
    const dishes = Array(26).fill(0);
    orders = orders.map(order => order.split('').sort());
    orders = orders.map(order =>
        order.map(item => {
                const number = item.charCodeAt(0) - 65;
                dishes[number]++;
                return item;
            })
    );

    const frequency = new Map();
    course.sort();

    dfs(dishes, 0, '', course, orders, answer, frequency, course[course.length-1] + 1);
    return answer.flatMap((v) => v).sort();
}

function dfs(dishes, i, newCourse, course, orders, answer, frequency, maximum) {
    if (course.includes(newCourse.length)) {
        const count = orders.reduce((pre, next) => {
            const check = newCourse.split('').filter((item) => next.includes(item)).join('');
            return check == newCourse ? pre + 1 : pre;
        }, 0);
        const idx = course.indexOf(newCourse.length);
        if (count >= 2) {
            if(frequency.has())
            if (count > frequency[idx]) {
                answer[idx] = [newCourse];
                frequency[idx] = count;
            } else if (frequency[idx] === count) answer[idx].push(newCourse);
        }
    } else if (newCourse.length > maximum) return;

    for (let index = i; index < dishes.length; index++) {
        if (dishes[index] >= 2) {
            const charCode = String.fromCharCode(index + 65);
            dfs(
                dishes,
                index + 1,
                newCourse + charCode,
                course,
                orders,
                answer,
                frequency,
                maximum
            );
        }
    }
}



console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]));
// solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]);
// solution(['XYZ', 'XWY', 'WXA'], [2, 3, 9, 4]);