function solution(companies, applicants) {
    const answer = [];
    const company = {};
    const apply = {};
    const queue = [];
    // 회사데이터 파싱
    companies.forEach((line) => {
        const [name, priority, capacity] = line.split(' ');
        company[name] = { applicant: [], priority, capacity };
    });

    // 지원자데이터 파싱
    applicants.forEach((line) => {
        const [name, priority, rank] = line.split(' ');
        apply[name] = { priority: [...priority.slice(0, rank)], state: false };
        queue.push(name);
    });

    // company = {name : {[applicant], priority, capacity}}
    // apply = {name : {[priority], state}}

    while (queue.length > 0) {
        // 1단계. 지원자는 거절당하지 않았던 기업 중에서 자신의 선호도가 가장 높은 기업 한 곳에 지원합니다. 
        // 입사 희망 기업으로부터 모두 거절당하면 지원을 중단합니다.
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const aName = queue.shift();
            if(apply[aName].priority.length !== 0) {
                const cName = apply[aName].priority.shift();
                company[cName].applicant.push(aName);
            }
        }
        //2단계. 기업은 채용 인원수를 넘지 않는 한도 내에서 선호도가 높은 순서대로 지원자를 잠정 선택합니다. 선택하지 않은 지원자들은 거절합니다.
        for (const cName in company) {
            if (company.hasOwnProperty(cName)) {
                const [applicant, priority, capacity] = [company[cName].applicant, company[cName].priority, company[cName].capacity];
                const newApplicant = [];
                for (const aName of priority) {
                    if(applicant.includes(aName)) {
                        if(newApplicant.length >= +capacity) {
                            queue.push(aName);
                        } else newApplicant.push(aName);
                    }
                }
                company[cName].applicant = [...newApplicant];
            }
        }
        //3단계. 거절당한 지원자들 중에서 다른 기업에 지원할 지원자가 있다면 1단계부터 반복하고, 없다면 현재의 잠정 선택을 최종 매칭으로 결정합니다.
    }
// company = {name : {[applicant], priority, capacity}}
    for (const key in company) {
        if (company.hasOwnProperty(key)) {
            answer.push(key+"_"+company[key].applicant.sort().join(''));
        }
    }
    return answer;
}

console.log(
    solution(
        ['A fabdec 2', 'B cebdfa 2', 'C ecfadb 2'],
        ['a BAC 1', 'b BAC 3', 'c BCA 2', 'd ABC 3', 'e BCA 3', 'f ABC 2']
    )
);
console.log(solution(['A abc 2', 'B abc 1'], ['a AB 1', 'b AB 1', 'c AB 1']));
