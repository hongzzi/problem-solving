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
    console.log(orders);
    course.sort();
    const freq = new Map();
    console.log(dishes);
    for(let num of course) {
        comb('', 0, 0, num);
    }

    function comb(newCourse, index, count, num) {
        if(count === num) {
            // console.log(newCourse);
            return;
        }
        for(let i = index; i < dishes.length; i++) {
            if(dishes[i] >= 2) {
                const charCode = String.fromCharCode(index + 65);
                comb(newCourse+charCode, index+1, count+1, num);
            }
        }
    }
    
    return answer.flatMap((v) => v).sort();
}


solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]);
// solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]);
// solution(['XYZ', 'XWY', 'WXA'], [2, 3, 9, 4]);
