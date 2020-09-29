// function solution(info, query) {
//     var answer = [];
//     const total = info.length;
//     const langType = ['java', 'python', 'cpp', '-'];
//     const lang = [0, 0, 0, total];
//     const positionType = ['backend', 'frontend', '-'];
//     const position = [0, 0, total];
//     const careerType = ['junior', 'senior', '-'];
//     const career = [0, 0, total];
//     const soulFoodType = ['chicken', 'pizza', '-'];
//     const soulFood = [0, 0, total];
//     const scores = new Array(100001).fill(0);

//     info.forEach((line) => {
//         const map = line.split(' ');
//         lang[langType.indexOf(map[0])]++;
//         position[positionType.indexOf(map[1])]++;
//         career[careerType.indexOf(map[2])]++;
//         soulFood[soulFoodType.indexOf(map[3])]++;
//         scores[+map[4]]++;
//     });

//     console.log(lang, position, career, soulFood);
//     const queryMap = query.map((line) => {
//         const map = line.replace(/and /gi, '').split(' ');

//     });
//     console.log(queryMap);
//     return answer;
// }

function solution(info, query) {
    const answer = [];

    info = info.map((line) => line.split(' '));
    query.forEach((line) => {
        const map = line.replace(/and /gi, '').split(' ');
        const count = (pre, next) => {
            let check = true;
            for (let i = 0; i < next.length-1; i++) {
                if(map[i] !== '-' && map[i] !== next[i]) {
                    check = false;
                    break;
                }
            }
            return check && +next[4] >= +map[4] ? pre + 1 : pre;
        };
        answer.push(info.reduce(count, 0))
    });
    return answer;
}

console.log(
    solution(
        [
            'java backend junior pizza 150',
            'python frontend senior chicken 210',
            'python frontend senior chicken 150',
            'cpp backend senior pizza 260',
            'java backend junior chicken 80',
            'python backend senior chicken 50',
        ],
        [
            'java and backend and junior and pizza 100',
            'python and frontend and senior and chicken 200',
            'cpp and - and senior and pizza 250',
            '- and backend and senior and - 150',
            '- and - and - and chicken 100',
            '- and - and - and - 150',
        ]
    )
);
